'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const resonances = [
  { label: '108', unit: 'Hz', desc: 'Sacred frequency', color: 'text-gold' },
  { label: '∞', unit: 'REVERB', desc: 'Cathedral decay', color: 'text-blue' },
  { label: '7', unit: 'LAYERS', desc: 'Guitar walls', color: 'text-gold' },
  { label: '1', unit: 'MANTRA', desc: 'Upekṣā', color: 'text-blue' },
]

export function Resonance() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.res-cell', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
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
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-edge-faint">
          {resonances.map((r) => (
            <div
              key={r.label}
              className="res-cell bg-void p-6 md:p-10 flex flex-col items-center justify-center text-center"
            >
              <div className={`font-mono text-4xl md:text-5xl font-bold tracking-[-0.04em] ${r.color}`}>
                {r.label}
              </div >
              <div className={`font-mono text-[9px] tracking-[0.25em] uppercase mt-2 opacity-70 ${r.color}`}>
                {r.unit}
              </div >
              <div className="font-mono text-[8px] tracking-[0.15em] uppercase mt-1 text-light-muted">
                {r.desc}
              </div >
            </div >
          ))}
        </div >
      </div >
    </section>
  )
}
