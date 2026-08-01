"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiWordpress, SiShopify, SiWebflow, SiFirebase, SiSupabase, SiGit,
  SiVercel, SiAnthropic,
} from "react-icons/si"
import { FiHeart } from "react-icons/fi"
import { OpenAIIcon } from "@/components/icons/openai-icon"
import type { IconType } from "react-icons"

type TechItem = { name: string; Icon: IconType | null; color: string }

const primaryTech: TechItem[] = [
  { name: "React.js",     Icon: SiReact,      color: "#61DAFB" },
  { name: "React Native", Icon: SiReact,      color: "#61DAFB" },
  { name: "TypeScript",   Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript",   Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5",        Icon: SiHtml5,      color: "#E34F26" },
  { name: "CSS3",         Icon: SiCss,        color: "#1572B6" },
  { name: "WordPress",    Icon: SiWordpress,  color: "#21759B" },
  { name: "Shopify",      Icon: SiShopify,    color: "#96BF48" },
  { name: "Webflow",      Icon: SiWebflow,    color: "#4353FF" },
  { name: "Firebase",     Icon: SiFirebase,   color: "#FFCA28" },
  { name: "Supabase",     Icon: SiSupabase,   color: "#3ECF8E" },
  { name: "Git",          Icon: SiGit,        color: "#F05032" },
]

const aiTools: TechItem[] = [
  { name: "Claude",       Icon: SiAnthropic,             color: "#D4A27F" },
  { name: "OpenAI Codex", Icon: OpenAIIcon as IconType,  color: "#10A37F" },
  { name: "v0.dev",       Icon: SiVercel,    color: "#6366F1" },
  { name: "Lovable",      Icon: FiHeart,     color: "#EC4899" },
]

function repeat<T>(arr: T[], n: number): T[] {
  return Array(n).fill(arr).flat()
}

const MASK = "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"

// ── Pill ────────────────────────────────────────────────────────────────────

function TechPill({
  item,
  variant = "default",
}: {
  item: TechItem
  variant?: "default" | "ai"
}) {
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
          <Icon
            className="h-4 w-4 flex-shrink-0"
            style={{ color }}
          />
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-semibold leading-none text-gray-700 dark:text-gray-200">
        {name}
      </span>
    </div>
  )
}

// ── Scrolling track ──────────────────────────────────────────────────────────

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
  const [paused, setPaused] = useState(false)
  const doubled = [...items, ...items]

  return (
    <div className="relative grid gap-3 lg:grid-cols-[148px_1fr] lg:items-center">
      <div className="container mx-auto flex items-center gap-3 px-4 sm:px-6 lg:mx-0 lg:block lg:px-0">
        <span className="hidden h-px w-8 bg-gradient-to-r from-brand-500 to-accent1-500 lg:block" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300 lg:mt-3">
          {label}
        </p>
      </div>
      <div
        className="overflow-hidden py-2.5"
        style={{ WebkitMaskImage: MASK, maskImage: MASK }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          data-marquee-track
          className="flex w-max items-center"
          style={{
            animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((item, i) => (
            <TechPill key={`${item.name}-${i}`} item={item} variant={variant} />
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
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-marquee-track] {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section
        className="relative isolate overflow-hidden border-b border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
      >
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
                  TECHNOLOGY STACK
                </p>
                <span className="h-px w-10 bg-gradient-to-r from-pink-300 to-transparent" />
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
                The tools I use to build reliable web and mobile experiences.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
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
                  <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.24em] text-accent1-600 dark:text-accent1-300">
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
    </>
  )
}
