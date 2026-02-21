import twilio from 'twilio'

let client: ReturnType<typeof twilio> | null = null

function getClient() {
  if (!client) {
    client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    )
  }
  return client
}

export async function sendSMS(to: string, body: string, mediaUrl?: string): Promise<void> {
  const params: Parameters<ReturnType<typeof twilio>['messages']['create']>[0] = {
    from: process.env.TWILIO_PHONE_NUMBER!,
    to,
    body,
  }

  if (mediaUrl) {
    params.mediaUrl = [mediaUrl]
  }

  await getClient().messages.create(params)
}
