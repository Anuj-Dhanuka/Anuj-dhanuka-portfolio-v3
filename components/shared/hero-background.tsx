"use client"

import { motion, useReducedMotion } from "framer-motion"

export function HeroBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(var(--hero-glow-purple),0.5) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(var(--hero-glow-pink),0.5) 2px, transparent 0)",
          backgroundSize: "100px 100px",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, rgba(var(--hero-glow-purple),0.3) 0%, rgba(var(--hero-glow-pink),0.3) 100%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                background: [
                  "linear-gradient(120deg, rgba(var(--hero-glow-purple),0.3) 0%, rgba(var(--hero-glow-pink),0.3) 100%)",
                  "linear-gradient(120deg, rgba(var(--hero-glow-pink),0.3) 0%, rgba(var(--hero-glow-purple),0.3) 100%)",
                ],
              }
        }
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent1-600/15 blur-3xl" />
    </div>
  )
}
