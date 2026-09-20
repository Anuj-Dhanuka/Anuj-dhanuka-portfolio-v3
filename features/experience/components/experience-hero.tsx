import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { LinkButton } from "@/components/ui/link-button"
import {
  experienceHighlights,
  experienceRoles,
  type ExperienceRoleId,
} from "@/features/experience/data/experience"
import { cn } from "@/lib/utils"

const logoSurfaceStyles: Record<ExperienceRoleId, string> = {
  chefkart: "border-gray-200 bg-white",
  ppcroy: "border-white/10 bg-[#0d111d]",
  "third-eye-lab": "border-gray-200 bg-white",
}

export function ExperienceHero() {
  return (
    <section
      aria-labelledby="experience-hero-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:min-h-[680px] lg:pb-20 lg:pt-28 xl:min-h-[720px]"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-brand-200/80">
          <ol className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-white">
              Experience
            </li>
          </ol>
        </nav>

        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.75fr)]">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              Professional experience
            </p>

            <h1 id="experience-hero-heading" className="type-hero mt-5 max-w-3xl text-white">
              Frontend and mobile experience,{" "}
              <span className="hero-gradient-text">from client delivery to product ownership.</span>
            </h1>

            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">
              I’m a Software Engineer and Frontend Developer with professional experience building React
              Native applications, React and Next.js products, internal dashboards, payment workflows and
              responsive business websites.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#roles"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Review my experience
              </LinkButton>
              <LinkButton
                href="/projects"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                View selected projects
              </LinkButton>
            </div>
          </div>

          <aside
            aria-label="Career progression summary"
            className="relative mx-auto w-full max-w-[460px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <div
              className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand-500/25 to-accent1-500/20 blur-3xl sm:-inset-12"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-black/35 backdrop-blur-sm sm:rounded-[2rem] sm:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="type-caption font-semibold uppercase tracking-[0.14em] text-brand-200">
                  Career progression
                </span>
                <BriefcaseBusiness className="h-5 w-5 text-brand-300" aria-hidden="true" />
              </div>

              <div className="space-y-3">
                {experienceRoles.map((role, index) => (
                  <div
                    key={role.id}
                    className={`grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 rounded-2xl border p-3 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-4 sm:p-4 ${
                      index === 0
                        ? "border-brand-300/35 bg-gradient-to-r from-brand-500/20 to-accent1-500/15"
                        : "border-white/10 bg-black/20"
                    }`}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-[72px] items-center justify-center rounded-xl border p-2.5 sm:h-14 sm:w-20",
                        logoSurfaceStyles[role.id],
                      )}
                    >
                      <Image
                        src={role.logo}
                        alt=""
                        width={160}
                        height={56}
                        className="h-auto max-h-full w-full object-contain"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-white">{role.position}</span>
                      <span className="mt-1 block text-xs text-gray-300">{role.company}</span>
                      <span className="mt-0.5 block text-xs text-brand-200">{role.duration}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-gray-300">
                <MapPin className="h-4 w-4 flex-none text-accent1-300" aria-hidden="true" />
                Onsite and remote experience across Hyderabad and Gurugram
              </div>
            </div>
          </aside>

          <dl className="grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-5 lg:col-start-1 lg:row-start-2">
            {experienceHighlights.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
              >
                <dt className="type-caption text-brand-200">{label}</dt>
                <dd className="mt-1 text-base font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
