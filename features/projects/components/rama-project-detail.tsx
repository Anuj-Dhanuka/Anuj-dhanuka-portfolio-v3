import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Blocks,
  Check,
  CircleHelp,
  Compass,
  ExternalLink,
  FileText,
  FolderOpen,
  Handshake,
  LayoutGrid,
  LayoutTemplate,
  Layers3,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { TrackedLink } from "@/components/analytics/tracked-link"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { analyticsEvents } from "@/config/analytics"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { RamaProjectHero } from "@/features/projects/components/rama-project-hero"
import { ResponsiveShowcase } from "@/features/projects/components/responsive-showcase"
import type { CaseStudyProject } from "@/features/projects/project-details"

// What the college brought to the project; the homepage built from it was my work.
const collegeContent = [
  { title: "Courses and fees", description: "Course list, durations and fee ranges", Icon: FolderOpen },
  { title: "Credentials", description: "Certification and registration details", Icon: BadgeCheck },
  { title: "Students", description: "Results, testimonials and photos", Icon: Users },
]

const ownershipAreas = [
  {
    title: "Experience design",
    Icon: LayoutTemplate,
    tone: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    description:
      "I planned the homepage structure, the order of its sections, the placement of its calls to action and its visual layout.",
  },
  {
    title: "Content structuring",
    Icon: FileText,
    tone: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
    description:
      "I turned the college's raw information into consistent headings, course cards, trust points and FAQ answers, using ChatGPT for formatting.",
  },
  {
    title: "Build and responsive layouts",
    Icon: MonitorSmartphone,
    tone: "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
    description:
      "I built the homepage in Elementor on the college's WordPress site and adapted its layout for tablets and phones.",
  },
]

const journey = [
  ["Trust", "Is this institute credible?"],
  ["Proof", "Do students succeed here?"],
  ["Explore", "Which course fits me?"],
  ["Reassure", "Why choose this college?"],
  ["Clarify", "What about fees and eligibility?"],
  ["Enquire", "How do I get in touch?"],
]

// Homepage palette from the live site's Elementor page styles, shown as design evidence.
const brandColors = [
  { name: "Navy", hex: "#1E2D5F", role: "Page frame" },
  { name: "Gold", hex: "#E6A817", role: "Credentials and actions" },
  { name: "Slate", hex: "#64748B", role: "Supporting text" },
]

const courseCategories = [
  "Computer & IT",
  "Electrical & Electronics",
  "Mechanical & Engineering",
  "Safety & Management",
  "Design & Creative",
  "Office & Business",
]

const decisionIcons = [Palette, LayoutGrid, ShieldCheck, CircleHelp]

// Workflow order, left to right: AI-assisted preparation first, then my Elementor build.
const workflowSteps = [
  {
    Icon: Compass,
    badge: "AI-assisted · Explore",
    card: "border border-white/10 bg-white/[0.04] backdrop-blur-sm",
    icon: "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/20",
    label: "text-brand-300",
    body: "text-gray-300",
  },
  {
    Icon: Sparkles,
    badge: "AI-assisted · Structure",
    card: "border border-white/10 bg-white/[0.04] backdrop-blur-sm",
    icon: "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/20",
    label: "text-brand-300",
    body: "text-gray-300",
  },
  {
    Icon: Blocks,
    badge: "Build",
    card: "border border-accent1-400/20 bg-gradient-to-br from-brand-500/15 to-accent1-500/15 backdrop-blur-sm",
    icon: "bg-accent1-500/20 text-accent1-200 ring-1 ring-accent1-400/20",
    label: "text-accent1-300",
    body: "text-gray-300",
  },
  {
    Icon: MonitorSmartphone,
    badge: "Adapt",
    card: "bg-gradient-to-br from-brand-600 to-accent1-600 shadow-xl shadow-accent1-500/20 ring-1 ring-white/15",
    icon: "bg-white/15 text-white ring-1 ring-white/25",
    label: "text-white/80",
    body: "text-white/90",
  },
]

// The judgement calls that stayed with me while AI tools sped up exploration and formatting.
const judgementCalls = ["Which ideas to keep", "Section and CTA order", "How it adapts to phones"]

const buildTools = ["WordPress", "Elementor", "v0", "ChatGPT"]

