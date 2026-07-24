'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { revealOnEnter } from '@/lib/reveal'

const tracks = [
  { number: 1, title: 'Dhyana', duration: '5:42' },
  { number: 2, title: 'Shovel of Stars', duration: '4:58' },
  { number: 3, title: 'Garden Threshold', duration: '6:14' },
  { number: 4, title: 'Devotional Drift', duration: '7:05' },
  { number: 5, title: 'Upekṣā', duration: '8:31' },
]

export function Release() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 })

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const disposers: Array<() => void> = []
    ;(async () => {
      disposers.push(await revealOnEnter(root.querySelectorAll('.release-cover'), { y: 0, scale: 1.05, duration: 1.2 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.release-info'), { y: 0, x: 40, duration: 0.9 }))
      disposers.push(await revealOnEnter(root.querySelectorAll('.track-row'), { y: 25, duration: 0.7, stagger: 0.08 }))
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
      {/* Background Watermark */}
      <div className="absolute right-[-5%] top-1/4 text-[16vw] font-bold text-gold/[0.02] tracking-widest font-display select-none uppercase pointer-events-none">
        UPEKṢĀ
      </div>

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
          {/* Parallax tilt album cover */}
          <div className="release-cover w-full md:w-3/4 lg:w-1/2 group perspective"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-square overflow-hidden border border-gold/15 bg-void-raised transition-all duration-500 ease-out group-hover:border-gold/30"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                boxShadow: '0 0 80px rgba(212,168,67,0.08), 0 0 150px rgba(62,123,153,0.04)',
              }}
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
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: 0.7 + (1 - tilt.y) * 0.3,
                  background: `radial-gradient(circle at ${tilt.x * 100}% ${tilt.y * 100}%, rgba(212,168,67,0.16) 0%, transparent 55%)`,
                }}
              />
              {/* Silkscreen label */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 bg-void/70 text-gold border border-gold/30"
                >
                  BG-007 // DEVOTIONAL PROTOCOL
                </span>
              </div>
            </div>
          </div>

          {/* Release Description, Tracklist & Links */}
          <div className="release-info flex-1 py-4 lg:py-8">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase mb-5 text-gold">
              MR-001 · MANTEIS RECORDINGS
            </div>
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

            {/* Masonry-style tracklist */}
            <div className="mb-12">
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold-dim mb-6 border-b border-edge-faint pb-3">
                Tracklist · 5 Songs
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
                    <div className="flex items-center gap-4"
                    >
                      <span className="font-mono text-[10px] text-gold-dim w-6"
                      >{String(track.number).padStart(2, '0')}</span>
                      <span className="font-display text-lg md:text-xl italic text-light group-hover/track:text-gold transition-colors duration-300"
                      >{track.title}</span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-light-muted"
                    >{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

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
            </div>

            <div className="flex flex-wrap gap-3">
              {['Spiritual', 'Shoegaze', 'Dream', 'Meditation'].map((tag) => (
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
