import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  // TODO: Wire to email provider (e.g. Resend, Mailchimp, ConvertKit)

  return NextResponse.json({ success: true })
}
