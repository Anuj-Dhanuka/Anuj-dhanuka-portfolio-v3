import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import {
  freelanceContactHref,
  fullTimeContactHref,
  heroFacts,
  reactDeveloperHero,
} from "@/features/react-developer/data/react-developer"

// Inline so a wrapped label keeps its arrow on the last line instead of pinning it to the far edge.
const factLink =
  "py-2.5 underline decoration-brand-300/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:py-0"

// Shared hero pattern (Skills, PPCROY): breadcrumb, eyebrow pill, type-hero H1 with a gradient phrase.
// The portrait reuses the homepage's small direct-served file; it is not preloaded here, so the
// homepage LCP strategy is unchanged.
export function ReactDeveloperHero() {
  return (
    <header
      data-page-hero
      className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32"
    >
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBreadcrumb current="React Developer" />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="type-badge inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              {reactDeveloperHero.eyebrow}
            </p>
            <h1 className="type-hero mt-5 text-white">
              {reactDeveloperHero.title}{" "}
              <span className="hero-gradient-text">{reactDeveloperHero.titleAccent}</span>
            </h1>
            {reactDeveloperHero.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`type-lead max-w-2xl copy-inverse-body ${index === 0 ? "mt-6" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}

            <ul
              aria-label="At a glance"
              className="type-small mt-6 flex flex-col gap-x-6 gap-y-1 text-brand-100 sm:flex-row sm:flex-wrap sm:gap-y-2"
            >
              {heroFacts.map((fact) => (
                <li key={fact.label} className="flex min-h-11 items-center gap-1.5 sm:min-h-0">
                  {fact.href ? (
                    <Link href={fact.href} className={factLink}>
                      {fact.label}
                      <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                    </Link>
                  ) : (
                    <>
                      <MapPin className="h-3.5 w-3.5 flex-none text-brand-300" aria-hidden="true" />
                      {fact.label}
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href={fullTimeContactHref}
                data-cta="discuss_full_time_role"
                data-cta-section="hero"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {reactDeveloperHero.fullTimeLabel}
              </LinkButton>
              <LinkButton
                href={freelanceContactHref}
                variant="outlineInverse"
                data-cta="discuss_freelance_project"
                data-cta-section="hero"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {reactDeveloperHero.freelanceLabel}
              </LinkButton>
            </div>
          </div>

          <div className="relative mx-auto hidden lg:block">
            <div
              className="absolute inset-[-28px] rounded-full bg-gradient-to-br from-purple-600/35 to-pink-600/35 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-[3px] border-purple-300/30 shadow-2xl shadow-purple-950/40 xl:h-[320px] xl:w-[320px]">
              <Image
                src="/anuj-profile-400.jpg"
                alt="Anuj Dhanuka, React.js developer based in India"
                fill
                unoptimized
                loading="eager"
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
