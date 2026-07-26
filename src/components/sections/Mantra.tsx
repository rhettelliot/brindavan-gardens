'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'
import { ParallaxMandala } from '@/components/effects/ParallaxMandala'
import { SanskritMarquee } from '@/components/effects/SanskritMarquee'

const mantras = [
  { line: 'Sound is sanctuary.', sanskrit: 'नादः', term: 'Nādaḥ' },
  { line: 'Reverb is architecture for the spirit.', sanskrit: 'प्रतिध्वनि', term: 'Pratidhvani' },
  { line: 'The guitar dissolves the boundary between dream and devotion.', sanskrit: 'भक्ति', term: 'Bhakti' },
  { line: 'Shoegaze is meditation with distortion.', sanskrit: 'ध्यान', term: 'Dhyāna' },
  { line: 'Equanimity is not stillness — it is resonance.', sanskrit: 'उपेक्षा', term: 'Upekṣā' },
  { line: 'The evenness of mind that sees through noise.', sanskrit: 'समता', term: 'Samatā' },
  { line: 'Brindavan is where the garden blooms inside the frequency.', sanskrit: 'वृन्दावन', term: 'Vṛndāvana' },
]

export function Mantra() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.mantra-line'), { y: 30, duration: 0.8, stagger: 0.05 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.orbital-node'), { scale: 0.8, duration: 1, stagger: 0.12 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.sanskrit-meta'), { y: 10, opacity: 0, duration: 0.6, stagger: 0.08 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <>
      <SanskritMarquee />
      <section ref={sectionRef} id="mantra" className="relative py-40 md:py-60 overflow-hidden bg-void">
        <ParallaxMandala />

        {/* 6. Parallel line pattern overlay like devotional text columns */}
        <div className="parallel-lines opacity-20 z-0" aria-hidden="true" />

        {/* 5. Mandala-like orbital path curves as SVG */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none z-0 opacity-30 min-w-[800px] min-h-[800px]" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="180" className="orbital-curve" />
          <circle cx="200" cy="200" r="150" className="orbital-curve-thin" />
          <circle cx="200" cy="200" r="120" className="orbital-curve" />
          <circle cx="200" cy="200" r="90" className="orbital-curve-thin" />
          <circle cx="200" cy="200" r="60" className="orbital-curve" />
          <path className="orbital-glow" d="M200,20 A180,180 0 1,1 199.9,20" />
          <path className="orbital-curve-thin" d="M40,200 Q120,80 200,200 T360,200" />
          <path className="orbital-curve-thin" d="M40,200 Q120,320 200,200 T360,200" />
          <path className="orbital-curve" d="M200,40 Q320,120 200,200 T200,360" />
          <path className="orbital-curve" d="M200,40 Q80,120 200,200 T200,360" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const cx = 200 + 140 * Math.cos(rad)
            const cy = 200 + 140 * Math.sin(rad)
            return <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(212,168,67,0.45)" />
          })}
        </svg>

        {/* Warm glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(circle at 50% 60%, rgba(212,168,67,0.08) 0%, transparent 50%)',
          }}
        />

        {/* Visual vignettes */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-void to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-void to-transparent pointer-events-none z-10" />

        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-20">
          <div className="section-label mb-24">
            <span className="idx">03 //</span> Mantra
          </div>

          <div className="space-y-10 md:space-y-14 group/mantra-wall">
            {mantras.map((item, i) => {
              let lineStyle = "text-cream/80 hover:text-cream";
              if (i === 0) {
                lineStyle = "font-semibold text-gold text-glow-gold hover:text-gold-pale";
              } else if (i === mantras.length - 1) {
                lineStyle = "font-semibold italic text-gold-pale text-glow-gold hover:text-gold";
              } else if (i % 2 === 1) {
                lineStyle = "italic text-gold/85 hover:text-gold";
              }

              return (
                <div key={i} className="mantra-line group/line flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 border-b border-edge-faint pb-8">
                  <span className="font-mono text-[10px] text-gold-dim w-8">{String(i + 1).padStart(2, '0')}</span>
                  <p
                    className={`font-display text-[clamp(1.5rem,7vw,3.5rem)] md:text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] transition-all duration-500 ease-out cursor-default hover:translate-x-2 group-hover/mantra-wall:opacity-25 hover:!opacity-100 flex-1 ${lineStyle}`}
                  >
                    {item.line}
                  </p>
                  <div className="sanskrit-meta flex flex-col items-start md:items-end gap-1 min-w-[120px]">
                    <span className="sanskrit-pill">{item.sanskrit}</span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted">{item.term}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-28 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="gold-thread w-24 opacity-40" />
            <div className="mono-data">
              07 MANTRAS · SANSKRIT INDEX · DEVOTIONAL PROTOCOL MR-007
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