const responsiveViews = {
  desktop: {
    category: "Desktop · 1440px",
    title: "The whole catalogue at a glance.",
    description:
      "On wide screens every category is visible at once, and course cards sit side by side so visitors can compare them quickly.",
    points: [
      "All six category tabs sit in one row",
      "Course cards form a three-column grid",
      "Every card shows code, duration, level and certification",
      "The Explore Our Courses action sits beside the heading",
    ],
    tags: ["Multi-column grid", "Tabbed categories"],
    chip: "3 columns",
  },
  mobile: {
    category: "Mobile · 390px",
    title: "One readable column on phones.",
    description:
      "On phones the same section keeps its content and order, and reflows into a single column without a separate mobile page.",
    points: [
      "Category tabs wrap onto several rows",
      "Course cards stack at full width",
      "The section action moves below the introduction",
      "Course Details buttons span the card and are easy to tap",
    ],
    tags: ["Single column", "Touch-friendly actions"],
    chip: "1 column",
  },
}

const deliverableGroups = [
  {
    title: "Design",
    Icon: LayoutTemplate,
    tone: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    items: ["Homepage structure", "Visual layout", "Call-to-action placement"],
  },
  {
    title: "Content",
    Icon: FileText,
    tone: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
    items: ["Course card copy", "Trust and impact sections", "FAQ answers"],
  },
  {
    title: "Build",
    Icon: Layers3,
    tone: "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
    items: ["Elementor homepage", "Tabbed course catalogue", "Tablet and mobile layouts"],
  },
]

// Arrow between workflow steps: points down when stacked, right when the steps sit in a row.
function StepConnector() {
  return (
    <span
      aria-hidden="true"
      className="absolute -bottom-4 left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 text-white shadow-md ring-4 ring-gray-950 md:hidden xl:-right-[1.1rem] xl:bottom-auto xl:left-auto xl:top-1/2 xl:flex xl:-translate-y-1/2 xl:translate-x-0"
    >
      <ArrowDown className="h-4 w-4 xl:-rotate-90" />
    </span>
  )
}

function WebsiteLink({ project }: { project: CaseStudyProject }) {
  if (!project.liveLink) return null

  return (
    <TrackedLink
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      eventName={analyticsEvents.projectViewed}
      eventProperties={{ project: project.id, destination: "live" }}
      aria-label={`Visit Website for ${project.title} (opens in a new tab)`}
      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 shadow-lg shadow-brand-950/25 transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700 sm:w-auto sm:self-start"
    >
      Visit Website
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </TrackedLink>
  )
}

