-- Interloop Sprint 1 — Database Schema
-- Run this against your PostgreSQL database (Supabase, Neon, or Railway)

-- ─── Users ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS users (
  id                  UUID          PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number        VARCHAR(20)   UNIQUE NOT NULL,
  name                VARCHAR(100),
  user_type           VARCHAR(50),          -- 'founder', 'employee', 'freelancer', 'student', 'other'
  company_or_industry TEXT,
  role                VARCHAR(50),          -- 'engineering', 'marketing', 'product', 'design', 'leadership', 'other'
  interests           TEXT[],               -- ['new_tools', 'competition', 'events', 'breakthroughs', 'funding']
  city                VARCHAR(100),
  onboarding_status   VARCHAR(20)   NOT NULL DEFAULT 'not_started',
    -- not_started | asked_name | asked_type | asked_company |
    -- asked_role | asked_interests | asked_city | completed
  briefing_time       VARCHAR(10)   NOT NULL DEFAULT '08:00',
  timezone            VARCHAR(50)   NOT NULL DEFAULT 'America/New_York',
  is_active           BOOLEAN       NOT NULL DEFAULT true,
  created_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── Onboarding logs ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS onboarding_logs (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        REFERENCES users(id) ON DELETE CASCADE,
  step         VARCHAR(50),
  user_message TEXT,
  bot_response TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_onboarding_logs_user_id ON onboarding_logs(user_id);

-- ─── Signup analytics ─────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS signup_analytics (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type   VARCHAR(50),   -- 'page_view', 'form_submit', 'sms_link_tap',
                               -- 'onboarding_start', 'onboarding_complete', 'onboarding_drop'
  phone_number VARCHAR(20),
  step         VARCHAR(50),
  metadata     JSONB,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_signup_analytics_event_type ON signup_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_signup_analytics_phone     ON signup_analytics(phone_number);

-- ─── Content sources (Sprint 2) ───────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS sources (
  id         SERIAL        PRIMARY KEY,
  name       VARCHAR(200)  NOT NULL,
  category   VARCHAR(50)   NOT NULL,  -- 'AI', 'Dev', 'Cybersecurity', 'Tech General', 'Startups', 'Newsletter'
  type       VARCHAR(20)   NOT NULL,  -- 'api', 'rss', 'scrape'
  url        TEXT          NOT NULL,
  status     VARCHAR(20)   NOT NULL DEFAULT 'active',  -- 'active', 'pending', 'check', 'inactive'
  notes      TEXT,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);
