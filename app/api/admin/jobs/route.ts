import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { fallbackJobs } from '@/lib/jobs-data'

// GET /api/admin/jobs — Fetch ALL jobs (including inactive) for admin
export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await query('SELECT * FROM jobs ORDER BY created_at DESC')
    return NextResponse.json({ jobs: result.rows })
  } catch (error: any) {
    console.warn('Admin fetch jobs using fallback:', error.message)
    return NextResponse.json({ jobs: fallbackJobs, fallback: true })
  }
}
