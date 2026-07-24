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

const SITE_URL = 'https://brindavangardens.com'
const OG_IMAGE = '/og.jpg'
const COVER_IMAGE = '/covers/BrindavanGardens.webp'

export const metadata: Metadata = {
  title: 'Brindavan Gardens — Upekṣā | Spiritual / Shoegaze / Dream',
  description:
    'Spiritual. Shoegaze. Dream. Guitar as prayer. Upekṣā — equanimity through sound. A five-track devotional journey from Manteis Recordings (MR-007). Seattle, WA.',
  keywords: [
    'Brindavan Gardens',
    'Upekṣā',
    'upeksha',
    'spiritual',
    'shoegaze',
    'dream',
    'meditation',
    'drone',
    'ambient',
    'Manteis Recordings',
    'MR-007',
    'Seattle',
    'Dhyana',
    'Devotional Drift',
  ],
  authors: [{ name: 'Brindavan Gardens', url: SITE_URL }],
  creator: 'Brindavan Gardens',
  publisher: 'Manteis Recordings',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Brindavan Gardens — Upekṣā',
    description:
      'Spiritual / Shoegaze / Dream — guitar as prayer, reverb as cathedral. Five tracks. 33:30. Manteis Recordings MR-007.',
    type: 'music.album',
    url: SITE_URL,
    siteName: 'Brindavan Gardens',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: 'Brindavan Gardens — Upekṣā — Manteis Recordings MR-007',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brindavan Gardens — Upekṣā',
    description: 'Spiritual / Shoegaze / Dream — Manteis Recordings MR-007',
    images: [OG_IMAGE],
    creator: '@manteisrecs',
  },
  robots: { index: true, follow: true },
  category: 'music',
  formatDetection: { telephone: false },
  other: {
    'profile:first_name': 'Brindavan',
    'profile:last_name': 'Gardens',
  },
}

// WebSite schema — helps with sitelinks search box eligibility
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Brindavan Gardens',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: 'Manteis Recordings',
    url: 'https://manteisrecordings.com',
  },
}

// MusicAlbum schema — rich release data
const albumSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicAlbum',
  name: 'Upekṣā',
  alternateName: 'Upeksha',
  byArtist: {
    '@type': 'MusicGroup',
    name: 'Brindavan Gardens',
    url: SITE_URL,
  },
  recordLabel: {
    '@type': 'Organization',
    name: 'Manteis Recordings',
    url: 'https://manteisrecordings.com',
  },
  catalogNumber: 'MR-007',
  datePublished: '2024',
  genre: ['Spiritual', 'Shoegaze', 'Dream', 'Meditation', 'Ambient'],
  duration: 'PT33M30S',
  numTracks: 5,
  url: SITE_URL,
  image: `${SITE_URL}${COVER_IMAGE}`,
  description:
    'Equanimity through sound. Shoegaze walls that dissolve into devotional drones. Guitar as prayer, reverb as cathedral. Where dream meets devotion.',
  track: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'MusicRecording',
          name: 'Dhyana',
          recordingOf: { '@type': 'MusicComposition', name: 'Dhyana' },
          duration: 'PT5M42S',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'MusicRecording',
          name: 'Shovel of Stars',
          duration: 'PT4M58S',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'MusicRecording',
          name: 'Garden Threshold',
          duration: 'PT6M14S',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'MusicRecording',
          name: 'Devotional Drift',
          duration: 'PT7M05S',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'MusicRecording',
          name: 'Upekṣā',
          duration: 'PT8M31S',
        },
      },
    ],
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    offerCount: '2',
    offers: [
      {
        '@type': 'Offer',
        name: 'DistroKid Hyperfollow',
        url: 'https://distrokid.com/hyperfollow/brindavangardens/upek/',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Spotify',
        url: 'https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
}

// BreadcrumbList schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Manteis Recordings',
      item: 'https://manteisrecordings.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Brindavan Gardens',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Upekṣā',
      item: SITE_URL,
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${cormorant.variable}`}>
      <body className="bg-void text-light antialiased">
        {/* JSON-LD structured data — triple schema for max rich result eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(albumSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <noscript>
          <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020203', color: '#D4A843', fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', padding: 24 }}>
            Brindavan Gardens is an interactive experience — enable JavaScript to enter.
          </div>
        </noscript>
        <div className="noise-overlay" aria-hidden="true" />
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