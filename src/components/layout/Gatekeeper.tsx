'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function Gatekeeper() {
  const [entered, setEntered] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('bg-entered') === 'true'
    }
    return false
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (entered) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2, ease: 'power2.inOut' }
      )

      tl.fromTo(
        titleRef.current,
        { opacity: 0, filter: 'blur(12px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.4, ease: 'power2.out' },
        '-=1.2'
      )

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )

      tl.fromTo(
        btnRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [entered])

  const handleEnter = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      filter: 'blur(8px)',
      scale: 1.03,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => {
        sessionStorage.setItem('bg-entered', 'true')
        window.dispatchEvent(new Event('bg-enter'))
        setEntered(true)
      },
    })
  }

  useEffect(() => {
    if (entered) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleEnter()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [entered])

  if (entered) return null

  return (
    <div
      ref={containerRef}
      data-gate=""
      role="dialog"
      aria-modal="false"
      aria-label="Welcome to Brindavan Gardens"
      className="fixed inset-0 z-50 bg-void flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Mystical glow layering */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212,168,67,0.15) 0%, rgba(62,123,153,0.08) 35%, rgba(2,2,3,0.95) 75%, #020203 100%)',
        }}
      />

      {/* Subtle digital grid or line */}
      <div
        ref={lineRef}
        className="absolute top-1/2 left-0 right-0 h-[2px] origin-left opacity-30 shadow-[0_0_10px_rgba(212,168,67,0.5)]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.8) 25%, rgba(62,123,153,0.8) 50%, rgba(212,168,67,0.8) 75%, transparent)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Rotating Sacred Geometry Emblem */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-10 flex items-center justify-center">
          <svg 
            className="w-full h-full text-gold/30 animate-[spin_40s_linear_infinite]" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="15" strokeWidth="0.25" />
            {/* Concentric patterns */}
            <polygon points="50,5 95,50 50,95 5,50" />
            <polygon points="50,15 85,50 50,85 15,50" strokeDasharray="1 1" />
            <polygon points="50,5 72.5,50 50,95 27.5,50" />
            <polygon points="50,5 95,50 50,95 5,50" transform="rotate(45 50 50)" />
          </svg>
          <div className="absolute text-gold-pale text-lg animate-[pulse_4s_ease-in-out_infinite]">
            ✦
          </div>
        </div>

        <div ref={titleRef} className="opacity-0" style={{ filter: 'blur(12px)' }}>
          <h2 className="font-display text-7xl md:text-[9rem] lg:text-[11rem] font-semibold italic tracking-[-0.03em] leading-[0.8] text-gold-pale text-glow-gold">
            Brindavan
          </h2>
          <h2 className="font-display text-7xl md:text-[9rem] lg:text-[11rem] font-normal tracking-[-0.03em] leading-[0.8] text-light mt-2">
            Gardens
          </h2>
        </div >

        <p
          ref={subRef}
          className="opacity-0 font-mono text-[11px] tracking-[0.4em] uppercase mt-10 text-gold-dim"
        >
          Spiritual · Shoegaze · Dream
        </p>

        <div className="mt-12">
          <button
            ref={btnRef}
            autoFocus
            onClick={handleEnter}
            className="btn-premium-gold font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-4"
          >
            Enter the Garden
          </button>
        </div>
      </div >

      {/* Corners Metadata */}
      <div className="absolute top-8 left-8 font-mono text-[10px] tracking-[0.2em] text-gold-dim">
        MR-001
      </div >
      <div className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.2em] animate-pulse text-gold">
        ◦ OM
      </div >
      <div className="absolute bottom-8 left-8 font-mono text-[10px] tracking-[0.2em] text-light-muted">
        108Hz
      </div >
      <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.2em] text-gold-dim">
        Seattle · 2024
      </div >
    </div >
  )
}
