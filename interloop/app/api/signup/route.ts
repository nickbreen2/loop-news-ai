import { NextRequest, NextResponse } from 'next/server'
import { normalizePhone } from '@/lib/phone'
import { startOnboarding } from '@/lib/onboarding'
import { logAnalytics } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { phone_number } = body

    if (!phone_number || typeof phone_number !== 'string') {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 })
    }

    const normalized = normalizePhone(phone_number)
    if (!normalized) {
      return NextResponse.json(
        { error: 'Please enter a valid US phone number.' },
        { status: 400 }
      )
    }

    const status = await startOnboarding(normalized)

    await logAnalytics('form_submit', normalized, undefined, { result: status })

    return NextResponse.json({ status })
  } catch (err) {
    console.error('[/api/signup]', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
