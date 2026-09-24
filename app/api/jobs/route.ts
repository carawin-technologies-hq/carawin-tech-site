import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { Job } from '@/lib/jobs-data'

// GET /api/jobs — Fetch all active jobs (public)
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM jobs WHERE is_active = true ORDER BY created_at DESC'
    )
    return NextResponse.json({ jobs: result.rows })
  } catch (error: any) {
    console.error('Fetch jobs error:', error.message)
    return NextResponse.json({ error: 'Jobs could not be loaded. Database is unavailable.' }, { status: 503 })
  }
}

// POST /api/jobs — Create a new job (admin-only)
export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, department, location, experience_level, job_type, description, requirements, skills } = body

    if (!title || !department || !location || !experience_level || !job_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const result = await query(
      `INSERT INTO jobs (title, department, location, experience_level, job_type, description, requirements, skills)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [title, department, location, experience_level, job_type, description || '', requirements || '', skills || '']
    )
    return NextResponse.json({ job: result.rows[0] }, { status: 201 })
  } catch (error: any) {
    console.error('Create job error:', error.message)
    return NextResponse.json({ error: 'Job could not be saved. Database is unavailable.' }, { status: 503 })
  }
}
