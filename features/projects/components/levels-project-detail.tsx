import type { ReactNode } from "react"
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  Code2,
  Layers3,
  ListChecks,
  MapPin,
  Smartphone,
} from "lucide-react"
import { TrackedLink } from "@/components/analytics/tracked-link"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { analyticsEvents } from "@/config/analytics"
import { experienceRoles } from "@/features/experience/data/experience"
import { LevelsPhone } from "@/features/projects/components/levels-phone"
import { LevelsProjectHero } from "@/features/projects/components/levels-project-hero"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { ProjectLinks } from "@/features/projects/components/projects"
import type { CaseStudyProject } from "@/features/projects/project-details"
import styles from "./levels-project.module.css"

const contributionLabels = [
  { title: "Native mobile screens", category: "Mobile interface" },
  { title: "Category selection & quiz flows", category: "Navigation & UX" },
  { title: "Dynamic question loading", category: "Dynamic content" },
  { title: "Reusable screens & navigation", category: "Component design" },
  { title: "Ahead-of-schedule delivery", category: "Project delivery" },
  { title: "Additional feature scope", category: "Beyond requirements" },
] as const
const implementationIcons = [ListChecks, Code2, Layers3]
const outcomeLabels = ["Ahead-of-schedule delivery", "Additional features", "Screenshots & source"]
const contributionAccents = [
  "from-brand-600 to-accent1-500",
  "from-accent1-500 to-brand-500",
  "from-brand-500 to-accent1-600",
  "from-accent1-600 to-brand-600",
  "from-brand-600 to-accent1-500",
  "from-brand-500 to-accent1-500",
] as const
const sectionClass = "scroll-mt-28!"

