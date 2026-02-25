'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="get-started" className="px-6 py-12 sm:py-20">
      <div className="max-w-md mx-auto text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#A8B8CC' }}
        >
          Get Started
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Your briefing awaits
        </h2>
        <p className="text-lg mb-10" style={{ color: '#A8B8CC' }}>
          Enter your email and we&apos;ll keep you in the loop every morning.
        </p>

        {status === 'success' ? (
          <div
            className="rounded-2xl px-6 py-5"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <p className="text-white font-medium text-base leading-relaxed">
              You&apos;re on the list! Expect your first briefing tomorrow morning.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-full text-base text-white placeholder:text-white/40 focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 rounded-full font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97] transition-all duration-150 whitespace-nowrap"
                style={{ background: '#ffffff', color: '#0A1628' }}
              >
                {status === 'loading' ? 'Joining…' : 'Join the Loop →'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            <p className="text-sm" style={{ color: '#A8B8CC' }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
