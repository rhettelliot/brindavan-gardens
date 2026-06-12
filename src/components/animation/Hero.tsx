'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(titleRef.current, { opacity: 0, filter: 'blur(10px)', y: 50 }, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.6, ease: 'power2.out' })
      tl.fromTo(subRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.8')
      gsap.to(indicatorRef.current, { y: 6, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to(titleRef.current, { y: -60, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 } })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full animate-breathe" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(0,122,255,0.05) 30%, rgba(18,18,20,0.04) 55%, transparent 70%)' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] rounded-full animate-shimmer" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)' }} />
      </div>
      <div ref={titleRef} className="relative z-10 text-center px-6" style={{ filter: 'blur(10px)', opacity: 0 }}>
        <h1 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-semibold italic tracking-[-0.01em] leading-[0.85] text-gold-pale">Brindavan</h1>
        <h1 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-normal tracking-[-0.01em] leading-[0.85] text-light">Gardens</h1>
      </div>
      <div ref={subRef} className="relative z-10 mt-6 text-center opacity-0">
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-gold-dim">Spiritual · Shoegaze · Dream · MR-001</p>
        <div className="mt-4 gold-thread w-20 mx-auto" />
      </div>
      <div ref={indicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold-dim">Listen</span>
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
          <path d="M5 3 L5 13 M2 10 L5 13 L8 10" stroke="currentColor" className="text-gold" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
    </section>
  )
}
