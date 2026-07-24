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
    })()

    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative min-h-screen py-32 md:py-48 overflow-hidden bg-void"
    >
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
            className="split-cell h-full flex flex-col justify-center py-12 lg:py-24 px-6 lg:px-12 border-r border-edge-faint"
          >
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-8">
              BG-007 // DEVOTIONAL PROTOCOL
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold italic tracking-[-0.03em] leading-[0.9] text-gold-pale text-glow-gold mb-10">
              Sound is<br />sanctuary.
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
            className="split-cell h-full flex flex-col justify-center py-12 lg:py-24 px-6 lg:px-16"
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
                  <h3 className="font-display text-2xl md:text-3xl italic text-gold mb-3">
                    {item.heading}
                  </h3>
                  <p className="font-body text-base md:text-lg leading-relaxed text-light-dim">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gold-thread max-w-5xl mx-auto mt-36 opacity-30" />
    </section>
  )
}
