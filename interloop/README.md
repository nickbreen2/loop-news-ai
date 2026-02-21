# Interloop — Sprint 1

AI-powered SMS news briefings. Users sign up via landing page, complete a conversational onboarding over SMS, and receive personalized daily briefings.

## Stack

- **Frontend:** Next.js 16 (App Router) + Tailwind CSS v4
- **Database:** PostgreSQL (Supabase / Neon / Railway)
- **SMS:** Twilio toll-free `(888) 431-7940`
- **Deployment:** Vercel

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
# Fill in your real values
```

| Variable | Description |
|---|---|
| `TWILIO_ACCOUNT_SID` | From Twilio console |
| `TWILIO_AUTH_TOKEN` | From Twilio console |
| `TWILIO_PHONE_NUMBER` | `+18884317940` |
| `DATABASE_URL` | PostgreSQL connection string |
| `ANTHROPIC_API_KEY` | For Sprint 2 |
| `NEXT_PUBLIC_SITE_URL` | `https://interloop.news` |

### 3. Database

Run `schema.sql` against your PostgreSQL instance:

```bash
# Supabase / Neon: paste into their SQL Editor
# Railway: psql $DATABASE_URL < schema.sql
```

### 4. Configure Twilio webhook

In Twilio console → Phone Numbers → `(888) 431-7940`:

- **Messaging webhook URL:** `https://interloop.news/api/twilio/webhook`
- **HTTP method:** POST

For local testing, use ngrok:

```bash
ngrok http 3000
# Set webhook to: https://xxxx.ngrok.io/api/twilio/webhook
```

### 5. Run dev server

```bash
npm run dev
```

---

## Project Structure

```
interloop/
├── app/
│   ├── page.tsx                     # Landing page
│   ├── layout.tsx                   # Root layout, fonts, SEO
│   ├── globals.css                  # Tailwind v4 + coral palette
│   └── api/
│       ├── signup/route.ts          # POST /api/signup
│       └── twilio/webhook/route.ts  # POST /api/twilio/webhook
├── lib/
│   ├── db.ts                        # PostgreSQL queries
│   ├── twilio.ts                    # Twilio sendSMS helper
│   ├── onboarding.ts               # SMS state machine
│   └── phone.ts                     # E.164 normalization
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── SignupForm.tsx
│   └── Footer.tsx
└── schema.sql                       # Full DB schema (run once)
```

---

## Onboarding Flow

State machine driven by `users.onboarding_status`:

```
not_started → asked_name → asked_type → asked_company
           → asked_role → asked_interests → asked_city → completed
```

Global SMS commands:
- `STOP` — deactivate account (Twilio also handles at carrier level)
- `RESTART` — reset profile and restart onboarding
- `HELP` — send help message with unsubscribe instructions

---

## Deploying to Vercel

```bash
npx vercel --prod
```

Set all env vars in Vercel dashboard → Settings → Environment Variables.
