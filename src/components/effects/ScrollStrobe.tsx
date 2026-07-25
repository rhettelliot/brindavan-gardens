'use client'

import { useEffect, useRef } from 'react'

export function ScrollStrobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let active = true
    let raf = 0
    let lastY = 0
    let velocity = 0
    let t = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const onScroll = () => {
      const y = window.scrollY
      velocity = Math.min(Math.abs(y - lastY), 80)
      lastY = y
    }

    const draw = () => {
      if (!active) return
      const w = window.innerWidth
      const h = window.innerHeight
      const y = window.scrollY

      t += 1
      velocity *= 0.92

      ctx.clearRect(0, 0, w, h)

      const pulse = (Math.sin(t * 0.04) + 1) * 0.5
      const speedBoost = Math.min(velocity / 20, 1)
      const alpha = 0.04 + pulse * 0.06 + speedBoost * 0.18
      const count = 6 + Math.floor(speedBoost * 8)
      const gold = '#D4A843'
      const cream = '#FDFCDC'

      for (let i = 0; i < count; i++) {
        const bandY = ((y * (0.15 + i * 0.08)) + t * (2 + i * 0.7)) % (h * 1.5)
        const realY = bandY - h * 0.25
        const bandH = 1 + speedBoost * 3 + Math.sin(t * 0.05 + i) * 2
        const grad = ctx.createLinearGradient(0, realY, 0, realY + bandH * 8)
        grad.addColorStop(0, 'rgba(212,168,67,0)')
        grad.addColorStop(0.4, `rgba(212,168,67,${alpha})`)
        grad.addColorStop(0.6, `rgba(253,252,220,${alpha * 0.7})`)
        grad.addColorStop(1, 'rgba(212,168,67,0)')

        ctx.fillStyle = grad
        ctx.fillRect(0, realY, w, bandH * 12)
      }

      const cornerGlow = 40 + pulse * 60 + speedBoost * 100
      const radial = ctx.createRadialGradient(w * 0.5, y % h + h * 0.3, 0, w * 0.5, y % h + h * 0.3, w * 0.6)
      radial.addColorStop(0, `rgba(212,168,67,${0.03 + speedBoost * 0.08})`)
      radial.addColorStop(1, 'rgba(212,168,67,0)')
      ctx.fillStyle = radial
      ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = `rgba(212,168,67,${0.05 + speedBoost * 0.1})`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(w, h)
      ctx.moveTo(w, 0)
      ctx.lineTo(0, h)
      ctx.stroke()

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(draw)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
