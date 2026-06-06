"use client"

import { motion } from "framer-motion"
import { LayoutTemplate, Smartphone, Target, ShieldCheck } from "lucide-react"

const strengths = [
  {
    title: "Web and Mobile Development",
    description:
      "Responsive web interfaces and mobile journeys built for real users, devices and business workflows.",
    Icon: Smartphone,
  },
  {
    title: "Product-Focused Thinking",
    description:
      "Interfaces developed around user needs, business goals and the complete product journey rather than isolated screens.",
    Icon: Target,
  },
  {
    title: "Reliable Delivery",
    description:
      "Experience delivering multiple client projects and contributing consistently to active, production-level products.",
    Icon: ShieldCheck,
  },
]

export function WhatIBring() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-14">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
              <LayoutTemplate className="h-3.5 w-3.5" />
              What I Bring
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Technical execution supported by a strong visual and product sense.
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
              I do more than make interfaces functional. I focus on how each screen looks, behaves and
              supports the user's journey while staying aligned with product and business requirements.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {strengths.map(({ title, description, Icon }, index) => (
              <motion.article
                key={title}
                className="group relative overflow-hidden rounded-lg border border-purple-100 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_45px_rgba(124,58,237,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_55px_rgba(124,58,237,0.12)] dark:border-purple-800/30 dark:bg-gray-950/55 dark:shadow-none dark:hover:border-brand-700/70"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-500 dark:to-accent1-500"
                  aria-hidden="true"
                />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-105 dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold tabular-nums text-gray-300 dark:text-gray-700">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
