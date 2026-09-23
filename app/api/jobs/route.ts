import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { fallbackJobs, Job } from '@/lib/jobs-data'

// GET /api/jobs — Fetch all active jobs (public)
export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM jobs WHERE is_active = true ORDER BY created_at DESC'
    )
    return NextResponse.json({ jobs: result.rows })
  } catch (error: any) {
    console.warn('DB not reachable, returning fallback active jobs:', error.message)
    const activeJobs = fallbackJobs.filter(j => j.is_active)
    return NextResponse.json({ jobs: activeJobs, fallback: true })
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
    const { title, department, location, experience_level, job_type, description, requirements } = body

    if (!title || !department || !location || !experience_level || !job_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    try {
      const result = await query(
        `INSERT INTO jobs (title, department, location, experience_level, job_type, description, requirements)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [title, department, location, experience_level, job_type, description || '', requirements || '']
      )
      return NextResponse.json({ job: result.rows[0] }, { status: 201 })
    } catch (dbErr: any) {
      console.warn('DB insert failed, falling back to memory store:', dbErr.message)
      const newJob: Job = {
        id: Date.now(),
        title,
        department,
        location,
        experience_level,
        job_type,
        description: description || '',
        requirements: requirements || '',
        created_at: new Date().toISOString(),
        is_active: true,
      }
      fallbackJobs.unshift(newJob)
      return NextResponse.json({ job: newJob, fallback: true }, { status: 201 })
    }
  } catch (error: any) {
    console.error('Create job error:', error.message)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
