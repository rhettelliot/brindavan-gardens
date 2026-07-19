'use client'

import { useEffect, useState } from 'react'
import { Gatekeeper } from '@/components/layout/Gatekeeper'
import { Navigation } from '@/components/layout/Navigation'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Hero } from '@/components/animation/Hero'
import { Resonance } from '@/components/sections/Resonance'
import { Release } from '@/components/sections/Release'
import { Mantra } from '@/components/sections/Mantra'
import { CTASection } from '@/components/ui/CTASection'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  const [entered, setEntered] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('bg-entered') === 'true'
    }
    return false
  })

  useEffect(() => {
    const handleEnter = () => {
      sessionStorage.setItem('bg-entered', 'true')
      setEntered(true)
    }

    window.addEventListener('bg-enter', handleEnter)
    return () => window.removeEventListener('bg-enter', handleEnter)
  }, [])

  return (
    <>
      <Gatekeeper />
      {entered && (
        <SmoothScroll>
          <header>
            <Navigation />
          </header>
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <Resonance />
            <Release />
            <Mantra />
            <CTASection />
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </>
  )
}