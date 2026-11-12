"use client"

import { useEffect, useRef, type RefObject } from "react"
import { motion } from "framer-motion"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiVercel,
  SiAnthropic,
} from "react-icons/si"
import { FiHeart } from "react-icons/fi"
import { OpenAIIcon } from "@/components/icons/openai-icon"
import type { IconType } from "react-icons"
import {
  releaseVelocity,
  stepMarquee,
  wrapOffset,
  type MarqueeMotion,
  type PointerSample,
} from "@/features/portfolio/marquee-motion"

type TechItem = { name: string; Icon: IconType | null; color: string }

const primaryTech: TechItem[] = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", Icon: SiShopify, color: "#96BF48" },
  { name: "Webflow", Icon: SiWebflow, color: "#4353FF" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
]

const aiTools: TechItem[] = [
  { name: "Claude", Icon: SiAnthropic, color: "#D4A27F" },
  { name: "OpenAI Codex", Icon: OpenAIIcon as IconType, color: "#10A37F" },
  { name: "v0.dev", Icon: SiVercel, color: "#6366F1" },
  { name: "Lovable", Icon: FiHeart, color: "#EC4899" },
]

function repeat<T>(arr: T[], n: number): T[] {
  return Array(n).fill(arr).flat()
}

const MASK = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"

// ── Pill ────────────────────────────────────────────────────────────────────

function TechPill({ item, variant = "default" }: { item: TechItem; variant?: "default" | "ai" }) {
  const { Icon, name, color } = item
  const isAi = variant === "ai"

  return (
    <div
      className={[
        "group relative mx-1.5 flex h-12 min-w-max items-center gap-3 overflow-hidden rounded-lg border bg-white px-3.5 pr-4",
        "select-none backdrop-blur transition-all duration-300 ease-out",
        "shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_28px_rgba(124,58,237,0.055)]",
        "hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_18px_38px_rgba(124,58,237,0.12)]",
        "dark:bg-gray-950/70 dark:shadow-none dark:hover:shadow-[0_16px_34px_rgba(0,0,0,0.24)]",
        isAi
          ? "border-accent1-100/90 hover:border-accent1-200 dark:border-accent1-800/40 dark:hover:border-accent1-700/70"
          : "border-purple-100/80 hover:border-brand-200 dark:border-purple-800/35 dark:hover:border-brand-700/70",
      ].join(" ")}
    >
      <span
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-500 dark:to-accent1-500"
        aria-hidden="true"
      />
      {Icon && (
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-gray-100 transition-transform duration-300 group-hover:scale-105 dark:border-gray-800"
          style={{ backgroundColor: `${color}14` }}
        >
          <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0" style={{ color }} />
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-semibold leading-none text-gray-700 dark:text-gray-200">
        {name}
      </span>
    </div>
  )
}

// ── Scrolling track ──────────────────────────────────────────────────────────

// Drives the doubled track with requestAnimationFrame so visitors can drag or
// flick it in either direction; it glides with momentum, then auto-scroll eases
// back in. The loop only runs while the strip is on screen or being dragged.
function useDraggableMarquee(
  viewportRef: RefObject<HTMLDivElement | null>,
  trackRef: RefObject<HTMLDivElement | null>,
  duration: number,
  reverse: boolean,
) {
  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let cycle = track.scrollWidth / 2
    let motion: MarqueeMotion = {
      offset: wrapOffset(reverse ? -cycle : 0, cycle),
      velocity: 0,
      autoFactor: 1,
    }
    let drag: { pointerId: number; lastX: number; samples: PointerSample[] } | null = null
    let hovering = false
    let visible = false
    let frame = 0
    let lastTime = 0

    const render = () => {
      track.style.transform = `translate3d(${motion.offset}px, 0, 0)`
    }

    const tick = (time: number) => {
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0
      lastTime = time
      if (!drag) {
        motion = stepMarquee(motion, {
          dt,
          cycle,
          autoSpeed: ((reverse ? 1 : -1) * cycle) / duration,
          held: hovering,
          reducedMotion: reducedMotion.matches,
        })
      }
      render()
      frame = visible || drag ? requestAnimationFrame(tick) : 0
    }

    const start = () => {
      if (frame) return
      lastTime = 0
      frame = requestAnimationFrame(tick)
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return
      drag = {
        pointerId: event.pointerId,
        lastX: event.clientX,
        samples: [{ time: event.timeStamp, x: event.clientX }],
      }
      motion = { ...motion, velocity: 0, autoFactor: 0 }
      viewport.dataset.dragging = "true"
      start()
      try {
        viewport.setPointerCapture(event.pointerId)
      } catch {
        // The pointer can already be gone (e.g. a cancelled touch); the drag still ends on pointerup/cancel.
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return
      motion = { ...motion, offset: wrapOffset(motion.offset + event.clientX - drag.lastX, cycle) }
      drag.lastX = event.clientX
      drag.samples = [...drag.samples, { time: event.timeStamp, x: event.clientX }].filter(
        (sample) => event.timeStamp - sample.time <= 200,
      )
      render()
    }

    const onPointerEnd = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return
      const velocity = event.type === "pointerup" ? releaseVelocity(drag.samples, event.timeStamp) : 0
      motion = { ...motion, velocity }
      drag = null
      delete viewport.dataset.dragging
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId)
    }

    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovering = true
    }

    const onPointerLeave = () => {
      hovering = false
    }

    // Horizontal trackpad swipes move the strip; vertical wheel scrolling still scrolls the page.
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      event.preventDefault()
      const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1
      motion = { offset: wrapOffset(motion.offset - event.deltaX * scale, cycle), velocity: 0, autoFactor: 0 }
      render()
    }

    const resizeObserver = new ResizeObserver(() => {
      const next = track.scrollWidth / 2
      if (next <= 0 || next === cycle) return
      motion = { ...motion, offset: wrapOffset(cycle ? (motion.offset / cycle) * next : motion.offset, next) }
      cycle = next
      render()
    })

    // One callback can batch several entries for the viewport (e.g. scroll restoration); the last is current.
    const intersectionObserver = new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1].isIntersecting
      if (visible) start()
    })

    viewport.addEventListener("pointerdown", onPointerDown)
    viewport.addEventListener("pointermove", onPointerMove)
    viewport.addEventListener("pointerup", onPointerEnd)
    viewport.addEventListener("pointercancel", onPointerEnd)
    viewport.addEventListener("pointerenter", onPointerEnter)
    viewport.addEventListener("pointerleave", onPointerLeave)
    viewport.addEventListener("wheel", onWheel, { passive: false })
    resizeObserver.observe(track)
    intersectionObserver.observe(viewport)
    render()

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener("pointerdown", onPointerDown)
      viewport.removeEventListener("pointermove", onPointerMove)
      viewport.removeEventListener("pointerup", onPointerEnd)
      viewport.removeEventListener("pointercancel", onPointerEnd)
      viewport.removeEventListener("pointerenter", onPointerEnter)
      viewport.removeEventListener("pointerleave", onPointerLeave)
      viewport.removeEventListener("wheel", onWheel)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [viewportRef, trackRef, duration, reverse])
}

