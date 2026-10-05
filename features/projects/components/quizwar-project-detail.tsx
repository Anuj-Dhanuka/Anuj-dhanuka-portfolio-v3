import Link from "next/link"
import { ArrowUpRight, Check, Code2 } from "lucide-react"
import type { ReactNode } from "react"
import { TrackedLink } from "@/components/analytics/tracked-link"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { analyticsEvents } from "@/config/analytics"
import { ProjectPhone } from "@/features/projects/components/project-phone"
import { QuizWarProjectHero } from "@/features/projects/components/quizwar-project-hero"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { ProjectLinks } from "@/features/projects/components/projects"
import type { ProjectEvidence } from "@/features/projects/data/projects"
import { projectEvidenceUrl, type CaseStudyProject } from "@/features/projects/project-details"

function EvidenceLink({ project, evidence }: { project: CaseStudyProject; evidence?: ProjectEvidence }) {
  const href = evidence && projectEvidenceUrl(project, evidence)
  if (!evidence || !href) return null
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      eventName={analyticsEvents.projectViewed}
      eventProperties={{ project: project.id, destination: "source", evidence: evidence.label }}
      aria-label={`Inspect ${evidence.label.toLowerCase()} source (opens in a new tab)`}
      className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:text-brand-200"
    >
      Inspect source <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </TrackedLink>
  )
}

function DetailSection({
  id,
  number,
  title,
  label = title,
  children,
  tinted = false,
}: {
  id: string
  number: string
  title: string
  label?: string
  children: ReactNode
  tinted?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-32 border-b border-brand-100 py-16 dark:border-brand-900/40 md:py-24 ${tinted ? "bg-brand-50/50 dark:bg-gray-900" : "bg-white dark:bg-gray-950"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="type-label text-brand-700 dark:text-brand-300">
          {number} / {label}
        </p>
        <h2 id={`${id}-heading`} className="type-section mt-4 copy-heading">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export function QuizWarProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  return (
    <article>
      <QuizWarProjectHero project={project} />
      <div className="border-b border-brand-100 bg-brand-50/50 dark:border-brand-900/40 dark:bg-gray-900">
        <dl className="container mx-auto grid gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["Project type", "Independent mobile application"],
            ["My responsibility", detail.responsibility],
            ["Native structure", "Android Gradle + iOS Xcode projects"],
            ["Core stack", "JavaScript · React Native CLI · Redux Toolkit · Firebase"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="type-label text-brand-700 dark:text-brand-300">{label}</dt>
              <dd className="type-small mt-2 copy-heading">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <PageSectionNav
        items={[
          { href: "#overview", label: "Overview & role" },
          { href: "#architecture", label: "Architecture" },
          { href: "#decisions", label: "Decisions" },
          { href: "#challenge", label: "Timed flow" },
          { href: "#interface", label: "Interface" },
          { href: "#outcome", label: "Delivery & source" },
        ]}
      />

      <DetailSection
        id="overview"
        number="01"
        label="Project overview"
        title="A quiz experience built around accounts and player progress"
      >
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <p className="type-body copy-body">{detail.context}</p>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 dark:border-brand-900/40 dark:bg-brand-950/20">
            <h3 className="type-card copy-heading">What I built</h3>
            <ul className="mt-5 space-y-4">
              {project.contributions.map((item) => (
                <li key={item} className="flex items-start gap-3 type-small copy-body">
                  <Check
                    className="mt-1 h-4 w-4 flex-none text-brand-600 dark:text-brand-300"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="architecture" number="02" title="Technical architecture" tinted>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {detail.implementation.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col rounded-2xl border border-brand-100 bg-white p-6 dark:border-brand-900/40 dark:bg-gray-950 ${index === detail.implementation.length - 1 ? "md:col-span-2" : ""}`}
            >
              <Code2 className="h-6 w-6 text-brand-600 dark:text-brand-300" aria-hidden="true" />
              <h3 className="type-card mt-4 copy-heading">{item.title}</h3>
              <p className="type-body mt-4 max-w-4xl copy-body">{item.description}</p>
              <div className="mt-auto">
                <EvidenceLink project={project} evidence={item.evidence} />
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/skills#core-skills"
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 font-semibold text-brand-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300"
        >
          Explore my React Native and frontend skills <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </DetailSection>

      <DetailSection id="decisions" number="03" title="Engineering decisions">
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {detail.decisions?.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-brand-100 border-t-4 border-t-brand-500 bg-brand-50/30 p-6 dark:border-brand-900/40 dark:border-t-brand-400 dark:bg-brand-950/20"
            >
              <h3 className="type-card copy-heading">{item.title}</h3>
              <p className="type-body mt-4 copy-body">{item.description}</p>
              <div className="mt-auto">
                <EvidenceLink project={project} evidence={item.evidence} />
              </div>
            </div>
          ))}
        </div>
      </DetailSection>

      {detail.challenge && (
        <DetailSection id="challenge" number="04" title="Coordinating the timed quiz" tinted>
          <h3 className="type-card-large mt-8 copy-heading">{detail.challenge.title}</h3>
          <dl className="mt-6 grid overflow-hidden rounded-2xl border border-brand-100 bg-white dark:border-brand-900/40 dark:bg-gray-950 md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <dt className="type-label text-brand-700 dark:text-brand-300">The coordination problem</dt>
              <dd className="type-body mt-4 copy-body">{detail.challenge.problem}</dd>
            </div>
            <div className="border-t border-brand-100 p-6 dark:border-brand-900/40 sm:p-8 md:border-l md:border-t-0">
              <dt className="type-label text-brand-700 dark:text-brand-300">Implementation approach</dt>
              <dd className="type-body mt-4 copy-body">{detail.challenge.approach}</dd>
              <EvidenceLink project={project} evidence={detail.challenge.evidence} />
            </div>
          </dl>
        </DetailSection>
      )}

      <DetailSection id="interface" number="05" title="The interface">
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {detail.screenshots.map((screen) => (
            <figure key={screen.src} className="mx-auto w-full max-w-[240px]">
              <ProjectPhone screenshot={screen} />
              <figcaption className="mt-5">
                <h3 className="type-card copy-heading">{screen.title}</h3>
                <p className="type-small mt-3 copy-body">{screen.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="outcome" number="06" title="What I delivered" tinted>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {detail.outcomes.map((item) => (
            <li
              key={item}
              className="type-body rounded-2xl border border-brand-100 bg-white p-6 copy-body dark:border-brand-900/40 dark:bg-gray-950"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 border-t border-brand-100 pt-8 dark:border-brand-900/40">
          <h3 className="type-card copy-heading">Inspect the public source</h3>
          <p className="type-small mt-4 max-w-3xl copy-body">
            The implementation links above are pinned to reviewed public revision{" "}
            <span className="font-mono">{detail.sourceRevision?.slice(0, 7)}</span>. The repository includes
            the application code and native project setup.
          </p>
          <div className="mt-6">
            <ProjectLinks project={project} sourcePrimary />
          </div>
        </div>
      </DetailSection>
      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
