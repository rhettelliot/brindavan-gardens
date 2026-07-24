'use client'

import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

export type MasonryItem = {
  id: string
  content: React.ReactNode
  className?: string
  span?: number
}

export function Masonry({
  items,
  columns = 2,
  gap = 24,
  className,
}: {
  items: MasonryItem[]
  columns?: number
  gap?: number
  className?: string
}) {
  const [cols, setCols] = useState(columns)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setCols(1)
      else if (w < 1024) setCols(Math.min(2, columns))
      else setCols(columns)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [columns])

  const columnsItems: MasonryItem[][] = Array.from({ length: cols }, () => [])
  items.forEach((item, i) => {
    columnsItems[i % cols].push(item)
  })

  return (
    <div
      ref={containerRef}
      className={clsx('flex', className)}
      style={{ gap }}
    >
      {columnsItems.map((col, colIndex) => (
        <div key={colIndex} className="flex-1 flex flex-col" style={{ gap }}>
          {col.map((item) => (
            <div
              key={item.id}
              className={clsx('masonry-cell', item.className)}
              style={{ gridRow: `span ${item.span || 1}` }}
            >
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