function MarqueeTrack({
  items,
  duration,
  label,
  reverse = false,
  variant = "default",
}: {
  items: TechItem[]
  duration: number
  label: string
  reverse?: boolean
  variant?: "default" | "ai"
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const doubled = [...items, ...items]
  useDraggableMarquee(viewportRef, trackRef, duration, reverse)

  return (
    <div className="relative grid gap-3 lg:grid-cols-[148px_1fr] lg:items-center">
      <div className="container mx-auto flex items-center gap-3 px-4 sm:px-6 lg:mx-0 lg:block lg:px-0">
        <span className="hidden h-px w-8 bg-gradient-to-r from-brand-500 to-accent1-500 lg:block" />
        <p className="type-label font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300 lg:mt-3">
          {label}
        </p>
      </div>
      <div
        ref={viewportRef}
        className="marquee-viewport cursor-grab touch-pan-y select-none overflow-hidden py-2.5 data-[dragging=true]:cursor-grabbing"
        style={{ WebkitMaskImage: MASK, maskImage: MASK }}
      >
        <div
          ref={trackRef}
          data-marquee-track
          className="flex w-max items-center will-change-transform"
          style={{ transform: reverse ? "translate3d(-50%, 0, 0)" : "translate3d(0, 0, 0)" }}
        >
          {doubled.map((item, index) => (
            <TechPill key={`${item.name}-${index}`} item={item} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────

export function TechStrip() {
  const aiItems = repeat(aiTools, 3)

  return (
    <section className="relative isolate overflow-hidden border-b border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.085),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(219,39,119,0.075),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_50%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(236,72,153,0.13),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_50%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.36] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 text-[22vw] font-black leading-none tracking-normal text-purple-900/[0.035] dark:text-white/[0.025]"
        aria-hidden="true"
      >
        STACK
      </div>

      <div className="relative z-10 flex flex-col gap-10">
        {/* ── Header ── */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-purple-300" />
              <p className="type-label font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
                TECHNOLOGY STACK
              </p>
              <span className="h-px w-10 bg-gradient-to-r from-pink-300 to-transparent" />
            </div>
            <h2 className="type-display copy-heading">
              The tools I use to build reliable web and mobile experiences.
            </h2>
            <p className="type-body mx-auto mt-5 max-w-2xl copy-body">
              My primary focus is frontend and mobile development, supported by modern development tools,
              content platforms and AI-assisted workflows.
            </p>
          </div>
        </motion.div>

        <div className="relative overflow-hidden border-y border-purple-100/80 bg-white/65 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm dark:border-purple-800/30 dark:bg-gray-950/20">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900"
            aria-hidden="true"
          />
          <div className="container mx-auto space-y-4 px-0 sm:px-0 lg:px-8">
            {/* ── Primary tech strip (left) ── */}
            <MarqueeTrack items={primaryTech} duration={44} label="Build stack" />

            {/* ── AI section divider ── */}
            <motion.div
              className="px-4 sm:px-6 lg:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-purple-100 dark:bg-purple-800/40" />
                <p className="type-label whitespace-nowrap font-semibold uppercase tracking-[0.24em] text-accent1-600 dark:text-accent1-300">
                  AI layer
                </p>
                <div className="h-px flex-1 bg-purple-100 dark:bg-purple-800/40" />
              </div>
            </motion.div>

            {/* ── AI tools strip (right) ── */}
            <MarqueeTrack items={aiItems} duration={30} label="Assistive tools" reverse variant="ai" />
          </div>
        </div>
      </div>
    </section>
  )
}
