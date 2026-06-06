"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Employers Worked With" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Technologies Used" },
]

// Shared border + divider colour — very light brand-tinted purple
const B = "border-purple-100 dark:border-purple-800/30"


type Corner = "tl" | "tr" | "bl" | "br"
const cornerClass: Record<Corner, string> = {
  tl: "top-0 left-0  -translate-x-1/2 -translate-y-1/2",
  tr: "top-0 right-0  translate-x-1/2 -translate-y-1/2",
  bl: "bottom-0 left-0  -translate-x-1/2  translate-y-1/2",
  br: "bottom-0 right-0  translate-x-1/2  translate-y-1/2",
}

function Dot({ pos }: { pos: Corner }) {
  return (
    <span
      className={`absolute w-[9px] h-[9px] rounded-full border border-purple-200 dark:border-purple-600/50 bg-white dark:bg-gray-900 z-50 ${cornerClass[pos]}`}
    />
  )
}


function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }
    const duration = 1400
    let start: number | null = null
    let frame = 0
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, inView])

  return <>{count}</>
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: "-60px" })

  return (
    <section className="relative z-20 bg-white dark:bg-gray-900">
      <div
        ref={ref}
        className="relative overflow-visible bg-white py-12 dark:bg-gray-900 md:py-16"
      >
        {/* Subtle brand wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/40 via-transparent to-pink-50/40 dark:from-purple-950/20 dark:via-transparent dark:to-pink-950/20 pointer-events-none" />

        {/* ── Desktop ── */}
        <div className={`hidden md:block border-y ${B} relative z-10`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative z-10 grid grid-cols-4 border-x ${B}`}>

              <Dot pos="tl" /><Dot pos="bl" />
              <Dot pos="tr" /><Dot pos="br" />

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={[
                    "relative px-6 py-10 flex flex-col items-center justify-center text-center lg:py-12",
                    index < stats.length - 1 ? `border-r ${B}` : "",
                  ].join(" ")}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                >
                  {index < stats.length - 1 && (
                    <>
                      <Dot pos="tr" />
                      <Dot pos="br" />
                    </>
                  )}
                  <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-500 leading-none tabular-nums whitespace-nowrap">
                    <CountUp target={stat.value} inView={inView} />
                    {stat.suffix}
                  </span>
                  <span className="mt-3 text-[11px] tracking-[0.18em] lg:tracking-[0.2em] uppercase font-semibold text-gray-400 dark:text-gray-500 leading-relaxed whitespace-nowrap">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className={`block md:hidden border-y ${B} relative z-10`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative z-10 grid grid-cols-2 border-x ${B}`}>

              <Dot pos="tl" /><Dot pos="bl" />
              <Dot pos="tr" /><Dot pos="br" />

              {stats.map((stat, index) => {
                const isLeft = index % 2 === 0
                const isTop  = index < 2
                return (
                  <motion.div
                    key={stat.label}
                    className={[
                      "relative flex flex-col items-center justify-center px-4 py-9 text-center sm:py-10",
                      isLeft ? `border-r ${B}` : "",
                      isTop  ? `border-b ${B}` : "",
                    ].join(" ")}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                  >
                    {isLeft && isTop  && <Dot pos="bl" />}
                    {!isLeft && isTop && <Dot pos="br" />}

                    <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-500 leading-none tabular-nums whitespace-nowrap">
                      <CountUp target={stat.value} inView={inView} />
                      {stat.suffix}
                    </span>
                    <span className="mt-3 max-w-[9rem] text-[10px] tracking-[0.16em] uppercase font-semibold text-gray-400 dark:text-gray-500 leading-relaxed sm:max-w-none sm:text-[11px] sm:tracking-[0.2em]">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
