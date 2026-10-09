import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  Code2,
  Database,
  FolderGit2,
  KeyRound,
  Layers3,
  ListOrdered,
  RefreshCcw,
  Send,
  Smartphone,
  Timer,
  Trophy,
  UserRound,
} from "lucide-react"
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

const outcomeCardDetails = [
  {
    label: "Application delivery",
    Icon: Smartphone,
    iconClassName: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    accentClassName: "from-brand-600 to-accent2-500",
  },
  {
    label: "Inspectable implementation",
    Icon: FolderGit2,
    iconClassName: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
    accentClassName: "from-accent1-600 to-brand-600",
  },
] as const

const interfaceStepLabels = ["Account access", "Content selection", "Timed gameplay"] as const

const decisionCardDetails = [
  { label: "State strategy", Icon: Database },
  { label: "Navigation model", Icon: Layers3 },
  { label: "Ranking logic", Icon: ListOrdered },
] as const

const timedFlowSteps = [
  {
    title: "Resolve the trigger",
    description: "An answer schedules a transition after one second; the ten-second timer can also advance.",
    Icon: Timer,
  },
  {
    title: "Reset the question state",
    description: "The transition clears answer feedback and restarts the countdown for the next question.",
    Icon: RefreshCcw,
  },
  {
    title: "Dispatch the summary",
    description: "At completion, the session sends game and performance updates into shared Redux state.",
    Icon: Send,
  },
  {
    title: "Persist the result",
    description: "ResultScreen writes performance and eligible score updates through Apiutils to Firestore.",
    Icon: Database,
  },
] as const

const overviewCardDetails = [
  { title: "Access & identity", Icon: KeyRound },
  { title: "Quiz experience", Icon: CircleHelp },
  { title: "Player performance", Icon: Trophy },
  { title: "Profile & preferences", Icon: UserRound },
] as const

const architectureCardDetails = [
  { Icon: Database, sourceLabel: "Inspect Redux store" },
  { Icon: Layers3, sourceLabel: "Inspect navigation" },
  { Icon: KeyRound, sourceLabel: "Inspect authentication" },
  { Icon: Timer, sourceLabel: "Inspect scoring" },
] as const

