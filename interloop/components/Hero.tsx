'use client'

const SMS_LINK = process.env.NEXT_PUBLIC_SMS_LINK ?? 'sms:+18884317940&body=START'
const DISPLAY_NUMBER = process.env.NEXT_PUBLIC_TWILIO_DISPLAY_NUMBER ?? '(888) 431-7940'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Subtle background grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Signal orb illustration */}
      <div className="relative mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center shadow-lg shadow-coral-200">
          {/* Waveform icon */}
          <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="10" width="4" height="8" rx="2" fill="white" opacity="0.7" />
            <rect x="8" y="4" width="4" height="20" rx="2" fill="white" opacity="0.85" />
            <rect x="16" y="0" width="4" height="28" rx="2" fill="white" />
            <rect x="24" y="4" width="4" height="20" rx="2" fill="white" opacity="0.85" />
            <rect x="32" y="8" width="4" height="12" rx="2" fill="white" opacity="0.7" />
            <rect x="40" y="12" width="4" height="4" rx="2" fill="white" opacity="0.5" />
          </svg>
        </div>
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full border-2 border-coral-300 animate-ping opacity-20" />
        <div className="absolute -inset-3 rounded-full border border-coral-200 animate-pulse opacity-30" />
      </div>

      {/* Headline */}
      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-5">
        Stay In The Loop.
        <br />
        <span className="text-coral-500">Every Morning.</span>
      </h1>

      {/* Subheadline */}
      <p className="max-w-xl text-lg sm:text-xl text-stone-500 leading-relaxed mb-10">
        Your AI assistant texts you personalized tech news every morning — tools,
        breakthroughs, and opportunities tailored to what you actually care about.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">
        <a
          href={SMS_LINK}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-coral-500 text-white font-semibold text-base shadow-md shadow-coral-200 hover:bg-coral-600 active:scale-[0.97] transition-all duration-150"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 0H2C.9 0 0 .9 0 2v16l4-4h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 12H4l-2 2V2h14v10z"
              fill="currentColor"
            />
          </svg>
          Text Interloop
        </a>

        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center px-7 py-4 rounded-2xl border-2 border-stone-900 text-stone-900 font-semibold text-base hover:bg-stone-900 hover:text-white active:scale-[0.97] transition-all duration-150"
        >
          Get Started
        </button>
      </div>

      {/* Display number hint */}
      <p className="mt-6 text-sm text-stone-400">
        Or text <span className="font-medium text-stone-500">START</span> to{' '}
        <span className="font-medium text-stone-500">{DISPLAY_NUMBER}</span>
      </p>

      {/* Sample iMessage mockup */}
      <div className="mt-14 w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-100 overflow-hidden">
          {/* iMessage header */}
          <div className="bg-stone-50 border-b border-stone-100 px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-coral-100 flex items-center justify-center text-coral-600 font-bold text-xs">
              IL
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-stone-800">Interloop</p>
              <p className="text-xs text-stone-400">{DISPLAY_NUMBER}</p>
            </div>
          </div>

          {/* Sample messages */}
          <div className="px-4 py-4 space-y-3 text-left">
            <div className="flex justify-start">
              <div className="bg-stone-100 text-stone-700 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] leading-snug">
                Good morning, Alex! Here's your Tuesday briefing.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-stone-100 text-stone-700 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] leading-snug">
                <span className="font-semibold">1.</span> Mistral released a new open-source coding model that beats GPT-4o on benchmarks — worth a look for your stack.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-stone-100 text-stone-700 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] leading-snug">
                <span className="font-semibold">2.</span> YC batch applications open tomorrow. Deadline Feb 28.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-coral-500 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] leading-snug">
                Tell me more about the Mistral model
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
