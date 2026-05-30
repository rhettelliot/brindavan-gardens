'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export function Release() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.release-cover', {
        opacity: 0,
        filter: 'blur(8px)',
        scale: 1.05,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.release-cover',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.release-info', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.release-info',
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="release" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-20">Release /</div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          {/* Cover — with devotional glow */}
          <div className="release-cover w-full md:w-1/2">
            <div
              className="relative aspect-square overflow-hidden rounded-sm"
              style={{
                border: '1px solid rgba(212,168,67,0.12)',
                boxShadow: '0 0 80px rgba(212,168,67,0.08), 0 0 160px rgba(201,160,184,0.04)',
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
              {/* Soft warm vignette on the cover */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(212,168,67,0.08) 0%, transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="release-info flex-1 py-4 md:py-12">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: '#D4A843' }}>
              MR-001 · 2024
            </div>
            <h2
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold italic tracking-[-0.02em] leading-[0.88] mb-2"
              style={{ color: '#E8CC7A' }}
            >
              Upekṣā
            </h2>
            <p className="font-display text-xl md:text-2xl mb-6" style={{ color: '#C9A0B8' }}>
              Brindavan Gardens
            </p>

            <div className="gold-thread w-16 mb-8" />

            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg" style={{ color: '#A8998A' }}>
              Equanimity through sound. Shoegaze walls that dissolve into devotional drones. 
              Guitar as prayer, reverb as cathedral. Where dream meets devotion.
            </p>

            {/* Streaming */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 border btn-warm hover:text-void"
                style={{ borderColor: '#D4A843', color: '#D4A843' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4A843' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                Listen
              </a>
              <a
                href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[10px] tracking-[0.1em] uppercase transition-colors duration-300"
                style={{ color: '#A68535' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A843' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#A68535' }}
              >
                Spotify →
              </a>
            </div>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2">
              {['Spiritual', 'Shoegaze', 'Dream', 'Meditation'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1"
                  style={{
                    border: '1px solid rgba(212,168,67,0.15)',
                    color: '#A68535',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider-gold max-w-5xl mx-auto mt-32" />
    </section>
  )
}