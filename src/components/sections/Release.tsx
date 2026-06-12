'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { revealOnEnter } from '@/lib/reveal'

export function Release() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.release-cover'), { y: 0, scale: 1.05, duration: 1.2 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.release-info'), { y: 0, x: 40, duration: 0.9 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  return (
    <section ref={sectionRef} id="release" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-20">Release /</div >

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="release-cover w-full md:w-1/2">
            <div
              className="relative aspect-square overflow-hidden rounded-sm border-edge-subtle"
              style={{
                boxShadow: '0 0 80px rgba(255,107,53,0.08), 0 0 160px rgba(0,122,255,0.04)',
              }}
            >
              <Image
                src="/covers/BrindavanGardens.webp"
                alt="Upekṣā cover art"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(255,107,53,0.08) 0%, transparent 60%)',
                }}
              />
            </div >
          </div >

          <div className="release-info flex-1 py-4 md:py-12">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 text-gold">
              MR-001 · 2024
            </div >
            <h2
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold italic tracking-[-0.02em] leading-[0.88] mb-2 text-gold-pale"
            >
              Upekṣā
            </h2>
            <p className="font-display text-xl md:text-2xl mb-6 text-blue">
              Brindavan Gardens
            </p>

            <div className="gold-thread w-16 mb-8" />

            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg text-light-dim">
              Equanimity through sound. Shoegaze walls that dissolve into devotional drones. 
              Guitar as prayer, reverb as cathedral. Where dream meets devotion.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 border btn-warm text-gold border-gold hover:text-void"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF6B35' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                Listen
              </a>
              <a
                href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[10px] tracking-[0.1em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold"
              >
                Spotify →
              </a>
            </div >

            <div className="flex flex-wrap gap-2">
              {['Spiritual', 'Shoegaze', 'Dream', 'Meditation'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-edge-subtle text-gold-dim"
                >
                  {tag}
                </span>
              ))}
            </div >
          </div >
        </div >
      </div >

      <div className="divider-gold max-w-5xl mx-auto mt-32" />
    </section>
  )
}
