/**
 * Onboarding state machine.
 * Each function handles one step: parses the user's reply,
 * updates the DB, and returns the next bot message to send.
 */

import {
  type User,
  type OnboardingStatus,
  getUserByPhone,
  createUser,
  updateUser,
  logOnboarding,
} from './db'
import { sendSMS } from './twilio'

// ─── Messages ─────────────────────────────────────────────────────────────────

const MSG = {
  welcome: `Hey! Welcome to Interloop — I'm your AI news assistant. Every morning I'll text you a personalized briefing on what matters to you.\n\nLet's set you up (takes about 2 min). First — what's your name?`,

  askType: (name: string) =>
    `Great to meet you, ${name}! What best describes you?\n\n1 - Founder\n2 - Employee\n3 - Freelancer / Consultant\n4 - Student\n5 - Other`,

  askCompany: `Got it. What company or industry are you in? (Just type it — like "Stripe" or "fintech" or "healthcare")`,

  askRole: `Nice. And what's your role?\n\n1 - Engineering / Dev\n2 - Marketing / Growth\n3 - Product\n4 - Design\n5 - Leadership / Exec\n6 - Other`,

  askInterests: `Almost done. What do you want me to keep you posted on? Pick as many as you want (like "1, 3, 5"):\n\n1 - New tools and products\n2 - Competitor and industry moves\n3 - Local events and meetups\n4 - Research and breakthroughs\n5 - Funding and deals\n6 - All of the above`,

  askCity: `Last one — what city are you in? (Helps me find local events and relevant news near you)`,

  complete: (name: string) =>
    `You're all set, ${name}! Your first briefing arrives tomorrow morning.\n\nQuick tips:\n- Reply to any news item to learn more\n- React with any emoji to help me learn your taste\n- Text STOP anytime to unsubscribe\n\nTalk soon.`,

  alreadyComplete: (name: string) =>
    `Hey ${name}! Your briefings are being set up — you'll get your first one very soon. Hang tight!`,

  help: `You're subscribed to Interloop daily news briefings. Text STOP to unsubscribe. Questions? Email support@interloop.news`,

  fallback: (repeat: string) => `Hmm, didn't catch that. ${repeat}`,
  fallback2: (repeat: string) => `Sorry, can you try that again?\n\n${repeat}`,
}

// ─── Parsers ──────────────────────────────────────────────────────────────────

const USER_TYPE_MAP: Record<string, string> = {
  '1': 'founder',
  '2': 'employee',
  '3': 'freelancer',
  '4': 'student',
  '5': 'other',
  founder: 'founder',
  employee: 'employee',
  freelancer: 'freelancer',
  consultant: 'freelancer',
  student: 'student',
  other: 'other',
}

const ROLE_MAP: Record<string, string> = {
  '1': 'engineering',
  '2': 'marketing',
  '3': 'product',
  '4': 'design',
  '5': 'leadership',
  '6': 'other',
  engineering: 'engineering',
  dev: 'engineering',
  developer: 'engineering',
  marketing: 'marketing',
  growth: 'marketing',
  product: 'product',
  design: 'design',
  designer: 'design',
  leadership: 'leadership',
  exec: 'leadership',
  other: 'other',
}

const INTEREST_MAP: Record<string, string> = {
  '1': 'new_tools',
  '2': 'competition',
  '3': 'events',
  '4': 'breakthroughs',
  '5': 'funding',
}

function parseInterests(input: string): string[] | null {
  const lower = input.toLowerCase().trim()

  if (lower === '6' || lower.includes('all')) {
    return ['new_tools', 'competition', 'events', 'breakthroughs', 'funding']
  }

  // Split on commas, spaces, or combinations
  const tokens = lower.split(/[\s,]+/).filter(Boolean)
  const interests: string[] = []

  for (const token of tokens) {
    const mapped = INTEREST_MAP[token]
    if (mapped && !interests.includes(mapped)) {
      interests.push(mapped)
    }
  }

  return interests.length > 0 ? interests : null
}

// ─── State machine ────────────────────────────────────────────────────────────

export async function handleIncoming(from: string, body: string): Promise<void> {
  const text = body.trim()
  const lower = text.toLowerCase()

  // Global commands
  if (lower === 'stop') {
    await updateUser(from, { is_active: false })
    return // Twilio handles STOP opt-out at carrier level
  }

  if (lower === 'help') {
    await sendSMS(from, MSG.help)
    return
  }

  // Get or create user
  let user = await getUserByPhone(from)

  if (lower === 'restart' && user) {
    user = await updateUser(from, {
      onboarding_status: 'not_started',
      name: null,
      user_type: null,
      company_or_industry: null,
      role: null,
      interests: null,
      city: null,
    })
  }

  if (!user) {
    user = await createUser(from)
  }

  if (!user.is_active) {
    // Reactivate on any inbound text after STOP
    user = await updateUser(from, { is_active: true })
  }

  await processStep(user, text, lower)
}

