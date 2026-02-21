const DISPLAY_NUMBER = process.env.NEXT_PUBLIC_TWILIO_DISPLAY_NUMBER ?? '(888) 431-7940'

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-stone-50 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
        <p>
          Built by the Interloop team &middot; Text{' '}
          <span className="font-medium text-stone-500">START</span> to{' '}
          <span className="font-medium text-stone-500">{DISPLAY_NUMBER}</span>
        </p>

        <div className="flex items-center gap-5">
          <a href="/privacy" className="hover:text-stone-600 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-stone-600 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
