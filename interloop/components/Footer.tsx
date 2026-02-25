const DISPLAY_NUMBER = process.env.NEXT_PUBLIC_TWILIO_DISPLAY_NUMBER ?? '(888) 431-7940'

export default function Footer() {
  return (
    <footer
      className="px-6 py-6 sm:py-8"
      style={{
        background: '#070F1A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm"
        style={{ color: '#A8B8CC' }}
      >
        <p>Built by the Interloop team &middot; Stay in the loop</p>

        <div className="flex items-center gap-5">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
