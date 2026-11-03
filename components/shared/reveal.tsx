"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

// The homepage section entrance: fade up once when scrolled into view. A small client boundary so
// server-rendered sections keep their markup. Reduced-motion visitors see it appear without movement.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