export function RamaProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const [, courses, mobileCourses, mobileCourseList, trust, mobileTrust, mobileEnquiry] = detail.screenshots

  return (
    <article>
      <RamaProjectHero project={project} />

      <PageSectionNav
        items={[
          { href: "#overview", label: "Context & role" },
          { href: "#journey", label: "Visitor journey" },
          { href: "#decisions", label: "Design decisions" },
          { href: "#workflow", label: "How I worked" },
          { href: "#responsive", label: "Responsive design" },
          { href: "#interface", label: "Interface" },
          { href: "#outcome", label: "Delivery & outcome" },
        ]}
      />

      <section
        id="overview"
        aria-labelledby="overview-heading"
        className="relative isolate scroll-mt-28 overflow-hidden border-y border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
      >
        {/* Same backdrop as the homepage technology stack: soft brand glows, a fine grid and a watermark word. */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.085),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(219,39,119,0.075),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_50%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(236,72,153,0.13),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_50%,#111827_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.36] dark:opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 select-none text-[17vw] font-black leading-none tracking-normal text-purple-900/[0.035] dark:text-white/[0.025]"
          aria-hidden="true"
        >
          CONTEXT
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl md:text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">01 / Project context</p>
            <h2 id="overview-heading" className="type-section mt-4 copy-heading">
              A homepage that helps students and parents choose with confidence.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500 md:mx-auto"
              aria-hidden="true"
            />
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">{detail.context}</p>
          </div>

          {/* The ownership boundary is the key fact: the college's content came through a friend, the homepage was mine. */}
          <div className="mt-10 grid gap-4 md:gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="type-card copy-heading">Provided by the college</h3>
                <span className="type-caption rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  The content
                </span>
              </div>
              <dl className="mt-5 divide-y divide-gray-200/80 border-t border-gray-200/80 dark:divide-gray-800 dark:border-gray-800">
                {collegeContent.map(({ title, description, Icon }) => (
                  // dt/dd sit directly in the group div (valid <dl>); the icon lives inside <dt>, placed where it was.
                  <div key={title} className="relative py-5 pl-15">
                    <dt className="type-small font-semibold copy-heading">
                      <span
                        className="absolute left-0 top-5 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      {title}
                    </dt>
                    <dd className="type-small mt-1 copy-body">{description}</dd>
                  </div>
                ))}
              </dl>
              <p className="type-small mt-auto flex items-start gap-3 rounded-xl bg-brand-50 p-4 text-brand-900 dark:bg-brand-950/40 dark:text-brand-100">
                <ArrowRight className="mt-1 h-4 w-4 flex-none text-brand-600 lg:hidden" aria-hidden="true" />
                <span>
                  This material reached me through my friend, who managed the college relationship. How it was
                  organised, designed and built into the homepage was my responsibility.
                </span>
                <ArrowRight
                  className="mt-1 hidden h-4 w-4 flex-none text-brand-600 lg:block"
                  aria-hidden="true"
                />
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-brand-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 backdrop-blur-sm dark:border-brand-800/50 dark:bg-gray-900/85 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="type-card copy-heading">Owned by me</h3>
                <span className="type-caption rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-semibold text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300">
                  The homepage
                </span>
              </div>
              <ul className="mt-5 divide-y divide-gray-200/80 border-t border-gray-200/80 dark:divide-gray-800 dark:border-gray-800">
                {ownershipAreas.map(({ title, description, Icon, tone }) => (
                  <li key={title} className="flex gap-4 py-5">
                    <span
                      className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${tone}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="type-small font-semibold copy-heading">{title}</h4>
                      <p className="type-small mt-1 copy-body">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="type-caption mt-auto border-t border-gray-200/80 pt-4 copy-body dark:border-gray-800">
                Outside my scope: the other pages, student and branch logins, the results portal and hosting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="journey"
        aria-labelledby="journey-heading"
        className="scroll-mt-32 border-b border-brand-100 bg-brand-50/45 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl md:text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">02 / Visitor journey</p>
            <h2 id="journey-heading" className="type-section mt-4 copy-heading">
              One page from first impression to enquiry
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500 md:mx-auto"
              aria-hidden="true"
            />
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              I ordered the sections around the questions a prospective student or parent asks, so each one is
              answered before they are asked to get in touch. Course and contact actions repeat at key points
              along the way.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map(([label, question], index) => (
              <li
                key={label}
                className="relative rounded-2xl border border-brand-100 bg-white p-5 dark:border-brand-900/40 dark:bg-gray-950"
              >
                <span className="type-caption font-semibold text-brand-700 dark:text-brand-300">
                  0{index + 1} / {label}
                </span>
                <p className="type-small mt-3 copy-heading">{question}</p>
                {index < journey.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-brand-600 p-1 text-white lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="decisions"
        aria-labelledby="decisions-heading"
        className="scroll-mt-28 bg-white py-16 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl md:text-center">
            <p className="type-label text-brand-700 dark:text-brand-300">03 / Design decisions</p>
            <h2 id="decisions-heading" className="type-section mt-4 copy-heading">
              Practical choices shaped around how families decide.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500 md:mx-auto"
              aria-hidden="true"
            />
          </div>

          {detail.decisions && (
            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
              {detail.decisions.map((decision, index) => {
                const Icon = decisionIcons[index] ?? Check
                const iconTone =
                  index % 2 === 0
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300"
                    : "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300"

                return (
                  <article
                    key={decision.title}
                    className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 dark:border-gray-800 dark:bg-gray-900/85 sm:p-6 lg:p-8"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600"
                      aria-hidden="true"
                    />
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${iconTone}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="type-card min-w-0 pt-1 copy-heading">{decision.title}</h3>
                    </div>
                    <p className="type-small mt-5 copy-body">{decision.description}</p>

                    {/* The visual-identity decision shows the palette it describes. */}
                    {index === 0 && (
                      <ul
                        aria-label="Website color palette"
                        className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-gray-200/80 pt-5 dark:border-gray-800"
                      >
                        {brandColors.map((color) => (
                          <li key={color.hex} className="flex items-center gap-2.5">
                            <span
                              className="h-7 w-7 flex-none rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/20"
                              style={{ backgroundColor: color.hex }}
                              aria-hidden="true"
                            />
                            <span className="type-caption">
                              <span className="block font-semibold copy-heading">{color.name}</span>
                              <span className="block font-mono text-gray-500 dark:text-gray-400">
                                {color.hex}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* The catalogue decision lists the six categories visitors switch between. */}
                    {index === 1 && (
                      <ul
                        aria-label="Course categories"
                        className="mt-5 flex flex-wrap gap-1.5 border-t border-gray-200/80 pt-5 dark:border-gray-800"
                      >
                        {courseCategories.map((category) => (
                          <li
                            key={category}
                            className="type-caption rounded-full border border-accent1-100 bg-accent1-50 px-2.5 py-0.5 font-semibold text-accent1-700 dark:border-accent1-800/60 dark:bg-accent1-950/30 dark:text-accent1-300"
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section
        id="workflow"
        aria-labelledby="workflow-heading"
        className="relative isolate scroll-mt-28 overflow-hidden bg-gray-950 py-16 text-white md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/60 via-transparent to-accent1-950/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgba(196,181,253,0.6)_1px,transparent_1px)] [background-size:28px_28px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-2/3 -z-10 h-80 w-[60rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-600/20 to-accent1-600/20 blur-3xl"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              04 / How I worked
            </p>
            <h2 id="workflow-heading" className="type-section text-white">
              AI-assisted where it saved time, hands-on where it mattered.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 text-gray-300">
              I used v0 and ChatGPT to move faster through exploration and content formatting. The homepage
              itself was designed and built by hand in Elementor.
            </p>
          </div>

          <ol
            className="mt-12 grid gap-6 md:grid-cols-2 md:gap-5 xl:grid-cols-5"
            aria-label="Workflow steps, from the college's content to the responsive homepage"
          >
            <li className="relative flex flex-col rounded-2xl border border-dashed border-white/20 p-5 sm:p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gray-300">
                <FolderOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="type-caption mt-5 font-semibold text-gray-400">Provided</p>
              <h3 className="type-card mt-1 text-white">The college&apos;s content</h3>
              <p className="type-small mt-3 text-gray-400">
                Courses, credentials, results and student stories, passed to me as raw information by my
                friend.
              </p>
              <StepConnector />
            </li>

            {detail.implementation.map((item, index) => {
              const step = workflowSteps[index] ?? workflowSteps[0]
              const isLast = index === detail.implementation.length - 1

              return (
                <li key={item.title} className={`relative flex flex-col rounded-2xl p-5 sm:p-6 ${step.card}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.icon}`}>
                    <step.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className={`type-caption mt-5 font-semibold ${step.label}`}>{step.badge}</p>
                  <h3 className="type-card mt-1 text-white">{item.title}</h3>
                  <p className={`type-small mt-3 ${step.body}`}>{item.description}</p>
                  {!isLast && <StepConnector />}
                </li>
              )
            })}
          </ol>

          {/* Both columns share label-then-row structure, so the points sit on the same line as the tool chips. */}
          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <p className="type-small font-semibold text-white">The decisions stayed with me</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3 sm:gap-x-6">
                {judgementCalls.map((call) => (
                  <li key={call} className="type-small flex items-center gap-2 text-gray-300 sm:min-h-9">
                    <Check className="h-4 w-4 flex-none text-accent1-300" aria-hidden="true" />
                    {call}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:text-right">
              <p className="type-small font-semibold text-white">Tools</p>
              <ul className="mt-3 flex flex-wrap gap-2 lg:justify-end" aria-label="Tools used on the project">
                {buildTools.map((tool) => (
                  <li
                    key={tool}
                    className="type-caption flex min-h-9 items-center rounded-full border border-white/15 bg-white/5 px-3 font-semibold text-gray-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ResponsiveShowcase
        label="05 / Responsive design"
        description="The same course catalogue on two screens. The content and its order stay fixed; only the layout changes."
        desktop={courses}
        mobile={[mobileCourses, mobileCourseList]}
        views={responsiveViews}
        desktopLabel="Course catalogue"
        mobileCaptions={["Screen 1: tabs and first course", "Screen 2: courses continue"]}
      />

      <section
        id="interface"
        aria-labelledby="interface-heading"
        className="relative isolate scroll-mt-28 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_86%_36%,rgba(219,39,119,0.07),transparent_32%),linear-gradient(180deg,#ffffff_0%,#faf7ff_50%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_86%_36%,rgba(236,72,153,0.12),transparent_32%),linear-gradient(180deg,#111827_0%,#0f172a_50%,#111827_100%)]"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
              <MousePointerClick className="h-3.5 w-3.5" aria-hidden="true" />
              06 / The interface
            </p>
            <h2 id="interface-heading" className="type-section copy-heading">
              Selected views from the live homepage.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 copy-body">
              The trust section on desktop and on a phone, followed by the enquiry section on mobile.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-2 items-start gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-[minmax(0,2.8fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300/35 via-accent1-300/25 to-transparent blur-3xl"
              aria-hidden="true"
            />

            <figure className="col-span-2 min-w-0 lg:col-span-1">
              <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-[0_28px_90px_rgba(124,58,237,0.3)] ring-1 ring-purple-200/60 dark:ring-purple-800/40">
                <div
                  className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-accent1-400" />
                  <span className="h-2 w-2 rounded-full bg-brand-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                </div>
                <Image
                  src={trust.src}
                  alt={trust.alt}
                  width={trust.width}
                  height={trust.height}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-5">
                <p className="type-label text-accent1-600 dark:text-accent1-300">Desktop</p>
                <h3 className="type-card mt-2 copy-heading">{trust.title}</h3>
                <p className="type-small mt-2 max-w-xl copy-body">{trust.caption}</p>
              </figcaption>
            </figure>

            {[mobileTrust, mobileEnquiry].map((screen) => (
              <figure key={screen.src} className="mx-auto w-full min-w-0 max-w-[230px] lg:max-w-none">
                <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-gray-900 bg-gray-950 shadow-[0_28px_90px_rgba(124,58,237,0.3)] ring-1 ring-purple-200/60 dark:ring-purple-800/40 sm:rounded-[2rem] sm:border-[6px]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(min-width: 1024px) 20vw, 230px"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="type-label text-accent1-600 dark:text-accent1-300">Mobile</p>
                  <h3 className="type-card mt-2 copy-heading">{screen.title}</h3>
                  <p className="type-small mt-2 copy-body">{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="outcome"
        aria-labelledby="outcome-heading"
        className="relative isolate scroll-mt-28 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(219,39,119,0.07),transparent_32%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(139,92,246,0.14),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(236,72,153,0.1),transparent_32%)]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              07 / What I delivered
            </p>
            <h2 id="outcome-heading" className="type-section text-balance copy-heading">
              From raw college information to an approved, live homepage.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 copy-body">{detail.outcomes[0]}</p>
          </div>

          {/* A handover sheet: everything delivered on the left, the result on the right. */}
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_28px_90px_rgba(124,58,237,0.14)] dark:border-gray-800 dark:bg-gray-950 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="type-card copy-heading">Handed over</h3>
                <p className="type-caption copy-body">
                  Homepage scope, built on the college&apos;s WordPress site
                </p>
              </div>

              <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-3">
                {deliverableGroups.map(({ title, Icon, tone, items }) => (
                  <div key={title}>
                    <h4 className="flex items-center gap-3 type-small font-semibold copy-heading">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tone}`}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {title}
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="type-small flex items-start gap-2.5 copy-body">
                          <Check
                            className="mt-1 h-4 w-4 flex-none text-success-600 dark:text-success-500"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative isolate flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-accent1-600 p-6 text-white sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:22px_22px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-accent1-400/40 blur-3xl"
              />

              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success-400" />
                  </span>
                  Live{project.liveLink ? ` at ${new URL(project.liveLink).host}` : ""}
                </p>
                <h3 className="type-card-large mt-6 text-white">Approved and live.</h3>
                <p className="type-small mt-3 text-white/85">{detail.outcomes[1]}</p>
                <p className="type-caption mt-3 text-white/75">{detail.outcomes[2]}</p>
              </div>

              <WebsiteLink project={project} />
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center text-center lg:max-w-none lg:flex-row lg:justify-center lg:gap-3">
            <Handshake className="h-5 w-5 text-accent1-500" aria-hidden="true" />
            <p className="type-body mt-3 text-balance copy-body lg:mt-0">
              My friend handled the college; I owned the homepage, from raw content to an approved, live page.
            </p>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
