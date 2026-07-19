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
    <section ref={sectionRef} id="mantra" className="relative py-40 md:py-60 overflow-hidden bg-void">
      {/* Visual vignettes to frame the text emergence */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-void to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-void to-transparent pointer-events-none z-10" />

      {/* Atmospheric drift glows */}
      <div 
        className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/3 right-[5%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(62,123,153,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="section-label mb-24">
          <span className="idx">03 //</span> Mantra
        </div >

        {/* Group hover wrapper — non-hovered lines dim while active line glows */}
        <div className="space-y-10 md:space-y-14 group/mantra-wall">
          {mantra.map((line, i) => {
            let lineStyle = "text-light/80 hover:text-light";
            if (i === 0) {
              lineStyle = "font-semibold text-blue text-glow-gold hover:text-blue-pale";
            } else if (i === mantra.length - 1) {
              lineStyle = "font-semibold italic text-gold-pale text-glow-gold hover:text-gold";
            } else if (i % 2 === 1) {
              lineStyle = "italic text-gold/80 hover:text-gold";
            }

            return (
              <p
                key={i}
                className={`mantra-line font-display text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-[-0.02em] transition-all duration-500 ease-out cursor-default hover:translate-x-2 group-hover/mantra-wall:opacity-25 hover:!opacity-100 ${lineStyle}`}
              >
                {line}
              </p>
            )
          })}
        </div >

        <div className="mt-28 gold-thread max-w-xl opacity-40" />
      </div >
    </section>
  )
}
