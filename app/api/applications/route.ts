import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { fallbackApplications, fallbackJobs, Application } from '@/lib/jobs-data'

// POST /api/applications — Submit application (public)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      job_id, first_name, last_name, email, phone,
      linkedin_url, cv_drive_link, country, area_of_interest,
      skills, cover_letter
    } = body

    if (!job_id || !first_name || !last_name || !email || !phone || !linkedin_url || !cv_drive_link) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const skillsStr = Array.isArray(skills) ? skills.join(', ') : (skills || '')

    try {
      const result = await query(
        `INSERT INTO applications (job_id, first_name, last_name, email, phone, linkedin_url, cv_drive_link, country, area_of_interest, skills, cover_letter)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [job_id, first_name, last_name, email, phone, linkedin_url, cv_drive_link, country || '', area_of_interest || '', skillsStr, cover_letter || '']
      )

      return NextResponse.json({ application: result.rows[0], message: 'Application submitted successfully' }, { status: 201 })
    } catch (dbErr: any) {
      console.warn('DB application insert failed, falling back to memory store:', dbErr.message)
      const newApp: Application = {
        id: Date.now(),
        job_id: Number(job_id),
        first_name,
        last_name,
        email,
        phone,
        linkedin_url,
        cv_drive_link,
        country: country || '',
        area_of_interest: area_of_interest || '',
        skills: skillsStr,
        cover_letter: cover_letter || '',
        created_at: new Date().toISOString(),
      }
      fallbackApplications.unshift(newApp)
      return NextResponse.json({ application: newApp, message: 'Application submitted successfully (offline mode)', fallback: true }, { status: 201 })
    }
  } catch (error: any) {
    console.error('Submit application error:', error.message)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}

// GET /api/applications — Fetch all applications (admin-only)
export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await query(
      `SELECT a.*, j.title as job_title, j.department as job_department
       FROM applications a
       LEFT JOIN jobs j ON a.job_id = j.id
       ORDER BY a.created_at DESC`
    )
    return NextResponse.json({ applications: result.rows })
  } catch (error: any) {
    console.warn('DB fetch applications failed, returning memory store:', error.message)
    const appsWithJobs = fallbackApplications.map(app => {
      const job = fallbackJobs.find(j => j.id === app.job_id)
      return {
        ...app,
        job_title: job ? job.title : `Job #${app.job_id}`,
        job_department: job ? job.department : 'General',
      }
    })
    return NextResponse.json({ applications: appsWithJobs, fallback: true })
  }
}
