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
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/interloop.news/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://x.com/Interloop_news" aria-label="X" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/interloop-news/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
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
