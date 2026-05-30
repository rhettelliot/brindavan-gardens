import type { Metadata } from 'next'
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${cormorant.variable}`}>
      <body className="bg-void text-light antialiased">
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