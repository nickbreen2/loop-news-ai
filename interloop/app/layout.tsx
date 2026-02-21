import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Plus Jakarta Sans — distinctive, personality-driven, professional
// Available on Google Fonts, great as both display and body font
const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Interloop — AI News Briefings, Texted to You',
  description:
    'Your AI assistant texts you personalized tech news every morning — tools, breakthroughs, and opportunities tailored to what you actually care about.',
  openGraph: {
    title: 'Interloop — AI News Briefings, Texted to You',
    description:
      'Your AI assistant texts you personalized tech news every morning — tools, breakthroughs, and opportunities tailored to what you actually care about.',
    url: 'https://interloop.news',
    siteName: 'Interloop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interloop — AI News Briefings, Texted to You',
    description:
      'Your AI assistant texts you personalized tech news every morning.',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://interloop.news'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
