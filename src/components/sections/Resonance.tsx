'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'
import { SpotlightBorder } from '@/components/effects/SpotlightBorder'
import { CurtainReveal } from '@/components/effects/CurtainReveal'

const resonances = [
  { label: '108', unit: 'Hz', desc: 'Sacred frequency', color: 'text-gold' },
  { label: '∞', unit: 'REVERB', desc: 'Cathedral decay', color: 'text-cream' },
  { label: '7', unit: 'LAYERS', desc: 'Guitar walls', color: 'text-gold' },
  { label: '1', unit: 'MANTRA', desc: 'Upekṣā', color: 'text-cream' },
]

export function Resonance() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.res-cell'), { y: 25, duration: 0.7, stagger: 0.1 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.orbital-accent'), { scale: 0.8, duration: 1, stagger: 0.15 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <CurtainReveal direction="up">
    <section ref={sectionRef} id="resonance" className="py-24 md:py-36 relative overflow-hidden bg-void">
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(212,168,67,0.07) 0%, transparent 55%)',
        }}
      />

      {/* 5. Orbital curves behind cards */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[160%] pointer-events-none z-0 opacity-25" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        <path className="orbital-curve" d="M0,100 C100,0 300,0 400,100 C300,200 100,200 0,100" />
        <path className="orbital-curve-thin" d="M0,100 C120,20 280,20 400,100 C280,180 120,180 0,100" />
        <path className="orbital-curve-thin" d="M0,100 C140,40 260,40 400,100 C260,160 140,160 0,100" />
        <path className="orbital-glow" d="M50,100 C150,40 250,40 350,100" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="section-label mb-20">
          <span className="idx">04 //</span> Resonance
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resonances.map((r, i) => (
            <SpotlightBorder key={r.label} className="res-cell void-panel p-10 md:p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden cursor-default"
            >
              {/* 9. Mandala stamp corner */}
              <div className="orbital-accent absolute -top-8 -right-8 w-24 h-24 mandala-stamp opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              >
                <span className="font-mono text-[9px] tracking-[0.1em] text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* 8. Geometric circle masking on value */}
              <div className={`font-mono text-6xl md:text-7xl font-bold tracking-[-0.05em] transition-transform duration-500 group-hover:scale-105 ${r.color} circle-mask`}
              >
                {r.label}
              </div>
              <div className={`font-mono text-[10px] tracking-[0.3em] uppercase mt-4 transition-colors duration-500 ${r.color} opacity-80 group-hover:opacity-100`}
              >
                {r.unit}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2 text-light-muted group-hover:text-light-dim transition-colors duration-500"
              >
                {r.desc}
              </div>
            </SpotlightBorder>
          ))}
        </div>
      </div>
    </section>
    </CurtainReveal>
  )
}
