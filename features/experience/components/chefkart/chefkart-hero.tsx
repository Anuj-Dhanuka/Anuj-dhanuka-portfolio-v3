import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  CreditCard,
  Globe,
  LayoutDashboard,
  Smartphone,
} from "lucide-react"

import { TrackedLink } from "@/components/analytics/tracked-link"
import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { analyticsEvents } from "@/config/analytics"
import { site } from "@/config/site"
import { chefkartHero, chefkartSystem } from "@/features/experience/data/chefkart"

const surfaceIcons = [Globe, Smartphone, CreditCard, LayoutDashboard]

// Hero diagram: a booking moving through the website, app, payment application and operations dashboard.
// Built in markup (no screenshots) so it stays readable, theme-aware and free of internal data.
function SystemDiagram() {
  return (
    <figure
      aria-label="A ChefKart booking moving through the website, customer app, payment application and operations dashboard"
      className="relative"
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-brand-500/25 to-accent1-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative rounded-lg border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <span className="flex h-10 w-24 items-center justify-center rounded-lg bg-white p-1.5">
            <Image
              src="/logos/chefkart-logo.webp"
              alt="ChefKart"
              width={160}
              height={56}
              className="h-auto max-h-full w-full object-contain"
            />
          </span>
          <figcaption className="type-label text-brand-200">One service, four products</figcaption>
        </div>

        <ol className="mt-4">
          {chefkartSystem.map((node, index) => {
            const Icon = surfaceIcons[index]
            const isLast = index === chefkartSystem.length - 1

            return (
              <li key={node.surface} className="relative flex gap-4 pb-3 last:pb-0">
                {!isLast && (
                  <span
                    className="absolute bottom-0 left-5 top-11 w-px -translate-x-1/2 bg-gradient-to-b from-brand-300/70 to-accent1-300/40"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-950/40">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/20 px-4 py-2.5">
                  <p className="type-caption font-semibold text-brand-200">
                    {node.surface} · {node.stack}
                  </p>
                  <p className="type-small font-semibold text-white">{node.step}</p>
                  <ul className="mt-1.5 flex flex-wrap gap-1.5" aria-label={`My work on the ${node.surface}`}>
                    {node.work.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 type-caption text-gray-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>

        <TrackedLink
          href={site.recognitionUrl}
          target="_blank"
          rel="noopener noreferrer"
          eventName={analyticsEvents.projectViewed}
          eventProperties={{ project: "chefkart", destination: "recognition" }}
          className="mt-4 flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 type-small text-white transition-colors hover:border-brand-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <Award className="h-5 w-5 flex-none text-brand-200" aria-hidden="true" />
          <span className="flex-1">Recognised in Technology & Engineering, May 2026</span>
          <ArrowUpRight className="h-4 w-4 flex-none text-brand-200" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </TrackedLink>
      </div>
    </figure>
  )
}

// Shared hero pattern: text and actions on the left, the product-system diagram on the right.
export function ChefkartHero() {
  return (
    <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBreadcrumb current="ChefKart" parents={[{ label: "Experience", href: "/experience" }]} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              {chefkartHero.eyebrow}
            </p>
            <h1 className="type-hero mt-5 max-w-3xl text-white">
              {chefkartHero.title} <span className="hero-gradient-text">{chefkartHero.titleAccent}</span>
            </h1>
            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">{chefkartHero.intro}</p>
            <p className="type-lead mt-4 max-w-2xl copy-inverse-body">{chefkartHero.lede}</p>
            <p className="type-small mt-4 text-brand-200">{chefkartHero.meta}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#story"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore the work
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Talk to me
              </LinkButton>
            </div>

            <p className="type-caption mt-6 max-w-2xl text-gray-400">{chefkartHero.stack.join(" · ")}</p>
          </div>

          <SystemDiagram />
        </div>
      </div>
    </header>
  )
}
