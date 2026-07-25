'use client'

import { useEffect, useRef } from 'react'

const terms = [
  { sanskrit: 'उपेक्षा', term: 'Upekṣā' },
  { sanskrit: 'ध्यान', term: 'Dhyāna' },
  { sanskrit: 'भक्ति', term: 'Bhakti' },
  { sanskrit: 'शांति', term: 'Śānti' },
  { sanskrit: 'तारा', term: 'Tārā' },
  { sanskrit: 'समता', term: 'Samatā' },
  { sanskrit: 'वृन्दावन', term: 'Vṛndāvana' },
  { sanskrit: 'नाद', term: 'Nāda' },
  { sanskrit: 'प्रतिध्वनि', term: 'Pratidhvani' },
  { sanskrit: 'स्वर', term: 'Svara' },
  { sanskrit: 'राग', term: 'Rāga' },
  { sanskrit: 'ध्यान', term: 'Dhyāna' },
]

export function SanskritMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const row3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true
    let raf = 0
    let y = 0
    let vy = 0
    let t = 0

    const onScroll = () => {
      const sy = window.scrollY
      vy = Math.max(-6, Math.min(6, sy - y))
      y = sy
    }

    const tick = () => {
      if (!active) return
      t += 1 + Math.abs(vy) * 0.08
      vy *= 0.95

      const r1 = row1Ref.current
      const r2 = row2Ref.current
      const r3 = row3Ref.current
      if (r1) r1.style.transform = `translateX(${-(t * 0.4) % 50}%)`
      if (r2) r2.style.transform = `translateX(${(t * 0.55) % 50}%)`
      if (r3) r3.style.transform = `translateX(${-(t * 0.25 + vy * 2) % 50}%)`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const Row = ({ reverse, glow, speedClass }: { reverse?: boolean; glow?: boolean; speedClass?: string }) => (
    <div className={`flex whitespace-nowrap ${reverse ? '' : ''}`}>
      {terms.map((item, i) => (
        <span
          key={`${i}-${item.sanskrit}`}
          className={`inline-flex items-baseline gap-4 px-8 font-display text-3xl md:text-5xl lg:text-6xl italic tracking-[-0.02em] transition-colors duration-500 ${glow ? 'text-gold text-glow-gold' : 'text-gold-dim'}`}
        >
          <span className="sanskrit-pill border-none bg-transparent px-0">{item.sanskrit}</span>
          <span className={`font-mono text-xs md:text-sm tracking-[0.3em] uppercase ${glow ? 'text-gold-pale' : 'text-light-muted'}`}>
            {item.term}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <section aria-hidden="true" className="relative py-14 md:py-20 overflow-hidden bg-void border-y border-edge-faint">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(212,168,67,0.06) 0%, transparent 40%), radial-gradient(circle at 70% 50%, rgba(253,252,220,0.04) 0%, transparent 40%)',
        }}
      />
      <div className="relative z-10 space-y-5 opacity-80">
        <div className="overflow-hidden">
          <div ref={row1Ref} className="will-change-transform">
            <Row />
            <Row />
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={row2Ref} className="will-change-transform">
            <Row glow />
            <Row glow />
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={row3Ref} className="will-change-transform">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  )
}
