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
  title: 'Brindavan Gardens — Upekṣā | Spiritual / Shoegaze / Dream',
  description: 'Spiritual. Shoegaze. Dream. Guitar as prayer. Upekṣā — equanimity through sound. Manteis Recordings.',
  keywords: ['Brindavan Gardens', 'Upekṣā', 'upeksha', 'spiritual', 'shoegaze', 'dream', 'meditation', 'drone', 'Manteis Recordings', 'Seattle'],
  authors: [{ name: 'Brindavan Gardens' }],
  creator: 'Brindavan Gardens',
  publisher: 'Manteis Recordings',
  metadataBase: new URL('https://brindavangardens.com'),
  alternates: {
    canonical: 'https://brindavangardens.com',
  },
  openGraph: {
    title: 'Brindavan Gardens — Upekṣā',
    description: 'Spiritual / Shoegaze / Dream — Manteis Recordings',
    type: 'website',
    url: 'https://brindavangardens.com',
    siteName: 'Brindavan Gardens',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 1200, alt: 'Brindavan Gardens — Upekṣā — Manteis Recordings' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brindavan Gardens — Upekṣā',
    description: 'Spiritual / Shoegaze / Dream — Manteis Recordings',
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicAlbum',
  name: 'Upekṣā',
  byArtist: {
    '@type': 'MusicGroup',
    name: 'Brindavan Gardens',
  },
  recordLabel: {
    '@type': 'Organization',
    name: 'Manteis Recordings',
  },
  catalogNumber: 'MR-001',
  datePublished: '2024',
  genre: ['Spiritual', 'Shoegaze', 'Dream', 'Meditation'],
  url: 'https://brindavangardens.com',
  image: 'https://brindavangardens.com/og.jpg',
  description: 'Equanimity through sound. Shoegaze walls that dissolve into devotional drones. Guitar as prayer, reverb as cathedral. Where dream meets devotion.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <noscript>
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020203', color: '#D4A843', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', padding: 24 }}>
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