function SectionHeading({
  id,
  label,
  children,
  description,
  inverse = false,
}: {
  id: string
  label: string
  children: ReactNode
  description?: string
  inverse?: boolean
}) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
      <p
        className={`type-small mx-auto inline-flex w-fit items-center rounded-full px-4 py-1.5 font-medium shadow-lg ${
          inverse
            ? "border border-brand-400/20 bg-brand-500/10 text-brand-200 shadow-black/10"
            : "bg-gradient-to-r from-brand-100 to-accent1-100 text-brand-800 shadow-brand-500/10 dark:from-brand-900/50 dark:to-accent1-900/40 dark:text-brand-200"
        }`}
      >
        {label}
      </p>
      <h2
        id={id}
        className={`type-section mx-auto mt-4 max-w-4xl ${
          inverse
            ? "text-white"
            : "bg-gradient-to-r from-brand-700 via-accent2-600 to-accent1-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-accent2-400 dark:to-accent1-400"
        }`}
      >
        {children}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand-600 via-accent2-500 to-accent1-600 shadow-lg shadow-brand-500/20"
      />
      {description && (
        <p className={`type-body mx-auto mt-5 max-w-3xl ${inverse ? "text-gray-300" : "copy-body"}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function LevelsProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const internship = experienceRoles.find((role) => role.id === "third-eye-lab")
  const internshipFacts = internship
    ? [
        { label: "Location", value: `${internship.location} · ${internship.workMode}`, Icon: MapPin },
        { label: "Duration", value: internship.duration, Icon: CalendarDays },
        {
          label: "Technology and interface focus",
          value: internship.technologies.join(" · "),
          Icon: Code2,
          wide: true,
        },
      ]
    : []

  return (
    <article className={styles.caseStudy}>
      <LevelsProjectHero project={project} />
      <PageSectionNav
        items={[
          { href: "#context", label: "01. Context" },
          { href: "#contribution", label: "02. Contributions" },
          { href: "#implementation", label: "03. Implementation" },
          { href: "#screenshots", label: "04. App screens" },
          { href: "#outcome", label: "05. Deliverables" },
          { href: "#related", label: "06. Related work" },
        ]}
      />
      <div className="bg-white dark:bg-gray-950">
        <section
          id="context"
          aria-labelledby="context-heading"
          className={`${sectionClass} relative isolate overflow-hidden border-b border-brand-100 bg-gradient-to-b from-white via-brand-50/55 to-accent1-50/35 py-16 dark:border-brand-900/40 dark:from-gray-950 dark:via-brand-950/20 dark:to-accent1-950/15 md:py-24`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-12 -z-10 h-72 w-72 rounded-full bg-brand-300/12 blur-3xl dark:bg-brand-600/8"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent1-300/12 blur-3xl dark:bg-accent1-600/8"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
              <p className="type-small inline-flex rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 font-medium text-brand-700 dark:border-brand-800/50 dark:bg-brand-950/25 dark:text-brand-200">
                01 / Context
              </p>
              <h2 id="context-heading" className="type-section mx-auto mt-5 max-w-3xl copy-heading">
                Engineering <span className="gradient-text">mobile foundations</span> at 3rd Eye Lab
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600"
              />
              <p className="type-body mx-auto mt-5 max-w-2xl copy-body">
                Applying a web-development foundation to React Native mobile interfaces.
              </p>
            </div>

            <article className="relative isolate overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.07)] dark:border-brand-900/50 dark:bg-gray-900">
              <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="type-label text-accent1-600 dark:text-accent1-300">Project overview</p>
                  <p className="type-body mt-4 max-w-2xl copy-body">{detail.context}</p>

                  <dl className="mt-7 rounded-xl bg-brand-50/70 p-5 dark:bg-brand-950/25">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-brand-600 shadow-sm dark:bg-gray-950/60 dark:text-brand-300">
                        <Smartphone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="type-label text-brand-700 dark:text-brand-300">My responsibility</dt>
                        <dd className="type-small mt-2 font-semibold copy-heading">
                          {detail.responsibility}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {internship && (
                  <aside
                    aria-label="Internship details"
                    className="border-t border-brand-100 bg-brand-50/55 p-6 dark:border-brand-900/50 dark:bg-brand-950/15 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-brand-100 pb-6 dark:border-brand-900/50">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-brand-100 bg-white text-brand-600 shadow-sm dark:border-brand-800/50 dark:bg-brand-950/30 dark:text-brand-300">
                          <Building2 className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="type-label text-brand-700 dark:text-brand-300">Internship brief</p>
                          <h3 className="type-card mt-1 copy-heading">{internship.company}</h3>
                        </div>
                      </div>
                      <span className="type-caption rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 font-semibold text-brand-700 shadow-sm dark:border-brand-700/50 dark:bg-brand-950/40 dark:text-brand-200">
                        {internship.type}
                      </span>
                    </div>
                    <dl className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                      {internshipFacts.map(({ label, value, Icon, wide }) => (
                        <div key={label} className={`flex items-start gap-3 ${wide ? "sm:col-span-2" : ""}`}>
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-brand-100 bg-white text-brand-600 shadow-sm dark:border-brand-800/50 dark:bg-brand-950/40 dark:text-brand-300">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <dt className="type-label text-brand-700 dark:text-brand-300">{label}</dt>
                            <dd className="type-small mt-1 font-semibold copy-heading">{value}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </aside>
                )}
              </div>
            </article>
            {detail.experienceHref && (
              <div className="mt-7 flex justify-center">
                <LinkButton
                  href={detail.experienceHref}
                  variant="line"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  View internship experience
                </LinkButton>
              </div>
            )}
          </div>
        </section>

        <section
          id="contribution"
          aria-labelledby="contribution-heading"
          className={`${sectionClass} relative isolate overflow-hidden bg-white py-16 dark:bg-gray-950 md:py-24`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(219,39,119,0.05)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-10"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="contribution-heading"
              label="02 / Ownership"
              description="Mobile screens, quiz flows and project delivery."
            >
              My contribution & key deliverables
            </SectionHeading>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {project.contributions.map((contribution, index) => (
                <li
                  key={contribution}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-brand-100 bg-white/95 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_45px_rgba(124,58,237,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_55px_rgba(124,58,237,0.12)] motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-900/50 dark:bg-gray-900/90 sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${contributionAccents[index] ?? contributionAccents[0]}`}
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className={`type-small flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-br font-bold text-white shadow-lg shadow-brand-500/15 ${contributionAccents[index] ?? contributionAccents[0]}`}
                    >
                      0{index + 1}
                    </span>
                    <span className="type-caption text-right font-semibold text-brand-700 dark:text-brand-300">
                      {contributionLabels[index]?.category ?? "Contribution"}
                    </span>
                  </div>
                  <h3 className="type-card mt-5 copy-heading">
                    {contributionLabels[index]?.title ?? "Project contribution"}
                  </h3>
                  <p className="type-small mt-3 copy-body">{contribution}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="implementation"
          aria-labelledby="implementation-heading"
          className={`${sectionClass} relative isolate overflow-hidden bg-gray-950 py-16 text-white md:py-24`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(139,92,246,0.22),transparent_34%),radial-gradient(circle_at_90%_85%,rgba(236,72,153,0.16),transparent_32%)]"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="implementation-heading"
              label="03 / Architecture & code"
              description="React Native and JavaScript implementation, with excerpts from the public source."
              inverse
            >
              Technical implementation deep-dive
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {detail.implementation.map((item, index) => {
                const Icon = implementationIcons[index] ?? Code2
                const source = item.source
                return (
                  <div
                    key={item.title}
                    className="group flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/[0.075] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 md:last:col-span-2 lg:last:col-span-1"
                  >
                    <div className="flex items-center justify-between gap-4 text-brand-300">
                      <p className="type-label">Detail 0{index + 1}</p>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="type-card mt-5 text-white">{item.title}</h3>
                    <p className="type-small mt-3 mb-6 text-gray-300">{item.description}</p>
                    {source && project.githubLink && (
                      <div className="mt-auto">
                        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
                          <p className="type-caption border-b border-white/10 px-4 py-3 font-medium text-gray-300">
                            Source excerpt · JavaScript
                          </p>
                          <pre
                            tabIndex={0}
                            aria-label={`${item.title} source excerpt`}
                            className="min-h-36 overflow-x-auto p-4 text-xs leading-relaxed text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400"
                          >
                            <code>{source.code}</code>
                          </pre>
                        </div>
                        <TrackedLink
                          href={`${project.githubLink}/blob/${source.revision}/${source.file}#L${source.startLine}-L${source.endLine}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          eventName={analyticsEvents.projectViewed}
                          eventProperties={{ project: project.id, destination: "source", file: source.file }}
                          aria-label={`Inspect ${source.file} source excerpt on GitHub (opens in a new tab)`}
                          className="type-caption mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-300 underline underline-offset-4 hover:text-accent1-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                        >
                          <span className="break-all">{source.file.split("/").slice(-2).join("/")}</span>
                          <ArrowUpRight className="h-4 w-4 flex-none" aria-hidden="true" />
                        </TrackedLink>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <LinkButton
                href="/skills#core-skills"
                variant="outlineInverse"
                className="min-h-11"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Explore my frontend and mobile skills
              </LinkButton>
            </div>
          </div>
        </section>

        <section
          id="screenshots"
          aria-labelledby="screenshots-heading"
          className={`${sectionClass} relative isolate overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/65 via-white to-accent1-50/35 py-16 dark:border-brand-900/40 dark:from-brand-950/20 dark:via-gray-950 dark:to-accent1-950/10 md:py-24`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="screenshots-heading"
              label="04 / The interface"
              description="The login, category-selection and quiz screens from Levels App."
            >
              Mobile experience & core workflows
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {detail.screenshots.map((screenshot, index) => (
                <figure
                  key={screenshot.src}
                  className="group min-w-0 overflow-hidden rounded-xl border border-brand-100 bg-white/95 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_55px_rgba(124,58,237,0.09)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_28px_70px_rgba(124,58,237,0.15)] motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-900/50 dark:bg-gray-900/90 lg:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="mb-5 flex items-center justify-between gap-3 text-brand-700 dark:text-brand-300"
                  >
                    <span className="type-label">Screen 0{index + 1}</span>
                    <Smartphone className="h-4 w-4 flex-none" />
                  </div>
                  <div className="mx-auto max-w-[260px] transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none">
                    <LevelsPhone screenshot={screenshot} />
                  </div>
                  <figcaption className="mt-6 text-center">
                    <h3 className="type-card copy-heading">{screenshot.title}</h3>
                    <p className="type-small mt-3 copy-body">{screenshot.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <ProjectLinks project={project} />
            </div>
          </div>
        </section>

        <section
          id="outcome"
          aria-labelledby="outcome-heading"
          className={`${sectionClass} relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-accent1-900 py-16 text-white md:py-20`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgba(244,114,182,0.28),transparent_38%)]"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="type-small inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-medium text-brand-100 shadow-lg shadow-black/10">
              05 / Deliverables
            </p>
            <h2 id="outcome-heading" className="type-section mt-4 max-w-3xl text-white">
              Project deliverables & outcomes
            </h2>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-accent1-400"
            />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {detail.outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className="rounded-xl border border-white/10 bg-black/15 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black/25 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-100">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="type-card mt-4 text-white">{outcomeLabels[index] ?? "Project outcome"}</h3>
                  <p className="type-small mt-3 text-gray-200">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
