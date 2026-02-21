import { NextRequest, NextResponse } from 'next/server'
import { handleIncoming } from '@/lib/onboarding'

// Twilio sends form-encoded POST requests
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const from = formData.get('From') as string | null
    const body = formData.get('Body') as string | null

    if (!from || !body) {
      // Return empty TwiML — Twilio requires a valid XML response
      return twimlResponse()
    }

    // Handle the message asynchronously so we respond to Twilio quickly
    handleIncoming(from, body).catch((err) => {
      console.error('[twilio/webhook] handleIncoming error:', err)
    })

    return twimlResponse()
  } catch (err) {
    console.error('[twilio/webhook]', err)
    return twimlResponse()
  }
}

function twimlResponse() {
  return new NextResponse('<Response></Response>', {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  })
}
