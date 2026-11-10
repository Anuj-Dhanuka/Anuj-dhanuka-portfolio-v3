"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

// Marks its wrapper with data-visible once it scrolls into view, so CSS animations inside can start
// then (via group-data-[visible=true]) instead of on page load. A small client boundary; the
// children stay server-rendered.
export function PlayWhenVisible({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} data-visible={visible} className={`group ${className ?? ""}`}>
      {children}
    </div>
  )
}
