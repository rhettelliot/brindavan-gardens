'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.cta-content'), { y: 30, duration: 0.9 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="cta-content">
          {/* Symbol */}
          <div className="text-3xl mb-6 animate-shimmer text-gold-dim">
            ✦
          </div>

          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold italic tracking-[-0.02em] leading-[1.05] text-gold-pale"
          >
            Bring your frequency to the garden.
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase mt-4 text-gold-dim">
            Manteis Recordings — accepting demos from artists in resonance
          </p>

          <div className="mt-10">
            <a
              href="mailto:demo@manteisrecordings.com"
              className="inline-block font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 border btn-warm text-gold border-gold hover:bg-gold hover:text-void"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6B35'
                e.currentTarget.style.color = '#020203'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#FF6B35'
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
