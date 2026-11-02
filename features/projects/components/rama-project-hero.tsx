import Image from "next/image"
import { ArrowDown, GraduationCap, Monitor } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectLinks } from "@/features/projects/components/projects"
import type { CaseStudyProject } from "@/features/projects/project-details"

// Mirrors the shared case-study hero (Mopedo, QuizWar, Rekha); the client's palette appears only in the screenshot.
const facts = [
  ["Project type", "Freelance, through a friend"],
  ["My responsibility", "Homepage design and build"],
  ["AI-assisted workflow", "v0 ideation · ChatGPT copy"],
  ["Built with", "WordPress · Elementor"],
]

export function RamaProjectHero({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const screenshot = detail.screenshots[0]
  const host = project.liveLink ? new URL(project.liveLink).host : null

  return (
    <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />

        {/* Top-aligned so the eyebrow always sits directly under the breadcrumb, whatever the screenshot height. */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 font-medium text-brand-200">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Freelance education website
            </p>
            <h1 className="type-hero mt-5 max-w-xl text-white">
              {/* The long name fills the first line, so the phrase gets its own; the dash stays for screen readers. */}
              Rama Technical College<span className="sr-only"> —</span>{" "}
              <span className="hero-gradient-text block">Institute Homepage</span>
            </h1>
            <p className="type-lead mt-6 max-w-xl copy-inverse-body">{detail.summary}</p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start">
              <ProjectLinks project={project} />
              <LinkButton href="#overview" variant="outlineInverse" icon={<ArrowDown className="h-4 w-4" />}>
                Explore the case study
              </LinkButton>
            </div>
          </div>

          <figure className="relative order-1 min-w-0 lg:order-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-brand-500/20 to-accent1-500/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gray-950 shadow-2xl shadow-black/30">
              <div
                className="flex items-center gap-4 border-b border-white/10 bg-white/5 px-4 py-3"
                aria-hidden="true"
              >
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent1-400" />
                  <span className="h-2 w-2 rounded-full bg-brand-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                </div>
                {host ? <span className="type-caption flex-1 text-center text-gray-300">{host}</span> : null}
                <Monitor className="h-4 w-4 text-brand-300" />
              </div>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </figure>
        </div>

        <dl className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="type-label text-brand-200">{label}</dt>
              <dd className="type-small mt-2 text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
