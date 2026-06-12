import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { Inter, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brindavan Gardens',
  description: 'Spiritual. Shoegaze. Dream. Guitar as prayer. Manteis Recordings.',
  metadataBase: new URL('https://brindavangardens.com'),
  openGraph: {
    title: 'Brindavan Gardens',
    description: 'Spiritual / Shoegaze / Dream — Manteis Recordings',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 1200, alt: 'Brindavan Gardens — Manteis Recordings' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brindavan Gardens',
    description: 'Spiritual / Shoegaze / Dream — Manteis Recordings',
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#020203',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${cormorant.variable}`}>
      <body className="bg-void text-light antialiased">
        <noscript>
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020203', color: '#FF6B35', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', padding: 24 }}>
            Brindavan Gardens is an interactive experience — enable JavaScript to enter.
          </div>
        </noscript>
        <div className="noise-overlay" />
        <div
          className="warm-vignette fixed top-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to bottom, rgba(5,4,2,0.8) 0%, transparent 100%)' }}
        />
        <div
          className="warm-vignette fixed bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, rgba(5,4,2,0.8) 0%, transparent 100%)' }}
        />
        {children}
      </body>
    </html>
  )
}