'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const LOGOS = [
  // Left edge cards
  { id: 'AN', src: '/logos/anthropic.svg',   alt: 'Anthropic',    x: '4%',  y: '12%',                  opacity: 0.7, hideMobile: true  },
  { id: 'DM', src: '/logos/deepmind.svg',    alt: 'DeepMind',     x: '6%',  y: '52%',                  opacity: 0.7, hideMobile: true  },
  { id: 'RE', src: '/logos/reddit.svg',      alt: 'Reddit',       x: '10%', y: '78%', mobileX: '18%',  mobileY: '80%', opacity: 0.3, hideMobile: false },
  // Right edge cards
  { id: 'HF', src: '/logos/huggingface.svg', alt: 'Hugging Face', x: '84%', y: '8%',                   opacity: 0.7, hideMobile: true  },
  { id: 'TC', src: '/logos/techcrunch.svg',  alt: 'TechCrunch',   x: '87%', y: '42%', mobileX: '40%',  mobileY: '86%', opacity: 0.3, hideMobile: false },
  { id: 'AT', src: '/logos/arstechnica.svg', alt: 'Ars Technica', x: '89%', y: '72%',                  opacity: 0.7, hideMobile: true  },
  // Bottom corners
  { id: 'YC', src: '/logos/ycombinator.svg', alt: 'Y Combinator', x: '22%', y: '84%',                  opacity: 0.3, hideMobile: true  },
  { id: 'PP', src: '/logos/perplexity.svg',  alt: 'Perplexity',   x: '68%', y: '82%', mobileX: '64%',  mobileY: '80%', opacity: 0.3, hideMobile: false },
  // Far edges
  { id: 'VC', src: '/logos/vercel.svg',      alt: 'Vercel',       x: '1%',  y: '32%', mobileX: '3%',   mobileY: '68%', opacity: 0.3, hideMobile: false },
  { id: 'NV', src: '/logos/nvidia.svg',      alt: 'NVIDIA',       x: '91%', y: '28%', mobileX: '82%',  mobileY: '68%', opacity: 0.3, hideMobile: false },
  // Top corners
  { id: 'PH', src: '/logos/producthunt.svg', alt: 'Product Hunt', x: '18%', y: '4%',                   opacity: 0.3, hideMobile: true  },
  { id: 'SS', src: '/logos/substack.svg',    alt: 'Substack',     x: '73%', y: '3%',                   opacity: 0.7, hideMobile: true  },
]

export default function FloatingLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  // Sync with Tailwind's lg breakpoint (1024px) so JS and CSS agree on "phone"
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    let rafId: number
    const start = Date.now()

    const tick = () => {
      if (!containerRef.current) return
      const t = (Date.now() - start) / 1000

      const cards = containerRef.current.querySelectorAll<HTMLElement>('[data-fi]')
      cards.forEach((card) => {
        const i = parseFloat(card.dataset.fi ?? '0')
        const fx = 0.18 + i * 0.031
        const fy = 0.14 + i * 0.027
        const px = i * 1.3
        const py = i * 0.9
        const mx = Math.sin(t * fx + px) * 10
        const my = Math.cos(t * fy + py) * 10
        card.style.translate = `${mx}px ${my}px`
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {LOGOS.map((logo, i) => {
        // On mobile, skip logos that should be hidden — JS-controlled so it's
        // guaranteed regardless of CSS viewport edge cases
        if (isMobile && logo.hideMobile) return null

        return (
          <div
            key={logo.id}
            data-fi={i}
            className={logo.hideMobile ? 'hidden lg:block' : undefined}
            style={{
              position: 'absolute',
              left: isMobile && logo.mobileX ? logo.mobileX : logo.x,
              top: isMobile && logo.mobileY ? logo.mobileY : logo.y,
              width: 56,
              height: 56,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              borderRadius: 16,
              opacity: logo.opacity,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={32}
              height={32}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        )
      })}
    </div>
  )
}