async function processStep(user: User, text: string, lower: string): Promise<void> {
  const { phone_number, onboarding_status } = user

  switch (onboarding_status) {
    case 'not_started': {
      await updateUser(phone_number, { onboarding_status: 'asked_name' })
      await logOnboarding(user.id, 'not_started', text, MSG.welcome)
      await sendSMS(phone_number, MSG.welcome)
      break
    }

    case 'asked_name': {
      const name = capitalize(text.trim())
      await updateUser(phone_number, { name, onboarding_status: 'asked_type' })
      const response = MSG.askType(name)
      await logOnboarding(user.id, 'asked_name', text, response)
      await sendSMS(phone_number, response)
      break
    }

    case 'asked_type': {
      const userType = USER_TYPE_MAP[lower.trim()]
      if (!userType) {
        const repeat = MSG.askType(user.name ?? 'there')
        await sendSMS(phone_number, MSG.fallback(repeat))
        break
      }
      await updateUser(phone_number, { user_type: userType, onboarding_status: 'asked_company' })
      await logOnboarding(user.id, 'asked_type', text, MSG.askCompany)
      await sendSMS(phone_number, MSG.askCompany)
      break
    }

    case 'asked_company': {
      const company = text.trim()
      await updateUser(phone_number, {
        company_or_industry: company,
        onboarding_status: 'asked_role',
      })
      await logOnboarding(user.id, 'asked_company', text, MSG.askRole)
      await sendSMS(phone_number, MSG.askRole)
      break
    }

    case 'asked_role': {
      const role = ROLE_MAP[lower.trim()]
      if (!role) {
        await sendSMS(phone_number, MSG.fallback2(MSG.askRole))
        break
      }
      await updateUser(phone_number, { role, onboarding_status: 'asked_interests' })
      await logOnboarding(user.id, 'asked_role', text, MSG.askInterests)
      await sendSMS(phone_number, MSG.askInterests)
      break
    }

    case 'asked_interests': {
      const interests = parseInterests(text)
      if (!interests) {
        await sendSMS(phone_number, MSG.fallback(MSG.askInterests))
        break
      }
      await updateUser(phone_number, { interests, onboarding_status: 'asked_city' })
      await logOnboarding(user.id, 'asked_interests', text, MSG.askCity)
      await sendSMS(phone_number, MSG.askCity)
      break
    }

    case 'asked_city': {
      const city = text.trim()
      const name = user.name ?? 'there'
      const response = MSG.complete(name)
      await updateUser(phone_number, { city, onboarding_status: 'completed' })
      await logOnboarding(user.id, 'asked_city', text, response)
      await sendSMS(phone_number, response)
      break
    }

    case 'completed': {
      const response = MSG.alreadyComplete(user.name ?? 'there')
      await logOnboarding(user.id, 'completed', text, response)
      await sendSMS(phone_number, response)
      break
    }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Used by /api/signup to kick off onboarding for web signups
export async function startOnboarding(phone: string): Promise<'onboarding_started' | 'onboarding_resumed' | 'already_registered'> {
  const existing = await getUserByPhone(phone)

  if (!existing) {
    const user = await createUser(phone)
    await updateUser(phone, { onboarding_status: 'asked_name' })
    const MSG_WELCOME = `Hey! Welcome to Interloop — I'm your AI news assistant. Every morning I'll text you a personalized briefing on what matters to you.\n\nLet's set you up (takes about 2 min). First — what's your name?`
    await logOnboarding(user.id, 'not_started', 'web_signup', MSG_WELCOME)
    await sendSMS(phone, MSG_WELCOME)
    return 'onboarding_started'
  }

  if (existing.onboarding_status === 'completed') {
    return 'already_registered'
  }

  // Resume at current step — re-send the prompt for where they left off
  await resendCurrentStep(existing)
  return 'onboarding_resumed'
}

async function resendCurrentStep(user: User): Promise<void> {
  const { phone_number, onboarding_status, name } = user
  const displayName = name ?? 'there'

  const messages: Partial<Record<OnboardingStatus, string>> = {
    asked_name: MSG.welcome,
    asked_type: MSG.askType(displayName),
    asked_company: MSG.askCompany,
    asked_role: MSG.askRole,
    asked_interests: MSG.askInterests,
    asked_city: MSG.askCity,
  }

  const msg = messages[onboarding_status]
  if (msg) {
    await sendSMS(phone_number, msg)
  }
}
