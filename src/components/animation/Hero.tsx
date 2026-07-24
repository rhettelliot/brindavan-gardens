'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null
    let active = true

    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!active) return
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.3 })
        tl.fromTo(titleRef.current, { opacity: 0, filter: 'blur(10px)', y: 50 }, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.6, ease: 'power2.out' })
        tl.fromTo(subRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.8')
        gsap.to(indicatorRef.current, { y: 6, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true })
        gsap.to(titleRef.current, { y: -60, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 } })
      }, heroRef)
    })()

    return () => {
      active = false
      ctx?.revert()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] animate-breathe mix-blend-screen opacity-40 blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.18) 0%, rgba(62,123,153,0.06) 40%, transparent 70%)' }}
        />
        <div
          className="absolute top-[20%] left-[10%] w-[600px] h-[600px] animate-shimmer mix-blend-screen opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(62,123,153,0.12) 0%, transparent 80%)' }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] animate-shimmer mix-blend-screen opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 80%)' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(212,168,67,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,168,67,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] z-0" aria-hidden="true" />

      <div ref={titleRef} className="relative z-10 text-center px-6 mix-blend-difference" style={{ filter: 'blur(10px)', opacity: 0 }}>
        <h1 className="font-display text-8xl md:text-[11rem] lg:text-[14rem] font-semibold italic tracking-[-0.03em] leading-[0.78] text-gold-pale text-glow-gold select-none">
          Brindavan
        </h1>
        <h2 className="font-display text-8xl md:text-[11rem] lg:text-[14rem] font-normal tracking-[-0.03em] leading-[0.78] text-light select-none mt-2">
          Gardens
        </h2>
      </div>

      <div ref={subRef} className="relative z-10 mt-10 text-center opacity-0">
        <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-gold-dim">
          Spiritual · Shoegaze · Dream · MR-001
        </p>
        <div className="mt-6 gold-thread w-28 mx-auto" />
      </div>

      <div ref={indicatorRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer z-10">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-dim group-hover:text-gold transition-colors duration-300">
          Listen
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </section>
  )
}
