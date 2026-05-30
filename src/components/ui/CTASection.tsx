'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="cta-content">
          {/* Symbol */}
          <div className="text-3xl mb-6 animate-shimmer" style={{ color: '#A68535' }}>
            ✦
          </div>

          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold italic tracking-[-0.02em] leading-[1.05]"
            style={{ color: '#E8CC7A' }}
          >
            Bring your frequency to the garden.
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase mt-4" style={{ color: '#A68535' }}>
            Manteis Recordings — accepting demos from artists in resonance
          </p>

          <div className="mt-10">
            <a
              href="mailto:demo@manteisrecordings.com"
              className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 border btn-warm"
              style={{ borderColor: '#D4A843', color: '#D4A843' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A843'
                e.currentTarget.style.color = '#050402'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#D4A843'
              }}
            >
              Submit Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}