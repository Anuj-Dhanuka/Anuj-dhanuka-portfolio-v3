"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Lightbulb, MessageSquareText, Sparkles, Target, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const learningAreas = [
  { label: "User-Focused Thinking", Icon: Target },
  { label: "Visual Communication", Icon: MessageSquareText },
  { label: "Strategic Problem-Solving", Icon: Lightbulb },
  { label: "Professional Growth", Icon: TrendingUp },
]

export function Mentor() {
  return (
    <section id="mentor" className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              MENTORSHIP
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
              Learning Beyond Development
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                I have had the opportunity to learn under the guidance of Anjaneyulu Jadda, founder of
                PPCROY TECH SOLUTIONS and Scale Minds.
              </p>
              <p>
                His mentorship helped me strengthen my understanding of user-focused design, digital strategy,
                professional responsibility and the relationship between product experiences and business goals.
              </p>
            </div>
            <div className="mt-7">
              <Button
                asChild
                className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
              >
                <Link href="https://www.linkedin.com/in/anjaneyulu-jadda/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <div
              className="absolute inset-x-8 top-1/2 h-52 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-500/18 to-accent1-500/16 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-lg border border-purple-100 bg-white/90 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.12)] backdrop-blur dark:border-purple-800/35 dark:bg-gray-950/55 sm:p-6">
              <div className="grid gap-5 border-b border-purple-100 pb-5 dark:border-purple-800/35 sm:grid-cols-[170px_1fr] sm:items-center">
                <div className="relative overflow-hidden rounded-lg border border-purple-100 bg-white p-2 shadow-[0_18px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/40 dark:bg-gray-900">
                  <div className="relative aspect-square overflow-hidden rounded-md bg-gradient-to-br from-brand-50 to-accent1-50">
                    <Image
                      src="/anjneyulu-jadda-sir.png"
                      alt="Anjaneyulu Jadda, founder of PPCROY TECH SOLUTIONS and Anuj Dhanuka's mentor"
                      fill
                      sizes="170px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
                      Areas of Learning
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                      Guidance that shaped my approach
                    </h3>
                  </div>
                  <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent1-600 text-white shadow-lg shadow-purple-500/20 sm:flex">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {learningAreas.map(({ label, Icon }, index) => (
                  <motion.div
                    key={label}
                    className="group rounded-lg border border-purple-100 bg-purple-50/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-[0_16px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/35 dark:bg-purple-900/15 dark:hover:border-brand-700/70 dark:hover:bg-gray-950/60"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-gray-950/70 dark:text-brand-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-4 text-base font-bold leading-snug text-gray-900 dark:text-white">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
