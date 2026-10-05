import Image from "next/image"
import {
  ArrowDown,
  ArrowUpRight,
  Bike,
  Check,
  Code2,
  Layers3,
  Monitor,
  MousePointer2,
  Package,
  Utensils,
} from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectLinks } from "@/features/projects/components/projects"
import type { CaseStudyProject } from "@/features/projects/project-details"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { MopedoEngineeringNotes } from "@/features/projects/components/mopedo-engineering-notes"

const services = [
  {
    label: "Bike taxi",
    number: "01",
    Icon: Bike,
    tone: "brand",
  },
  {
    label: "Food delivery",
    number: "02",
    Icon: Utensils,
    tone: "accent1",
  },
  {
    label: "Goods delivery",
    number: "03",
    Icon: Package,
    tone: "accent2",
  },
] as const

const implementationIcons = [Layers3, Monitor, MousePointer2]
const deliveryHighlights = [
  {
    label: "Complete build",
    title: "Four page views",
    Icon: Monitor,
    accent: "bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200",
  },
  {
    label: "Verification",
    title: "Inspect the interface and source",
    Icon: MousePointer2,
    accent: "bg-accent1-100 text-accent1-700 dark:bg-accent1-900/50 dark:text-accent1-200",
  },
] as const

export function MopedoProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const screenshot = detail.screenshots[0]

  return (
    <article>
      <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 min-w-0 lg:order-1">
              <p className="type-label mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-2 text-brand-200">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                {project.category} · Case study
              </p>
              <h1 className="type-hero max-w-xl text-white">
                {project.title} brings{" "}
                <span className="hero-gradient-text">three services into one web experience</span>.
              </h1>
              <p className="type-lead mt-6 max-w-xl copy-inverse-body">{detail.summary}</p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start">
                <ProjectLinks project={project} />
                <LinkButton href="#context" variant="outlineInverse" icon={<ArrowDown className="h-4 w-4" />}>
                  Explore the case study
                </LinkButton>
              </div>
            </div>

            {screenshot && (
              <figure className="relative order-1 hidden min-w-0 md:block lg:order-2 lg:py-6">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-accent1-500/15 blur-3xl"
                  aria-hidden="true"
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
                    <span className="type-caption flex-1 text-center text-gray-300">
                      Mopedo / Web experience
                    </span>
                    <Monitor className="h-4 w-4 text-brand-300" />
                  </div>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                    className="h-auto w-full bg-white"
                  />
                </div>
              </figure>
            )}
          </div>
          <dl className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3 lg:mt-14">
            <div>
              <dt className="type-label text-brand-200">My responsibility</dt>
              <dd className="type-small mt-2 max-w-sm text-white">{detail.responsibility}</dd>
            </div>
            <div>
              <dt className="type-label text-brand-200">Project format</dt>
              <dd className="type-small mt-2 text-white">React application · Four page views</dd>
            </div>
            <div>
              <dt className="type-label text-brand-200">Built with</dt>
              <dd className="type-small mt-2 text-white">{project.tags.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <PageSectionNav
        items={[
          { href: "#context", label: "Project context" },
          { href: "#contribution", label: "My contribution" },
          { href: "#implementation", label: "How it was built" },
          { href: "#screenshots", label: "The interface" },
          { href: "#outcome", label: "What I delivered" },
        ]}
      />

      <section
        id="context"
        aria-labelledby="context-heading"
        className="relative isolate scroll-mt-28 overflow-hidden border-y border-brand-100 bg-gradient-to-br from-brand-50/80 via-white to-accent1-50/60 py-16 dark:border-brand-900/50 dark:from-brand-950/25 dark:via-gray-950 dark:to-accent1-950/15 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(circle_at_center,theme(colors.brand.200)_1px,transparent_1px)] [background-size:24px_24px] dark:opacity-10"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mx-auto max-w-4xl text-center">
              <p className="type-label text-brand-700 dark:text-brand-300">01 / Project context</p>
              <h2 id="context-heading" className="type-section mt-4 copy-heading">
                Explain each service within one product.
              </h2>
              <p className="type-body mx-auto mt-5 max-w-3xl copy-body">{detail.context}</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {services.map(({ label, number, Icon, tone }) => {
                const toneClasses = {
                  brand: {
                    icon: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
                    badge:
                      "border-brand-100 bg-brand-50 text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300",
                  },
                  accent1: {
                    icon: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
                    badge:
                      "border-accent1-100 bg-accent1-50 text-accent1-700 dark:border-accent1-800/60 dark:bg-accent1-950/30 dark:text-accent1-300",
                  },
                  accent2: {
                    icon: "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
                    badge:
                      "border-accent2-100 bg-accent2-50 text-accent2-700 dark:border-accent2-800/60 dark:bg-accent2-950/30 dark:text-accent2-300",
                  },
                }[tone]

                return (
                  <article
                    key={label}
                    className="flex min-h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 backdrop-blur-sm md:last:col-span-2 lg:last:col-span-1 dark:border-gray-800 dark:bg-gray-900/85 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses.icon}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={`type-caption rounded-full border px-3 py-1 font-semibold ${toneClasses.badge}`}
                      >
                        Service {number}
                      </span>
                    </div>
                    <h3 className="type-card mt-5 copy-heading">{label}</h3>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contribution"
        aria-labelledby="contribution-heading"
        className="relative isolate scroll-mt-28 overflow-hidden bg-gray-950 py-16 text-white md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/60 via-transparent to-accent1-950/30"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="type-label mb-4 text-brand-300">02 / My contribution</p>
              <h2 id="contribution-heading" className="type-section max-w-md text-white">
                My frontend responsibilities.
              </h2>
            </div>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {project.contributions.map((contribution) => (
                <li key={contribution} className="flex items-start gap-3 border-t border-white/15 pt-5">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="type-small text-gray-200">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="implementation"
        aria-labelledby="implementation-heading"
        className="relative isolate scroll-mt-28 overflow-hidden bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-50/30 to-accent1-50/45 dark:from-gray-950 dark:via-brand-950/10 dark:to-accent1-950/10"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">03 / How it was built</p>
            <h2 id="implementation-heading" className="type-section mt-4 copy-heading">
              How the React application is structured.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {detail.implementation.map((item, index) => {
              const Icon = implementationIcons[index] ?? Code2
              const cardTone = [
                "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
                "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
                "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
              ][index]

              return (
                <article
                  key={item.title}
                  className="flex min-h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 backdrop-blur-sm md:last:col-span-2 lg:last:col-span-1 dark:border-gray-800 dark:bg-gray-900/85 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${cardTone}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="type-caption rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-semibold text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300">
                      Detail 0{index + 1}
                    </span>
                  </div>
                  <h3 className="type-card mt-5 copy-heading">{item.title}</h3>
                  <p className="type-small mt-3 copy-body">{item.description}</p>
                </article>
              )
            })}
          </div>

          <MopedoEngineeringNotes detail={detail} />

          <div className="mt-8 flex justify-center">
            <LinkButton
              href="/skills#core-skills"
              variant="primary"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Explore my frontend skills
            </LinkButton>
          </div>
        </div>
      </section>

      <section
        id="screenshots"
        aria-labelledby="screenshots-heading"
        className="relative isolate scroll-mt-28 overflow-hidden border-y border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand-50/80 via-accent1-50/25 to-transparent dark:from-brand-950/25 dark:via-accent1-950/10"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="order-2 max-w-2xl lg:order-1">
              <p className="type-label text-brand-700 dark:text-brand-300">04 / The interface</p>
              <h2 id="screenshots-heading" className="type-section mt-4 copy-heading">
                Interface walkthrough.
              </h2>
              <p className="type-body mt-5 copy-body">{screenshot?.caption}</p>
              <div className="mt-7 flex">
                <ProjectLinks project={project} />
              </div>
            </div>

            {detail.screenshots.map((item) => (
              <figure key={item.src} className="order-1 min-w-0 lg:order-2">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-gray-950 p-3 shadow-2xl shadow-brand-950/15 sm:p-5 lg:rounded-[2rem] lg:p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-accent1-600/25 blur-3xl"
                  />

                  <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl shadow-black/30 lg:rounded-2xl">
                    <div
                      className="flex min-h-11 items-center gap-3 border-b border-gray-200 bg-gray-50 px-3 sm:px-5"
                      aria-hidden="true"
                    >
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent1-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-accent2-400" />
                      </div>
                      <div className="mx-auto flex h-7 max-w-md flex-1 items-center justify-center rounded-md border border-gray-200 bg-white px-3">
                        <span className="truncate text-[0.6875rem] font-medium text-gray-500">
                          mopedo.netlify.app
                        </span>
                      </div>
                      <Monitor className="h-4 w-4 flex-none text-gray-400" />
                    </div>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 1440px) 760px, (min-width: 1024px) 58vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="outcome"
        aria-labelledby="outcome-heading"
        className="relative isolate scroll-mt-28 overflow-hidden border-b border-brand-100 bg-gray-950 py-16 text-white dark:border-brand-900/40 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_35%,rgba(124,58,237,0.28),transparent_35%),radial-gradient(circle_at_88%_80%,rgba(219,39,119,0.18),transparent_32%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(196,181,253,0.35)_1px,transparent_1px)] [background-size:28px_28px]"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16 xl:gap-24">
            <div className="max-w-xl lg:py-3">
              <p className="type-label text-brand-300">05 / What I delivered</p>
              <h2 id="outcome-heading" className="type-section mt-4 text-white">
                Delivered pages and verification.
              </h2>
              <div className="mt-8 flex">
                <ProjectLinks project={project} />
              </div>
            </div>

            <div className="border-y border-white/15">
              {detail.outcomes.map((outcome, index) => {
                const highlight = deliveryHighlights[index]
                const Icon = highlight?.Icon ?? Check

                return (
                  <article
                    key={outcome}
                    className="grid gap-5 border-b border-white/15 py-7 last:border-b-0 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6 sm:py-8"
                  >
                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start">
                      <span className="text-4xl font-bold leading-none text-white/20">0{index + 1}</span>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${highlight?.accent ?? "bg-brand-100 text-brand-700"}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <p className="type-label text-brand-300">{highlight?.label ?? "Delivered"}</p>
                      <h3 className="type-card mt-2 text-white">{highlight?.title ?? "Project outcome"}</h3>
                      <p className="type-small mt-3 text-gray-300">{outcome}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
