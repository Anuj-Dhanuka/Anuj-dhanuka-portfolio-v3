"use client"

import { motion } from "framer-motion"
import { Award, BookOpenCheck, ExternalLink, GraduationCap, Sparkles, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const recognitionUrl =
  "https://www.linkedin.com/posts/anuj-dhanuka_rewardsandrecognition-chefkart-reactnative-share-7463089455172845569-ML3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVInBQB17-NdeSfv3bpUy3ZdJaN7NgcWgI"
const reactJsCertificateUrl = "https://certificates.ccbp.in/intensive/react-js?id=PBLHJQRRRD"
const reactNativeCertificateUrl = "https://www.udemy.com/certificate/UC-2ccd6fc5-ebdf-4674-8fa6-213dcb33765a/"

const items = [
  {
    title: "Technology & Engineering Recognition",
    issuer: "ChefKart",
    meta: "May 2026",
    description:
      "Recognised in May 2026 for my contribution across ChefKart's customer-facing and internal digital product experiences.",
    cta: "View Recognition",
    href: recognitionUrl,
    Icon: Trophy,
    featured: true,
  },
  {
    title: "React JS Certification",
    issuer: "CCBP",
    meta: "Frontend Training",
    description:
      "Completed structured React.js training covering component development, state management and modern frontend concepts.",
    cta: "View Certificate",
    href: reactJsCertificateUrl,
    Icon: GraduationCap,
  },
  {
    title: "React Native Certification",
    issuer: "Udemy",
    meta: "Mobile Training",
    description: "Completed React Native training to strengthen practical mobile app development and implementation skills.",
    cta: "View Certificate",
    href: reactNativeCertificateUrl,
    Icon: BookOpenCheck,
  },
]

export function RecognitionCertifications() {
  return (
    <section
      id="recognition-learning"
      className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_84%_66%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_84%_66%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
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
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            RECOGNITION & LEARNING
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Progress Recognised Through Work
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-stretch">
          <motion.article
            className="group relative overflow-hidden rounded-lg border border-brand-200 bg-gradient-to-br from-white via-purple-50/80 to-pink-50/80 p-6 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.13)] backdrop-blur dark:border-purple-800/35 dark:from-gray-950/85 dark:via-purple-950/25 dark:to-pink-950/20 lg:p-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-brand-500/16 to-accent1-500/14 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent1-600 text-white shadow-lg shadow-purple-500/20">
                  <Trophy className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-purple-100 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 shadow-sm dark:border-purple-800/40 dark:bg-gray-950/40 dark:text-gray-400">
                  {items[0].meta}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
                  {items[0].issuer}
                </p>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
                  {items[0].title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                  {items[0].description}
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-purple-100 bg-white/72 p-4 shadow-sm dark:border-purple-800/40 dark:bg-gray-950/45">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
                    Recognition
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">Technology & Engineering</p>
                </div>
                <div className="rounded-lg border border-purple-100 bg-white/72 p-4 shadow-sm dark:border-purple-800/40 dark:bg-gray-950/45">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
                    Context
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">Live product contribution</p>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <Button
                  asChild
                  className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
                >
                  <Link href={items[0].href ?? "#"} target="_blank" rel="noopener noreferrer">
                    {items[0].cta}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5">
              {items.slice(1).map(({ title, issuer, meta, description, cta, href, Icon }, index) => (
                <motion.article
                  key={title}
                  className="group relative rounded-lg border border-purple-100 bg-white/92 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_14px_40px_rgba(124,58,237,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_50px_rgba(124,58,237,0.11)] dark:border-purple-800/35 dark:bg-gray-950/70 dark:hover:border-brand-700/70"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-accent1-50 text-brand-600 shadow-sm dark:from-brand-900/30 dark:to-accent1-900/20 dark:text-brand-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
                          {issuer}
                        </p>
                        <span className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-gray-400">
                          {meta}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
                      <div className="mt-5">
                        <Button
                          asChild
                          variant="outline"
                          className="h-10 rounded-lg border-purple-200 bg-white px-4 text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-purple-800/50 dark:bg-gray-950/30 dark:text-brand-300 dark:hover:bg-brand-900/20"
                        >
                          <Link href={href ?? "#"} target="_blank" rel="noopener noreferrer">
                            {cta}
                            <Award className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
