'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'

const mantra = [
  'Sound is sanctuary.',
  'Reverb is architecture for the spirit.',
  'The guitar dissolves the boundary between dream and devotion.',
  'Shoegaze is meditation with distortion.',
  'Equanimity is not stillness — it is resonance.',
  'Upekṣā: the evenness of mind that sees through noise.',
  'Brindavan is where the garden blooms inside the frequency.',
]

export function Mantra() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.mantra-line'), { y: 30, duration: 0.8, stagger: 0.05 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section ref={sectionRef} id="mantra" className="py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="section-label mb-20">Mantra /</div >

        <div className="space-y-7 md:space-y-9">
          {mantra.map((line, i) => (
            <p
              key={i}
              className={`mantra-line font-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] ${
                i === mantra.length - 1
                  ? 'font-semibold italic text-gold-pale'
                  : i === 0
                    ? 'font-semibold text-blue'
                    : 'text-light'
              }`}
            >
              {line}
            </p>
          ))}
        </div >

        <div className="mt-16 gold-thread w-24" />
      </div >
    </section>
  )
}
