'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'

const resonances = [
  { label: '108', unit: 'Hz', desc: 'Sacred frequency', color: 'text-gold' },
  { label: '∞', unit: 'REVERB', desc: 'Cathedral decay', color: 'text-blue' },
  { label: '7', unit: 'LAYERS', desc: 'Guitar walls', color: 'text-gold' },
  { label: '1', unit: 'MANTRA', desc: 'Upekṣā', color: 'text-blue' },
]

export function Resonance() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.res-cell'), { y: 25, duration: 0.7, stagger: 0.1 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 relative overflow-hidden bg-void">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="section-label mb-20">
          <span className="idx">02 //</span> Resonance
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resonances.map((r) => (
            <div
              key={r.label}
              className="res-cell glass-card p-10 md:p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden cursor-default rounded-sm"
            >
              {/* Subtle inner hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(212,168,67,0.04) 0%, transparent 70%)',
                }}
              />

              <div className={`font-mono text-6xl md:text-7xl font-bold tracking-[-0.05em] transition-transform duration-500 group-hover:scale-105 ${r.color}`}>
                {r.label}
              </div >
              <div className={`font-mono text-[10px] tracking-[0.3em] uppercase mt-4 transition-colors duration-500 ${r.color} opacity-80 group-hover:opacity-100`}>
                {r.unit}
              </div >
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2 text-light-muted group-hover:text-light-dim transition-colors duration-500">
                {r.desc}
              </div >
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
