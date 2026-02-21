'use client'

const SMS_LINK = process.env.NEXT_PUBLIC_SMS_LINK ?? 'sms:+18884317940&body=START'

export default function Navbar() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <span className="font-display text-xl font-bold text-stone-900 tracking-tight">
          Interloop
        </span>

        {/* Right nav */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToHowItWorks}
            className="hidden sm:block text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
          >
            How It Works
          </button>
          <a
            href={SMS_LINK}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-coral-500 text-white text-sm font-semibold hover:bg-coral-600 active:scale-[0.97] transition-all duration-150 shadow-sm shadow-coral-200"
          >
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 0H2C.9 0 0 .9 0 2v16l4-4h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 12H4l-2 2V2h14v10z"
                fill="currentColor"
              />
            </svg>
            Text Interloop
          </a>
        </div>
      </div>
    </nav>
  )
}
