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
      disposers.push(await revealOnEnter(root.querySelectorAll('.cta-extra'), { y: 20, duration: 0.8, stagger: 0.1 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.mandala-accent'), { scale: 0.8, duration: 1, stagger: 0.12 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden bg-void">
      {/* Warm glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(212,168,67,0.08) 0%, transparent 55%)',
        }}
      />

      {/* 5. Orbital curves */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 opacity-20" viewBox="0 0 400 400" aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" className="orbital-curve" />
        <circle cx="200" cy="200" r="140" className="orbital-curve-thin" />
        <circle cx="200" cy="200" r="100" className="orbital-curve" />
        <circle cx="200" cy="200" r="60" className="orbital-curve-thin" />
      </svg>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-20 text-center">
        {/* Invitation Card */}
        <div className="cta-content void-panel py-20 px-8 md:px-16 relative overflow-hidden border border-gold/15">
          {/* Corner structural bracket designs */}
          <div className="bracket-corner tl" />
          <div className="bracket-corner tr" />
          <div className="bracket-corner bl" />
          <div className="bracket-corner br" />

          {/* 9. Mandala stamp */}
          <div className="mandala-accent absolute top-4 left-1/2 -translate-x-1/2 mandala-stamp w-16 h-16"
          >
            <span className="font-mono text-[9px] tracking-[0.1em] text-gold">
              ॐ
            </span>
          </div>

          {/* Symbol */}
          <div className="text-4xl mb-8 mt-8 animate-[spin_16s_linear_infinite] text-gold-pale hover:text-gold transition-colors duration-300 cursor-default select-none"
          >
            ✦
          </div>

          <h2
            className="font-display text-[clamp(2rem,9vw,5rem)] md:text-[clamp(3.5rem,7vw,5rem)] font-semibold italic tracking-[-0.03em] leading-[1.08] text-cream text-glow-gold mb-6"
          >
            Bring your frequency <br className="hidden md:block" />to the garden.
          </h2>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase mt-4 text-gold-dim max-w-xl mx-auto leading-relaxed"
          >
            Manteis Recordings — accepting demos from artists in resonance
          </p>

          <div className="mt-12">
            <a
              href="mailto:demo@manteisrecordings.com"
              className="btn-premium-gold inline-flex items-center justify-center min-h-[44px] font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5"
            >
              Submit Demo
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center cta-extra">
          {[
            { label: 'Spiritual', value: 'Shoegaze' },
            { label: 'Dream', value: 'Devotion' },
            { label: 'BG-007', value: 'DEVOTIONAL PROTOCOL' },
          ].map((item) => (
            <div key={item.label} className="cta-extra void-panel py-6 px-4 relative"
            >
              <div className="font-mono text-[9px] tracking-[0.4em] uppercase text-gold-dim mb-2">{item.label}</div>
              <div className="font-display text-xl md:text-2xl italic text-cream">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
