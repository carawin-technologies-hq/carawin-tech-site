import { NextResponse } from 'next/server'
import { getTokenCookieOptions } from '@/lib/auth'

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out' })
  const cookieOptions = getTokenCookieOptions()
  response.cookies.set(cookieOptions.name, '', { ...cookieOptions, maxAge: 0 })
  return response
}
