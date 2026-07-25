'use client'

import { useEffect, useState } from 'react'
import { Gatekeeper } from '@/components/layout/Gatekeeper'
import { Navigation } from '@/components/layout/Navigation'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Hero } from '@/components/animation/Hero'
import { Release } from '@/components/sections/Release'
import { Philosophy } from '@/components/sections/Philosophy'
import { Mantra } from '@/components/sections/Mantra'
import { Resonance } from '@/components/sections/Resonance'
import { CTASection } from '@/components/ui/CTASection'
import { Footer } from '@/components/layout/Footer'
import { ScrollStrobe } from '@/components/effects/ScrollStrobe'
import { GoldDust } from '@/components/effects/GoldDust'
import { CurtainReveal } from '@/components/effects/CurtainReveal'

export default function Home() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setEntered(() => sessionStorage.getItem('bg-entered') === 'true')
  }, [])

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
          <ScrollStrobe />
          <GoldDust />
          <header>
            <Navigation />
          </header>
          <main id="main-content" tabIndex={-1}>
            <CurtainReveal direction="up">
              <Hero />
            </CurtainReveal>
            <CurtainReveal direction="left">
              <Release />
            </CurtainReveal>
            <CurtainReveal direction="right">
              <Philosophy />
            </CurtainReveal>
            <CurtainReveal direction="up">
              <Mantra />
            </CurtainReveal>
            <Resonance />
            <CurtainReveal direction="up">
              <CTASection />
            </CurtainReveal>
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </>
  )
}
