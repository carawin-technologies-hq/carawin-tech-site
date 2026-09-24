import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { fallbackJobs } from '@/lib/jobs-data'

// GET /api/jobs/[id] — Fetch single job
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const result = await query('SELECT * FROM jobs WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    return NextResponse.json({ job: result.rows[0] })
  } catch (error: any) {
    console.warn('DB error, searching fallback jobs:', error.message)
    const job = fallbackJobs.find((j) => String(j.id) === id)
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    return NextResponse.json({ job, fallback: true })
  }
}

// PATCH /api/jobs/[id] — Update job (admin-only)
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  try {
    const body = await request.json()
    const { title, department, location, experience_level, job_type, description, requirements, skills, is_active } = body

    try {
      const result = await query(
        `UPDATE jobs SET
          title = COALESCE($1, title),
          department = COALESCE($2, department),
          location = COALESCE($3, location),
          experience_level = COALESCE($4, experience_level),
          job_type = COALESCE($5, job_type),
          description = COALESCE($6, description),
          requirements = COALESCE($7, requirements),
          skills = COALESCE($8, skills),
          is_active = COALESCE($9, is_active)
        WHERE id = $10 RETURNING *`,
        [title, department, location, experience_level, job_type, description, requirements, skills, is_active, id]
      )

      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 })
      }

      return NextResponse.json({ job: result.rows[0] })
    } catch (dbErr: any) {
      console.warn('DB update failed, updating memory fallback:', dbErr.message)
      const jobIdx = fallbackJobs.findIndex((j) => String(j.id) === id)
      if (jobIdx === -1) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 })
      }
      fallbackJobs[jobIdx] = {
        ...fallbackJobs[jobIdx],
        ...(title !== undefined && { title }),
        ...(department !== undefined && { department }),
        ...(location !== undefined && { location }),
        ...(experience_level !== undefined && { experience_level }),
        ...(job_type !== undefined && { job_type }),
        ...(description !== undefined && { description }),
        ...(requirements !== undefined && { requirements }),
        ...(skills !== undefined && { skills }),
        ...(is_active !== undefined && { is_active }),
      }
      return NextResponse.json({ job: fallbackJobs[jobIdx], fallback: true })
    }
  } catch (error: any) {
    console.error('Update job error:', error.message)
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 })
  }
}

// DELETE /api/jobs/[id] — Permanently delete job (admin-only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  try {
    const result = await query(
      'DELETE FROM jobs WHERE id = $1 RETURNING *',
      [id]
    )
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Job permanently deleted', job: result.rows[0] })
  } catch (error: any) {
    console.error('Delete job error:', error.message)
    return NextResponse.json({ error: 'Job could not be deleted. Database is unavailable.' }, { status: 503 })
  }
}
