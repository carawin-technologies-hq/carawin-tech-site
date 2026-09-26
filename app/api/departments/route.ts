import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { defaultDepartments, fallbackDepartments } from '@/lib/jobs-data'

let isTableInitialized = false

async function ensureDepartmentsTable() {
  if (isTableInitialized) return
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS departments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_departments_name ON departments(name);
    `)

    // Seed default departments if table is empty or missing them
    for (const dept of defaultDepartments) {
      await query(
        `INSERT INTO departments (name) VALUES ($1) ON CONFLICT (name) DO NOTHING`,
        [dept]
      )
    }

    // Also import any existing distinct departments from jobs table
    await query(`
      INSERT INTO departments (name)
      SELECT DISTINCT department FROM jobs
      WHERE department IS NOT NULL AND TRIM(department) != ''
      ON CONFLICT (name) DO NOTHING;
    `)

    isTableInitialized = true
  } catch (err: any) {
    console.warn('Departments table init warning:', err.message)
  }
}

// GET /api/departments — Fetch all available departments
export async function GET() {
  try {
    await ensureDepartmentsTable()
    const result = await query('SELECT name FROM departments ORDER BY name ASC')
    const list = result.rows.map((r: { name: string }) => r.name)

    // Merge with defaults & fallbacks so standard ones are always guaranteed
    const mergedSet = new Set([...defaultDepartments, ...fallbackDepartments, ...list])
    const finalDepartments = Array.from(mergedSet).sort((a, b) => a.localeCompare(b))

    return NextResponse.json({ departments: finalDepartments })
  } catch (error: any) {
    console.warn('Database error when fetching departments, using fallback:', error.message)
    const merged = Array.from(new Set([...defaultDepartments, ...fallbackDepartments])).sort()
    return NextResponse.json({ departments: merged, fallback: true })
  }
}

// POST /api/departments — Create a new custom department (admin-only)
export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const rawName = body?.name

    if (typeof rawName !== 'string') {
      return NextResponse.json({ error: 'Department name must be a string.' }, { status: 400 })
    }

    const trimmed = rawName.trim()
    if (!trimmed || trimmed.length < 2) {
      return NextResponse.json(
        { error: 'Department name must be at least 2 characters long.' },
        { status: 400 }
      )
    }

    if (trimmed.length > 100) {
      return NextResponse.json(
        { error: 'Department name must be 100 characters or fewer.' },
        { status: 400 }
      )
    }

    // Try DB insertion first
    try {
      await ensureDepartmentsTable()

      // Duplicate check (case-insensitive)
      const existing = await query(
        'SELECT name FROM departments WHERE LOWER(name) = LOWER($1)',
        [trimmed]
      )

      if (existing.rows.length > 0) {
        return NextResponse.json(
          {
            error: `Department "${existing.rows[0].name}" already exists.`,
            department: existing.rows[0].name,
          },
          { status: 409 }
        )
      }

      const insertResult = await query(
        'INSERT INTO departments (name) VALUES ($1) RETURNING name',
        [trimmed]
      )

      const savedName = insertResult.rows[0].name

      // Update in-memory fallback list as well
      if (!fallbackDepartments.includes(savedName)) {
        fallbackDepartments.push(savedName)
      }

      return NextResponse.json(
        {
          message: 'Department created successfully',
          department: savedName,
        },
        { status: 201 }
      )
    } catch (dbErr: any) {
      console.warn('DB error during department create, saving to in-memory fallback:', dbErr.message)

      // Fallback handling
      const existsInFallback = fallbackDepartments.some(
        (d) => d.toLowerCase() === trimmed.toLowerCase()
      )

      if (existsInFallback) {
        const found = fallbackDepartments.find(
          (d) => d.toLowerCase() === trimmed.toLowerCase()
        )!
        return NextResponse.json(
          { error: `Department "${found}" already exists.`, department: found },
          { status: 409 }
        )
      }

      fallbackDepartments.push(trimmed)

      return NextResponse.json(
        {
          message: 'Department added to session list',
          department: trimmed,
          fallback: true,
        },
        { status: 201 }
      )
    }
  } catch (error: any) {
    console.error('Department creation error:', error.message)
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 })
  }
}
