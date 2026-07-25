'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { revealOnEnter } from '@/lib/reveal'
import { MagneticCard } from '@/components/effects/MagneticCard'
import { ChromaGrid } from '@/components/effects/ChromaGrid'

const tracks = [
  { number: 1, title: 'Dhyana', duration: '5:42', sanskrit: 'ध्यान', meaning: 'Meditation' },
  { number: 2, title: 'Shovel of Stars', duration: '4:58', sanskrit: 'तारा', meaning: 'Star' },
  { number: 3, title: 'Garden Threshold', duration: '6:14', sanskrit: 'द्वार', meaning: 'Doorway' },
  { number: 4, title: 'Devotional Drift', duration: '7:05', sanskrit: 'भक्ति', meaning: 'Devotion' },
  { number: 5, title: 'Upekṣā', duration: '8:31', sanskrit: 'उपेक्षा', meaning: 'Equanimity' },
]

export function Release() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0.5, y: 0.5, rotateX: 0, rotateY: 0 })

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const card = cardRef.current
      if (card) {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            card,
            { y: 0, scale: 1 },
            {
              y: -80,
              scale: 0.96,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          )
        }, root)
        disposers.push(() => ctx.revert())
      }

      disposers.push(await revealOnEnter(root.querySelectorAll('.release-cover'), { y: 0, scale: 1.05, duration: 1.2 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.release-info'), { y: 0, x: 40, duration: 0.9 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.track-row'), { y: 25, duration: 0.7, stagger: 0.08 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.catalog-art'), { y: 60, duration: 1.4, stagger: 0.1 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.platform-link'), { y: 20, duration: 0.6, stagger: 0.08 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.credit-line'), { y: 15, duration: 0.5, stagger: 0.05 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.parallel-overlay'), { opacity: 0, duration: 1.2 }))
    })()
    return () => disposers.forEach((d) => d())
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * 10
    const rotateY = (x - 0.5) * 10
    setTilt({ x, y, rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0.5, y: 0.5, rotateX: 0, rotateY: 0 })
  }

  return (
    <section ref={sectionRef} id="release" className="relative py-32 md:py-48 overflow-hidden bg-void">
      {/* 3. Massive catalog number MR-007 as display art */}
      <div className="catalog-art absolute left-0 top-8 md:top-16 w-full text-center text-[28vw] md:text-[22vw] catalog-display z-0 select-none pointer-events-none">
        MR-007
      </div>

      {/* 5. Mandala orbital curves */}
      <svg className="absolute left-[-10%] top-1/4 w-[50%] h-[50%] pointer-events-none z-0 opacity-40" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="90" className="orbital-curve" />
        <circle cx="100" cy="100" r="70" className="orbital-curve-thin" />
        <circle cx="100" cy="100" r="50" className="orbital-curve" />
        <path className="orbital-glow" d="M100,10 A90,90 0 1,1 99.9,10" />
        <path className="orbital-curve-thin" d="M20,100 Q60,40 100,100 T180,100" />
      </svg>

      {/* Warm glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(circle at 75% 30%, rgba(212,168,67,0.08) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(212,168,67,0.05) 0%, transparent 45%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="section-label mb-24">
          <span className="idx">01 //</span> Release
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">
          {/* 4. Concentric frame tunnel on Upeksha cover + 8. geometric masking */}
          <div className="release-cover w-full md:w-3/4 lg:w-1/2 group perspective">
            <MagneticCard className="relative aspect-square overflow-hidden border border-gold/15 bg-void-raised transition-all duration-500 ease-out group-hover:border-gold/30 frame-tunnel inset-circle-mask">
              <div
                ref={cardRef}
                className="relative w-full h-full"
              >
                <Image
                  src="/covers/BrindavanGardens.webp"
                  alt="Upekṣā — Brindavan Gardens album cover art, Manteis Recordings MR-007"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <ChromaGrid />

                {/* Nested warm gold tunnel frames */}
                <div className="tunnel-ring" />
                <div className="tunnel-ring" />
                <div className="tunnel-ring" />
                <div className="tunnel-ring" />
                <div className="tunnel-ring" />

                {/* 6. Parallel line pattern overlay like devotional text */}
                <div className="parallel-overlay parallel-lines opacity-30 z-20" aria-hidden="true" />

                {/* Inner ambient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20"
                  style={{
                    opacity: 0.7,
                    background: 'radial-gradient(circle at 50% 50%, rgba(212,168,67,0.12) 0%, transparent 55%)',
                  }}
                />
                {/* Silkscreen label */}
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 bg-void/70 text-gold border border-gold/30">
                    BG-007 // DEVOTIONAL PROTOCOL
                  </span>
                </div>

                {/* 9. Stamp texture badge */}
                <div className="absolute top-4 right-4 z-30 mandala-stamp w-16 h-16 md:w-20 md:h-20">
                  <span className="font-mono text-[9px] md:text-[10px] tracking-[0.1em] text-gold text-center leading-tight">
                    MR
                    <br />007
                  </span>
                </div>
              </div>
            </MagneticCard>
          </div>

          {/* Release Description, Tracklist & Links */}
          <div className="release-info flex-1 py-4 lg:py-8">
            <div className="mono-data mb-5">
              MR-007 · MANTEIS RECORDINGS · STEREO · 33:30
            </div>
            <h2
              className="font-display text-6xl md:text-8xl lg:text-[6.5rem] font-semibold italic tracking-[-0.03em] leading-[0.82] mb-4 text-cream text-glow-gold"
            >
              Upekṣā
            </h2>
            <p className="font-display text-2xl md:text-3xl mb-8 text-gold font-light italic">
              Brindavan Gardens
            </p>

            <div className="gold-thread w-24 mb-10" />

            <p className="font-body text-base md:text-xl leading-relaxed mb-12 max-w-xl text-light-dim">
              Equanimity through sound. Shoegaze walls that dissolve into devotional drones.
              Guitar as prayer, reverb as cathedral. Where dream meets devotion.
            </p>

            {/* Tracklist with Sanskrit terms + durations as mono metadata */}
            <div className="mb-12">
              <div className="mono-data mb-6 border-b border-edge-faint pb-3">
                Tracklist · 5 Songs · 33:30 Total
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tracks.map((track) => (
                  <div
                    key={track.number}
                    className={clsx(
                      'track-row void-panel p-4 flex items-center justify-between group/track cursor-default',
                      track.number === 5 && 'sm:col-span-2'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-gold-dim w-6">
                        {String(track.number).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-display text-lg md:text-xl italic text-cream group-hover/track:text-gold transition-colors duration-300">
                          {track.title}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-gold-dim/80">
                          {track.sanskrit} · {track.meaning}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-light-muted">
                      {track.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform links — all streaming/purchase options */}
            <div className="mb-10">
              <div className="mono-data mb-4 border-b border-edge-faint pb-2">
                Listen · Stream · Purchase
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="platform-link btn-premium-gold font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4"
                >
                  Listen on All Platforms
                </a>
                <a
                  href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Listen to Brindavan Gardens Upekṣā on Spotify"
                  className="platform-link relative font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold py-1 group"
                >
                  Spotify →
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Listen to Brindavan Gardens Upekṣā on Apple Music"
                  className="platform-link relative font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold py-1 group"
                >
                  Apple Music →
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <a
                  href="https://manteisrecordings.bandcamp.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Purchase Brindavan Gardens Upekṣā on Bandcamp"
                  className="platform-link relative font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold py-1 group"
                >
                  Bandcamp →
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </div>
            </div>

            {/* Credits block */}
            <div className="mb-12">
              <div className="mono-data mb-4 border-b border-edge-faint pb-2">
                Credits
              </div>
              <div className="space-y-2 max-w-xl">
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Artist</span>
                  <span className="font-display text-sm md:text-base italic text-cream">Brindavan Gardens</span>
                </div>
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Label</span>
                  <span className="font-display text-sm md:text-base italic text-cream">Manteis Recordings</span>
                </div>
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Catalog</span>
                  <span className="font-mono text-[10px] text-gold-dim">MR-007</span>
                </div>
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Year</span>
                  <span className="font-mono text-[10px] text-gold-dim">2024</span>
                </div>
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Format</span>
                  <span className="font-mono text-[10px] text-gold-dim">Digital · Stereo · 33:30</span>
                </div>
                <div className="credit-line flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-light-muted w-20 shrink-0">Origin</span>
                  <span className="font-mono text-[10px] text-gold-dim">Seattle, WA</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Spiritual', 'Shoegaze', 'Dream', 'Meditation', 'Drone', 'Ambient'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.2em] uppercase px-4 py-2 border border-gold/10 bg-gold/[0.02] text-gold-pale transition-colors duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gold-thread max-w-5xl mx-auto mt-36 opacity-30" />
    </section>
  )
}