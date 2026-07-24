'use client'

import { useEffect, useRef } from 'react'
import { revealOnEnter } from '@/lib/reveal'

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const left = leftRef.current
      const right = rightRef.current

      if (left && right) {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            left,
            { y: 120 },
            {
              y: -120,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          )
          gsap.fromTo(
            right,
            { y: -80 },
            {
              y: 120,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.6,
              },
            }
          )
        }, root)
        disposers.push(() => ctx.revert())
      }

      disposers.push(await revealOnEnter(root.querySelectorAll('.split-cell'), { y: 40, duration: 1, stagger: 0.12 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.lotus-node'), { scale: 0.7, duration: 0.8, stagger: 0.15 }))
    })()

    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative min-h-[100dvh] py-32 md:py-48 overflow-hidden bg-void"
    >
      {/* 5. Mandala orbital curves */}
      <svg className="absolute right-[-5%] top-0 w-[45%] h-full pointer-events-none z-0 opacity-25" viewBox="0 0 200 400" preserveAspectRatio="none" aria-hidden="true"
      >
        <path className="orbital-curve" d="M0,200 C60,50 140,50 200,200 C140,350 60,350 0,200" />
        <path className="orbital-curve-thin" d="M20,200 C70,80 130,80 180,200 C130,320 70,320 20,200" />
        <path className="orbital-curve-thin" d="M40,200 C80,110 120,110 160,200 C120,290 80,290 40,200" />
        <path className="orbital-glow" d="M100,0 C160,100 160,300 100,400" />
        {[0, 60, 120, 180, 240, 300].map((cy, i) => (
          <circle key={i} cx="100" cy={cy + 40} r="2" fill="rgba(212,168,67,0.35)" />
        ))}
      </svg>

      {/* 2. Subtle visible grid */}
      <div className="grid-lines opacity-40" aria-hidden="true" />

      {/* Warm glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(circle at 20% 40%, rgba(212,168,67,0.09) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(212,168,67,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="section-label mb-24 split-cell">
          <span className="idx">02 //</span> Devotional Protocol
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] items-center">
          <div
            ref={leftRef}
            className="split-cell h-full flex flex-col justify-center py-12 lg:py-24 px-6 lg:px-12 border-r border-edge-faint relative"
          >
            {/* 9. Mandala stamp */}
            <div className="lotus-node absolute top-8 right-8 mandala-stamp w-20 h-20 md:w-24 md:h-24"
            >
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.1em] text-gold text-center leading-tight">
                DEV
                <br />OTION
              </span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-8">
              BG-007 // DEVOTIONAL PROTOCOL
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold italic tracking-[-0.03em] leading-[0.9] text-cream text-glow-gold mb-10">
              Sound is
              <br />sanctuary.
            </h2>
            <div className="gold-thread w-24 mb-10" />
            <p className="font-body text-lg md:text-xl leading-relaxed text-light-dim max-w-md">
              Shoegaze walls dissolve into devotional drones. The guitar becomes prayer;
              reverb, cathedral. We write where dream meets devotion — equanimity through
              frequency.
            </p>
          </div>

          <div
            ref={rightRef}
            className="split-cell h-full flex flex-col justify-center py-12 lg:py-24 px-6 lg:px-16 relative"
          >
            <div className="space-y-12">
              {[
                {
                  heading: 'Reverb as architecture',
                  body: 'Every decay is a room built for the spirit. We compose space, not just time.',
                },
                {
                  heading: 'Distortion as devotion',
                  body: 'Noise can be an offering. The wall of sound becomes a wall of prayer.',
                },
                {
                  heading: 'Equanimity in frequency',
                  body: 'Upekṣā — the evenness of mind that sees through noise. The mantra beneath the mix.',
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-edge-faint pb-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] text-gold-dim">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-2xl md:text-3xl italic text-gold">
                      {item.heading}
                    </h3>
                  </div>
                  <p className="font-body text-base md:text-lg leading-relaxed text-light-dim">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* 8. Lotus-like geometric accent */}
            <svg className="absolute bottom-12 right-12 w-24 h-24 opacity-20 pointer-events-none lotus-node" viewBox="0 0 100 100" aria-hidden="true"
            >
              <polygon points="50,5 61,39 98,39 68,60 79,94 50,73 21,94 32,60 2,39 39,39" fill="none" stroke="#D4A843" strokeWidth="0.8" />
              <circle cx="50" cy="52" r="12" fill="none" stroke="#D4A843" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="gold-thread max-w-5xl mx-auto mt-36 opacity-30" />
    </section>
  )
}
