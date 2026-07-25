'use client'

import { useEffect, useRef } from 'react'

export function ChromaGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let active = true
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let t = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!active) return
      t += 0.006
      ctx.clearRect(0, 0, w, h)

      const cols = 24
      const rows = 16
      const cw = w / cols
      const ch = h / rows

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const nx = i / cols
          const ny = j / rows
          const wave = Math.sin(nx * 6 + t) * Math.cos(ny * 4 + t * 0.8)
          const alpha = 0.02 + wave * 0.025
          const x = i * cw
          const y = j * ch

          const grad = ctx.createLinearGradient(x, y, x + cw, y + ch)
          grad.addColorStop(0, `rgba(212,168,67,${Math.max(0, alpha)})`)
          grad.addColorStop(0.5, `rgba(253,252,220,${Math.max(0, alpha * 0.5)})`)
          grad.addColorStop(1, `rgba(212,168,67,${Math.max(0, alpha)})`)

          ctx.fillStyle = grad
          ctx.fillRect(x + 1, y + 1, cw - 2, ch - 2)

          ctx.strokeStyle = `rgba(212,168,67,${0.04 + wave * 0.02})`
          ctx.lineWidth = 0.5
          ctx.strokeRect(x, y, cw, ch)
        }
      }

      const overlay = ctx.createLinearGradient(0, 0, w, h)
      overlay.addColorStop(0, 'transparent')
      overlay.addColorStop(0.5, `rgba(212,168,67,${0.04 + Math.sin(t) * 0.02})`)
      overlay.addColorStop(1, 'transparent')
      ctx.fillStyle = overlay
      ctx.fillRect(0, 0, w, h)

      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    raf = requestAnimationFrame(draw)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.8 }}
    />
  )
}
