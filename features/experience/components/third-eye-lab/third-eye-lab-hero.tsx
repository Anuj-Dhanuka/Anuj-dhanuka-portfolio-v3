import Image from "next/image"
import { ArrowDown, ArrowRight, ChevronRight, Smartphone } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { thirdEyeLabHero } from "@/features/experience/data/third-eye-lab"

const flow = ["Category", "Questions", "Progress", "Feedback"] as const

function InternshipVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-lg" aria-labelledby="internship-visual-caption">
      <div
        className="pointer-events-none absolute inset-10 rounded-full bg-gradient-to-br from-brand-500/30 to-accent1-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl shadow-brand-950/30 backdrop-blur sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
              <Image
                src="/logos/3rd-eye-lab-logo.png"
                alt="3rd Eye Lab"
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Mobile assignment</p>
              <p className="text-xs text-brand-200">React Native CLI</p>
            </div>
          </div>
          <Smartphone className="h-6 w-6 text-brand-200" aria-hidden="true" />
        </div>

        <ol className="mt-5 grid gap-3">
          {flow.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-200">
                {index + 1}
              </span>
              <span className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white">
                {item}
              </span>
              {index < flow.length - 1 ? (
                <ChevronRight className="h-4 w-4 flex-none text-brand-300" aria-hidden="true" />
              ) : (
                <span className="h-4 w-4" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
      <figcaption id="internship-visual-caption" className="type-caption mt-4 text-center text-gray-400">
        A simplified view of the user flow, not a product screenshot.
      </figcaption>
    </figure>
  )
}

export function ThirdEyeLabHero() {
  return (
    <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBreadcrumb current="3rd Eye Lab" parents={[{ label: "Experience", href: "/experience" }]} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-accent1-400" aria-hidden="true" />
              {thirdEyeLabHero.eyebrow}
            </p>
            <h1 className="type-hero mt-5 max-w-3xl text-white">
              {thirdEyeLabHero.title}{" "}
              <span className="hero-gradient-text">{thirdEyeLabHero.titleAccent}</span>
            </h1>
            {thirdEyeLabHero.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`type-lead max-w-2xl copy-inverse-body ${index === 0 ? "mt-6" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}
            <p className="type-small mt-4 text-brand-200">{thirdEyeLabHero.meta}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#beginning"
                data-cta="explore_work"
                data-cta-section="hero"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore the story
              </LinkButton>
              <LinkButton
                href="/contact"
                data-cta="talk_to_me"
                data-cta-section="hero"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Talk to me
              </LinkButton>
            </div>

            <p className="type-caption mt-6 max-w-2xl text-gray-400">{thirdEyeLabHero.stack.join(" · ")}</p>
          </div>

          <InternshipVisual />
        </div>
      </div>
    </header>
  )
}
