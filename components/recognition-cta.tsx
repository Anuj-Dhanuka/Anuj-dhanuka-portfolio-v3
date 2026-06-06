"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recognitionUrl =
  "https://www.linkedin.com/posts/anuj-dhanuka_rewardsandrecognition-chefkart-reactnative-share-7463089455172845569-ML3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVInBQB17-NdeSfv3bpUy3ZdJaN7NgcWgI"

export function RecognitionCTA() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="grid lg:grid-cols-2">
        <div className="relative z-10 overflow-hidden border-y border-r border-purple-100 bg-white py-16 shadow-[10px_0_32px_rgba(124,58,237,0.12),0_-12px_30px_rgba(15,23,42,0.08),0_14px_32px_rgba(15,23,42,0.1)] dark:border-purple-800/40 dark:bg-gray-950 dark:shadow-[10px_0_32px_rgba(0,0,0,0.3),0_-12px_30px_rgba(0,0,0,0.22),0_14px_32px_rgba(0,0,0,0.28)] md:py-24">
          <div className="relative mx-auto w-full max-w-[700px] px-4 sm:px-6 lg:ml-auto lg:mr-0 lg:px-12 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300">
                <Award className="h-3.5 w-3.5" />
                Technology & Engineering
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Rewards & Recognition at ChefKart.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                Recognised for my contribution while working across ChefKart&apos;s digital product experiences.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-purple-100 bg-purple-50/60 p-4 dark:border-purple-800/40 dark:bg-purple-900/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">Event</p>
                  <p className="mt-2 font-bold text-gray-900 dark:text-white">ChefKart Townhall</p>
                </div>
                <div className="rounded-lg border border-purple-100 bg-purple-50/60 p-4 dark:border-purple-800/40 dark:bg-purple-900/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">Awarded</p>
                  <p className="mt-2 font-bold text-gray-900 dark:text-white">May 2026</p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
                >
                  <Link href={recognitionUrl} target="_blank" rel="noopener noreferrer">
                    View Recognition
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-purple-600 to-accent1-600 py-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto flex h-full w-full max-w-[700px] flex-col justify-center px-4 sm:px-6 lg:ml-0 lg:mr-auto lg:px-12 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-xl">
                <div className="relative rounded-lg border border-purple-100 bg-white p-2 shadow-[0_24px_70px_rgba(124,58,237,0.16)] dark:border-purple-800/40 dark:bg-gray-900">
                  <div className="relative aspect-[1208/720] overflow-hidden rounded-md bg-white">
                    <Image
                      src="/Recognizations/Reward_and_recognization_chefkart.webp"
                      alt="ChefKart rewards and recognition LinkedIn post"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full max-w-xl rounded-lg border border-white/25 bg-white/15 p-4 text-white shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                      Recognition
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-white">
                      Product work recognised by the engineering team
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
