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

  if (entered) return null

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

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-void flex flex-col items-center justify-center"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,107,53,0.08) 0%, rgba(0,122,255,0.06) 40%, transparent 70%)',
        }}
      />

      <div
        ref={lineRef}
        className="absolute top-1/2 left-0 right-0 h-px origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #FF6B35, rgba(0,122,255,0.5), #FF queB35, transparent)',
        }}
      />

      <div className="relative z-10 text-center px-6">
        <div className="text-gold-dim text-2xl mb-6 animate-shimmer">
          ◦
        </div >

        <div ref={titleRef} className="opacity-0" style={{ filter: 'blur(12px)' }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-semibold italic tracking-[-0.01em] leading-[0.88] text-gold-pale">
            Brindavan
          </h1>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-normal tracking-[-0.01em] leading-[0.88] text-light">
            Gardens
          </h1>
        </div >

        <p
          ref={subRef}
          className="opacity-0 font-mono text-[10px] tracking-[0.35em] uppercase mt-6 text-gold-dim"
        >
          Spiritual · Shoegaze · Dream
        </p>

        <button
          ref={btnRef}
          onClick={handleEnter}
          className="opacity-0 mt-10 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-3 border border-gold/40 text-gold btn-warm hover:bg-gold hover:text-void hover:border-gold"
        >
          Enter the Garden
        </button>
      </div >

      <div className="absolute top-6 left-6 font-mono text-[9px] tracking-[0.15em] text-gold-dim">
        MR-001
      </div >
      <div className="absolute top-6 right-6 font-mono text-[9px] tracking-[0.15em] animate-shimmer text-gold">
        ◦ OM
      </div >
      <div className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.15em] text-light-muted">
        108Hz
      </div >
      <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-[0.15em] text-gold-dim">
        Seattle · 2024
      </div >
    </div >
  )
}
