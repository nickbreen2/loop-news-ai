'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success_started' | 'success_resumed' | 'success_registered' | 'error'

const STATUS_MESSAGES: Record<Exclude<Status, 'idle' | 'loading' | 'error'>, string> = {
  success_started: "Check your texts! We just sent you a message to get started.",
  success_resumed: "We just re-sent your setup text! Pick up where you left off.",
  success_registered: "You're already signed up! Your next briefing is coming tomorrow morning.",
}

export default function SignupForm() {
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number: phone }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      switch (data.status) {
        case 'onboarding_started':
          setStatus('success_started')
          break
        case 'onboarding_resumed':
          setStatus('success_resumed')
          break
        case 'already_registered':
          setStatus('success_registered')
          break
        default:
          setStatus('success_started')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  const isSuccess = status.startsWith('success')

  return (
    <section id="get-started" className="px-6 py-20">
      <div className="max-w-md mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-coral-500 mb-3">
          Get Started
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
          Your briefing awaits
        </h2>
        <p className="text-stone-500 text-lg mb-10">
          Enter your number and we'll text you to set up your profile.
        </p>

        {isSuccess ? (
          <div className="bg-coral-50 border border-coral-100 rounded-2xl px-6 py-5">
            <p className="text-coral-700 font-medium text-base leading-relaxed">
              {STATUS_MESSAGES[status as keyof typeof STATUS_MESSAGES]}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                inputMode="numeric"
                placeholder="(555) 555-5555"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-2xl border-2 border-stone-200 bg-white text-stone-900 text-base placeholder:text-stone-400 focus:outline-none focus:border-coral-400 transition-colors duration-150"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 rounded-2xl bg-coral-500 text-white font-semibold text-base shadow-md shadow-coral-200 hover:bg-coral-600 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97] transition-all duration-150 whitespace-nowrap"
              >
                {status === 'loading' ? 'Sending…' : 'Get My Briefing'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}

            <p className="text-stone-400 text-sm">
              We'll text you to get started. No spam. Text{' '}
              <span className="font-medium text-stone-500">STOP</span> anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
