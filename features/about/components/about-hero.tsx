import Image from "next/image"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { aboutHighlights } from "@/features/about/data/about"

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:flex lg:min-h-[680px] lg:items-center lg:pb-12 lg:pt-32 xl:min-h-[720px]"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="min-w-0">
            <HeroBreadcrumb current="About" />

            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              My journey
            </p>

            <h1 id="about-hero-heading" className="type-hero mt-5 max-w-3xl text-white">
              A frontend developer shaped by{" "}
              <span className="hero-gradient-text">business ownership and product thinking.</span>
            </h1>

            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">
              My path into software began during the final year of mechanical engineering, grew through family
              business responsibility and structured self-learning, and now continues in production work
              across React, Next.js and React Native.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#journey"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore my journey
              </LinkButton>
              <LinkButton
                href="/projects"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                View my projects
              </LinkButton>
            </div>

            <dl className="mt-9 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-5">
              {aboutHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                >
                  <dt className="type-caption text-brand-200">{highlight.label}</dt>
                  <dd className="mt-1 text-base font-bold text-white">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div
              className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-brand-500/30 to-accent1-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl shadow-black/35 backdrop-blur-sm">
              <div className="relative aspect-[4/4.25] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-brand-100 to-accent1-100">
                <Image
                  src="/anuj_profile_pic.png"
                  alt="Anuj Dhanuka, Software Engineer and Frontend Developer"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 430px, 390px"
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-gray-950/80 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-5 bottom-5 z-20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gray-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
                    Software Engineer at ChefKart
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gray-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <MapPin className="h-3.5 w-3.5 text-accent1-300" aria-hidden="true" />
                    Gurugram, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
