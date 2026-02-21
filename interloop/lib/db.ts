import { Pool } from 'pg'

let pool: Pool | null = null

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    })
  }
  return pool
}

export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const client = getPool()
  const result = await client.query(text, params)
  return result.rows as T[]
}

// ─── User queries ─────────────────────────────────────────────────────────────

export type OnboardingStatus =
  | 'not_started'
  | 'asked_name'
  | 'asked_type'
  | 'asked_company'
  | 'asked_role'
  | 'asked_interests'
  | 'asked_city'
  | 'completed'

export interface User {
  id: string
  phone_number: string
  name: string | null
  user_type: string | null
  company_or_industry: string | null
  role: string | null
  interests: string[] | null
  city: string | null
  onboarding_status: OnboardingStatus
  briefing_time: string
  timezone: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function getUserByPhone(phone: string): Promise<User | null> {
  const rows = await query<User>(
    'SELECT * FROM users WHERE phone_number = $1',
    [phone]
  )
  return rows[0] ?? null
}

export async function createUser(phone: string): Promise<User> {
  const rows = await query<User>(
    `INSERT INTO users (phone_number, onboarding_status)
     VALUES ($1, 'not_started')
     RETURNING *`,
    [phone]
  )
  return rows[0]
}

export async function updateUser(
  phone: string,
  fields: Partial<Omit<User, 'id' | 'phone_number' | 'created_at' | 'updated_at'>>
): Promise<User> {
  const keys = Object.keys(fields) as (keyof typeof fields)[]
  const values = keys.map((k) => fields[k])
  const setClause = keys.map((k, i) => `${k} = $${i + 2}`).join(', ')

  const rows = await query<User>(
    `UPDATE users SET ${setClause}, updated_at = NOW() WHERE phone_number = $1 RETURNING *`,
    [phone, ...values]
  )
  return rows[0]
}

// ─── Onboarding log ───────────────────────────────────────────────────────────

export async function logOnboarding(
  userId: string,
  step: string,
  userMessage: string,
  botResponse: string
): Promise<void> {
  await query(
    `INSERT INTO onboarding_logs (user_id, step, user_message, bot_response)
     VALUES ($1, $2, $3, $4)`,
    [userId, step, userMessage, botResponse]
  )
}

// ─── Analytics ────────────────────────────────────────────────────────────────

export async function logAnalytics(
  eventType: string,
  phone?: string,
  step?: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  await query(
    `INSERT INTO signup_analytics (event_type, phone_number, step, metadata)
     VALUES ($1, $2, $3, $4)`,
    [eventType, phone ?? null, step ?? null, metadata ? JSON.stringify(metadata) : null]
  )
}
