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
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden bg-void">
      {/* Background Aura specifically for the CTA Card */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,168,67,0.15) 0%, rgba(62,123,153,0.05) 50%, transparent 80%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Large Glassmorphic Invitation Card */}
        <div className="cta-content glass-card py-20 px-8 md:px-16 relative overflow-hidden rounded-sm border border-gold/15">
          {/* Corner structural bracket designs for premium look */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/20 pointer-events-none" />

          {/* Symbol */}
          <div className="text-4xl mb-8 animate-[spin_12s_linear_infinite] text-gold-pale hover:text-gold transition-colors duration-300 cursor-default select-none">
            ✦
          </div>

          <h2
            className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-semibold italic tracking-[-0.03em] leading-[1.08] text-gold-pale text-glow-gold mb-6"
          >
            Bring your frequency <br className="hidden md:block"/>to the garden.
          </h2>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase mt-4 text-gold-dim max-w-xl mx-auto leading-relaxed">
            Manteis Recordings — accepting demos from artists in resonance
          </p>

          <div className="mt-12">
            <a
              href="mailto:demo@manteisrecordings.com"
              className="btn-premium-gold font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5 rounded-none"
            >
              Submit Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
