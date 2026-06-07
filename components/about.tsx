"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Layers3, MonitorSmartphone, PenTool, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/utils/smooth-scroll"

const capabilityCards = [
  {
    label: "20+ client projects",
    title: "Delivery experience",
    description: "React, WordPress, Shopify and Webflow work shaped around real client needs.",
    Icon: Layers3,
    className: "lg:left-0 lg:top-10",
  },
  {
    label: "Live product ecosystem",
    title: "Product UI execution",
    description: "Customer app, internal dashboard and website work across ChefKart.",
    Icon: MonitorSmartphone,
    className: "lg:right-0 lg:top-28",
  },
  {
    label: "Design to interface",
    title: "Figma-ready frontend",
    description: "Responsive, visually accurate builds with clean structure and practical usability.",
    Icon: PenTool,
    className: "lg:left-14 lg:bottom-12",
  },
]

export function About() {
  const [activeCard, setActiveCard] = useState(2)

  return (
    <section id="about" className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(219,39,119,0.07),transparent_32%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_16%,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(236,72,153,0.1),transparent_32%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
                <Sparkles className="h-3.5 w-3.5" />
                ABOUT ME
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Building With Purpose
              </h2>

              <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  I&apos;m a Software Engineer and Frontend Developer with React.js and React Native experience,
                  delivering 20+ client projects and contributing across ChefKart&apos;s customer app, internal
                  dashboard and website.
                </p>
                <p>
                  I turn Figma designs and product requirements into polished, responsive interfaces with a strong focus
                  on usability, visual consistency and real business needs.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#experience"
                  onClick={(event) => smoothScroll(event, "#experience")}
                  className="w-full sm:w-auto"
                  aria-label="Navigate to experience section"
                >
                  <Button className="h-11 w-full rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:from-brand-700 hover:to-accent1-700 sm:w-auto">
                    Know More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-lg border-purple-200 bg-white px-5 text-brand-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-brand-300 hover:bg-purple-50 dark:border-purple-800/50 dark:bg-gray-950/30 dark:text-brand-300 dark:hover:bg-purple-900/20"
                >
                  <Link href="https://linkedin.com/in/anuj-dhanuka" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[520px] lg:min-h-[560px]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            >
              <div
                className="absolute inset-x-8 top-1/2 h-52 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-500/18 to-accent1-500/16 blur-3xl"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 top-16 hidden h-72 rounded-lg border border-purple-100 bg-white/45 shadow-[0_24px_70px_rgba(124,58,237,0.08)] backdrop-blur lg:block dark:border-purple-800/30 dark:bg-gray-950/25" />

              <div className="grid gap-4 lg:block">
                {capabilityCards.map(({ label, title, description, Icon, className }, index) => (
                  <motion.button
                    key={title}
                    type="button"
                    aria-pressed={activeCard === index}
                    onClick={() => setActiveCard(index)}
                    className={[
                      "group relative w-full cursor-pointer rounded-lg border p-5 text-left backdrop-blur-xl transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 lg:absolute lg:w-[58%]",
                      activeCard === index
                        ? "border-brand-300 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_26px_70px_rgba(124,58,237,0.18)] dark:border-brand-600/70 dark:bg-gray-950/85"
                        : "border-purple-100 bg-white/86 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.1)] hover:border-brand-200 hover:bg-white dark:border-purple-800/35 dark:bg-gray-950/55 dark:hover:border-brand-700/70",
                      className,
                    ].join(" ")}
                    style={{ zIndex: activeCard === index ? 30 : index + 1 }}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{
                      scale: activeCard === index ? 1.035 : 1,
                      y: activeCard === index ? -8 : 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.34,
                      ease: "easeOut",
                    }}
                  >
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent1-600 text-white shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span
                        className={[
                          "rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-300",
                          "border-purple-100 bg-purple-50/70 text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300",
                        ].join(" ")}
                      >
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
                      {label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
