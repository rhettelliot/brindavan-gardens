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
    <section ref={sectionRef} id="release" className="relative py-32 md:py-48 overflow-hidden bg-void">
      {/* Background Watermark for dramatic section depth */}
      <div className="absolute right-[-5%] top-1/4 text-[16vw] font-bold text-gold/[0.02] tracking-widest font-display select-none uppercase pointer-events-none select-none">
        UPEKṢĀ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="section-label mb-24">
          <span className="idx">01 //</span> Release
        </div >

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-center">
          {/* Album Cover Card with premium hover states */}
          <div className="release-cover w-full md:w-3/4 lg:w-1/2 group">
            <div
              className="relative aspect-square overflow-hidden border border-gold/15 bg-void-raised shadow-[0_0_80px_rgba(212,168,67,0.06),0_0_150px_rgba(62,123,153,0.04)] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:border-gold/30 group-hover:shadow-[0_0_120px_rgba(212,168,67,0.12),0_0_180px_rgba(62,123,153,0.08)]"
            >
              <Image
                src="/covers/BrindavanGardens.webp"
                alt="Upekṣā cover art"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Inner ambient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(212,168,67,0.12) 0%, transparent 60%)',
                }}
              />
            </div >
          </div >

          {/* Release Description & Links */}
          <div className="release-info flex-1 py-4 lg:py-8">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase mb-5 text-gold">
              MR-001 · MANTEIS RECORDINGS
            </div >
            <h2
              className="font-display text-6xl md:text-8xl lg:text-[6.5rem] font-semibold italic tracking-[-0.03em] leading-[0.82] mb-4 text-gold-pale text-glow-gold"
            >
              Upekṣā
            </h2>
            <p className="font-display text-2xl md:text-3xl mb-8 text-blue font-light italic">
              Brindavan Gardens
            </p>

            <div className="gold-thread w-24 mb-10" />

            <p className="font-body text-base md:text-xl leading-relaxed mb-12 max-w-xl text-light-dim">
              Equanimity through sound. Shoegaze walls that dissolve into devotional drones. 
              Guitar as prayer, reverb as cathedral. Where dream meets devotion.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              <a
                href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-premium-gold font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4"
              >
                Listen Album
              </a>
              <a
                href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                target="_blank"
                rel="noreferrer noopener"
                className="relative font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold py-1 group"
              >
                Spotify Release →
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div >

            <div className="flex flex-wrap gap-3">
              {['Spiritual', 'Shoegaze', 'Dream', 'Meditation'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.2em] uppercase px-4 py-2 border border-gold/10 bg-gold/[0.02] text-gold-pale transition-colors duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
                >
                  {tag}
                </span>
              ))}
            </div >
          </div >
        </div >
      </div >

      <div className="gold-thread max-w-5xl mx-auto mt-36 opacity-30" />
    </section>
  )
}
