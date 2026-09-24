import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { getAdminSession } from '@/lib/auth'
import { fallbackEnquiries, Enquiry } from '@/lib/jobs-data'

// POST /api/contact — Public endpoint to submit contact enquiry
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, organisation, designation, email, phone, location, area_of_interest, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const result = await query(
      `INSERT INTO enquiries (name, organisation, designation, email, phone, location, area_of_interest, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [name, organisation || '', designation || '', email, phone || '', location || '', area_of_interest || '', message]
    )
    return NextResponse.json({ enquiry: result.rows[0], message: 'Enquiry submitted successfully' }, { status: 201 })
  } catch (error: any) {
    console.error('Submit enquiry error:', error.message)
    return NextResponse.json({ error: 'Enquiry could not be saved. Database is unavailable.' }, { status: 503 })
  }
}

// GET /api/contact — Admin-only endpoint to view all enquiries
export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await query('SELECT * FROM enquiries ORDER BY created_at DESC')
    return NextResponse.json({ enquiries: result.rows })
  } catch (error: any) {
    console.warn('DB fetch enquiries failed, returning memory store:', error.message)
    return NextResponse.json({ enquiries: fallbackEnquiries, fallback: true })
  }
}

// DELETE /api/contact — Admin-only endpoint to delete an enquiry
export async function DELETE(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Enquiry ID required' }, { status: 400 })
    }

    try {
      await query('DELETE FROM enquiries WHERE id = $1', [id])
      return NextResponse.json({ message: 'Enquiry deleted' })
    } catch (dbErr: any) {
      console.warn('DB delete enquiry failed, removing from fallback:', dbErr.message)
      const idx = fallbackEnquiries.findIndex((e) => String(e.id) === id)
      if (idx !== -1) {
        fallbackEnquiries.splice(idx, 1)
      }
      return NextResponse.json({ message: 'Enquiry deleted', fallback: true })
    }
  } catch (error: any) {
    console.error('Delete enquiry error:', error.message)
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 })
  }
}
