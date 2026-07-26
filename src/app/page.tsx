'use client'

import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/animation/Hero'
import { Release } from '@/components/sections/Release'
import { Philosophy } from '@/components/sections/Philosophy'
import { Mantra } from '@/components/sections/Mantra'
import { Resonance } from '@/components/sections/Resonance'
import { CTASection } from '@/components/ui/CTASection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <header>
        <Navigation />
      </header>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Release />
        <Philosophy />
        <Mantra />
        <Resonance />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
