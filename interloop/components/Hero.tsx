'use client'

import { useState } from 'react'
import FloatingLogos from './FloatingLogos'


export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
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
      if (!res.ok) {
        const data = await res.json()
        setErrorMsg(data.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-start sm:justify-center flex-1 px-6 pt-32 pb-10 sm:pt-28 sm:pb-16 text-center overflow-hidden">
      <FloatingLogos />

      {/* Top fade — keeps the navbar area clean */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: '18%',
          background: 'linear-gradient(to bottom, #0A1628 0%, transparent 100%)',
          zIndex: 5,
        }}
      />

      {/* Centre safe-zone — mobile only: dims logos behind the main content so text stays legible */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 75% at 50% 44%, rgba(10,22,40,0.97) 40%, rgba(10,22,40,0.6) 65%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Centre grid — visible in the middle, fades to edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 48%, black 20%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 65% at 50% 48%, black 20%, transparent 75%)',
          zIndex: 3,
        }}
      />

      {/* Subtle background grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Headline */}
      <h1 className="relative z-10 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-5">
        Stay In The Loop.
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #c8d8e8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Every Morning.
        </span>
      </h1>

      {/* Subheadline */}
      <p
        className="relative z-10 max-w-xl text-sm sm:text-xl leading-relaxed mb-6"
        style={{ color: '#A8B8CC' }}
      >
        The most important Tech &amp; AI stories, curated and delivered to your inbox every morning. Stay in the loop — never miss a breakthrough, a tool, or a trend that matters.
      </p>

      {/* Email signup */}
      <div className="relative z-10 w-full max-w-md">
        {status === 'success' ? (
          <p className="text-white font-medium">You&apos;re on the list! We&apos;ll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Desktop: button inside the pill */}
            <div
              className="hidden sm:flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none py-2"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 rounded-full font-semibold text-base whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97] transition-all duration-150"
                style={{ background: '#ffffff', color: '#0A1628' }}
              >
                {status === 'loading' ? 'Joining…' : 'Join the Loop →'}
              </button>
            </div>

            {/* Mobile: stacked layout */}
            <div className="flex flex-col gap-3 sm:hidden">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-5 py-3.5 text-base text-white placeholder:text-white/40 focus:outline-none rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-full font-semibold text-base whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97] transition-all duration-150"
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