function EvidenceLink({
  project,
  evidence,
  inverse = false,
  label = "Inspect source",
}: {
  project: CaseStudyProject
  evidence?: ProjectEvidence
  inverse?: boolean
  label?: string
}) {
  const href = evidence && projectEvidenceUrl(project, evidence)
  if (!evidence || !href) return null
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      eventName={analyticsEvents.projectViewed}
      eventProperties={{ project: project.id, destination: "source", evidence: evidence.label }}
      aria-label={`${label === "Inspect source" ? `Inspect ${evidence.label.toLowerCase()} source` : label} (opens in a new tab)`}
      className={
        inverse
          ? "inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-brand-900 shadow-md hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
          : "mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:text-brand-200"
      }
    >
      {label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
  centeredHeader = false,
}: {
  id: string
  number: string
  title: string
  label?: string
  children: ReactNode
  tinted?: boolean
  centeredHeader?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-32 border-b border-brand-100 py-16 dark:border-brand-900/40 md:py-24 ${tinted ? "bg-brand-50/50 dark:bg-gray-900" : "bg-white dark:bg-gray-950"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className={`type-label text-brand-700 dark:text-brand-300 ${centeredHeader ? "text-center" : ""}`}>
          {number} / {label}
        </p>
        <h2
          id={`${id}-heading`}
          className={`type-section mt-4 copy-heading ${centeredHeader ? "text-center" : ""}`}
        >
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
        centeredHeader
      >
        <p className="type-body mx-auto mt-6 max-w-3xl text-center copy-body">{detail.context}</p>
        <div className="mt-10">
          <p className="type-label text-center text-brand-700 dark:text-brand-300">What I built</p>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {project.contributions.map((item, index) => {
              const card = overviewCardDetails[index]
              const Icon = card?.Icon ?? Check

              return (
                <li
                  key={item}
                  className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_14px_36px_rgba(76,29,149,0.07)] dark:border-brand-900/40 dark:bg-gray-950"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-500"
                    aria-hidden="true"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="type-card mt-5 copy-heading">{card?.title ?? "Project capability"}</h3>
                  <p className="type-small mt-3 copy-body">{item}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </DetailSection>

      <DetailSection id="architecture" number="02" title="Technical architecture" tinted centeredHeader>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {detail.implementation.map((item, index) => {
            const card = architectureCardDetails[index]
            const Icon = card?.Icon ?? Code2

            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 dark:border-brand-900/40 dark:bg-gray-950"
              >
                <Icon className="h-6 w-6 text-brand-600 dark:text-brand-300" aria-hidden="true" />
                <h3 className="type-card mt-4 copy-heading">{item.title}</h3>
                <div className="mt-4 space-y-3">
                  {item.description.split("\n\n").map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraph}
                      className={`type-body ${paragraphIndex === 0 ? "font-medium copy-heading" : "copy-body"}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-auto">
                  <EvidenceLink project={project} evidence={item.evidence} label={card?.sourceLabel} />
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/skills#core-skills"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-center font-semibold text-brand-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300"
          >
            Explore my React Native and frontend skills
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </DetailSection>

      <DetailSection id="decisions" number="03" title="Engineering decisions" centeredHeader>
        <p className="type-body mx-auto mt-5 max-w-2xl text-center copy-body">
          Three decisions shaped how QuizWar stores progress, organizes navigation and ranks player
          performance.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {detail.decisions?.map((item, index) => {
            const card = decisionCardDetails[index]
            const Icon = card?.Icon ?? Code2

            return (
              <article
                key={item.title}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_40px_rgba(76,29,149,0.08)] dark:border-brand-900/40 dark:bg-gray-950 sm:p-8"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-500"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand-300 dark:text-brand-700">
                    0{index + 1}
                  </span>
                </div>
                <p className="type-label mt-6 text-brand-700 dark:text-brand-300">
                  {card?.label ?? "Engineering decision"}
                </p>
                <h3 className="type-card mt-3 copy-heading">{item.title}</h3>
                <p className="type-body mt-4 copy-body">{item.description}</p>
                <div className="mt-auto">
                  <EvidenceLink project={project} evidence={item.evidence} />
                </div>
              </article>
            )
          })}
        </div>
      </DetailSection>

      {detail.challenge && (
        <DetailSection id="challenge" number="04" title="Coordinating the timed quiz" tinted centeredHeader>
          <h3 className="type-card-large mx-auto mt-5 max-w-3xl text-center copy-heading">
            {detail.challenge.title}
          </h3>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-14">
            <div>
              <div className="rounded-xl border border-accent1-100 bg-accent1-50/60 p-5 dark:border-accent1-900/40 dark:bg-accent1-950/15 sm:flex sm:items-start sm:gap-5 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent1-700 shadow-sm dark:bg-gray-950 dark:text-accent1-300">
                  <Timer className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="mt-4 sm:mt-0">
                  <p className="type-label text-accent1-700 dark:text-accent1-300">
                    The coordination problem
                  </p>
                  <p className="type-body mt-3 copy-body">{detail.challenge.problem}</p>
                </div>
              </div>

              <p className="type-label mt-7 text-brand-700 dark:text-brand-300">
                How the timed session resolves
              </p>
              <ol className="mt-4 space-y-3">
                {timedFlowSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex items-start gap-4 rounded-xl border border-brand-100 bg-white p-4 dark:border-brand-900/40 dark:bg-gray-950"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-md shadow-brand-500/15">
                      <step.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-bold copy-heading">{step.title}</h4>
                        <span className="font-mono text-sm font-semibold text-brand-400 dark:text-brand-600">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="type-small mt-1 copy-body">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-xl bg-brand-950 px-5 py-5 text-center sm:flex-row sm:text-left dark:bg-black/30">
                <div>
                  <p className="type-label text-brand-200">State handoff</p>
                  <p className="type-small mt-2 text-gray-200">
                    Screen-local state <span aria-hidden="true">→</span> Redux state{" "}
                    <span aria-hidden="true">→</span> Firestore persistence
                  </p>
                </div>
                <EvidenceLink project={project} evidence={detail.challenge.evidence} inverse />
              </div>
            </div>

            <figure className="order-first mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-xl shadow-brand-950/10 dark:border-brand-900/40 dark:bg-gray-950 lg:order-last">
              <div className="h-1 bg-gradient-to-r from-brand-600 to-accent1-600" aria-hidden="true" />
              <Image
                src="/quizwar-timed-workspace-v2.webp"
                alt="Illustrated development workspace with a laptop, smartphone timer interface and physical stopwatch"
                width={1000}
                height={1500}
                sizes="(min-width: 1536px) 520px, (min-width: 1024px) 40vw, (min-width: 640px) 576px, calc(100vw - 32px)"
                className="h-auto w-full"
              />
              <figcaption className="px-5 py-4 type-caption copy-body">
                Concept illustration · Mobile development and timed gameplay
              </figcaption>
            </figure>
          </div>
        </DetailSection>
      )}

      <DetailSection id="interface" number="05" title="The interface" centeredHeader>
        <p className="type-body mx-auto mt-5 max-w-2xl text-center copy-body">
          Three screens trace the core player journey from account access to category selection and timed
          gameplay.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {detail.screenshots.map((screen, index) => (
            <figure
              key={screen.src}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-[0_18px_50px_rgba(76,29,149,0.08)] dark:border-brand-900/40 dark:bg-gray-950"
            >
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent1-50 p-6 dark:from-brand-950/35 dark:via-gray-950 dark:to-accent1-950/20 sm:p-8">
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent1-300/25 blur-3xl dark:bg-accent1-600/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-600/15"
                  aria-hidden="true"
                />
                <div className="relative w-full max-w-[210px]">
                  <ProjectPhone screenshot={screen} />
                </div>
              </div>
              <figcaption className="flex flex-1 flex-col border-t border-brand-100 p-6 dark:border-brand-900/40">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-brand-500 dark:text-brand-300">
                    0{index + 1}
                  </span>
                  <span className="h-px w-8 bg-brand-200 dark:bg-brand-800" aria-hidden="true" />
                  <span className="type-label text-brand-700 dark:text-brand-300">
                    {interfaceStepLabels[index] ?? "Application screen"}
                  </span>
                </div>
                <h3 className="type-card mt-4 copy-heading">{screen.title}</h3>
                <p className="type-small mt-3 copy-body">{screen.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="outcome" number="06" title="What I delivered" tinted centeredHeader>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {detail.outcomes.map((item, index) => {
            const card = outcomeCardDetails[index]
            const Icon = card?.Icon ?? Check

            return (
              <li
                key={item}
                className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_40px_rgba(76,29,149,0.08)] dark:border-brand-900/40 dark:bg-gray-950 sm:p-8"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card?.accentClassName ?? "from-brand-600 to-accent1-600"}`}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${card?.iconClassName ?? "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300"}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand-300 dark:text-brand-700">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="type-label mt-6 text-brand-700 dark:text-brand-300">
                  {card?.label ?? "Project outcome"}
                </h3>
                <p className="type-body mt-3 copy-body">{item}</p>
              </li>
            )
          })}
        </ul>
        <div className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-950 via-brand-900 to-accent1-950 px-6 py-8 shadow-xl shadow-brand-950/15 sm:px-8 sm:py-10 lg:px-10">
          <div
            className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent1-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-brand-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="type-label text-brand-200">Public repository</p>
              </div>
              <h3 className="type-card-large mt-5 text-white">Inspect the public source</h3>
              <p className="type-body mt-4 text-gray-200">
                The implementation links above are pinned to reviewed public revision{" "}
                <span className="whitespace-nowrap rounded-md border border-white/15 bg-white/10 px-2 py-1 font-mono text-sm font-semibold text-white">
                  {detail.sourceRevision?.slice(0, 7)}
                </span>
                . The repository includes the application code and native project setup.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <ProjectLinks project={project} sourcePrimary />
            </div>
          </div>
        </div>
      </DetailSection>
      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
