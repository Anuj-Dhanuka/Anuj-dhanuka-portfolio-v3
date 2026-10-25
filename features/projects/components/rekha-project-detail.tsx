import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  Check,
  Columns3,
  ExternalLink,
  Globe,
  Handshake,
  Heart,
  Layers3,
  LayoutTemplate,
  Lightbulb,
  MonitorSmartphone,
  MousePointerClick,
  Package,
  Palette,
  Rocket,
  ShieldCheck,
} from "lucide-react"

import { TrackedLink } from "@/components/analytics/tracked-link"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { analyticsEvents } from "@/config/analytics"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { RekhaResponsiveShowcase } from "@/features/projects/components/rekha-responsive-showcase"
import { RekhaProjectHero } from "@/features/projects/components/rekha-project-hero"
import type { CaseStudyProject } from "@/features/projects/project-details"

const sharedDecisions = [
  { title: "Business idea", description: "Proposed by my mother", Icon: Lightbulb },
  { title: "Meal plans and pricing", description: "Decided together", Icon: Handshake },
]

const ownershipAreas = [
  {
    title: "Experience design",
    Icon: LayoutTemplate,
    tone: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    description:
      "I planned the information architecture, section sequence, navigation, CTA placement and responsive page layouts.",
  },
  {
    title: "Brand and content",
    Icon: Palette,
    tone: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
    description:
      "I chose the dark-teal and yellow visual direction, typography and brand treatment, created the favicon, wrote the website copy and captured the original food photography.",
  },
  {
    title: "Implementation and delivery",
    Icon: Rocket,
    tone: "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
    description:
      "I set up WordPress, customized a premium-theme foundation in Elementor, configured forms and plugins, connected the domain and hosting, and deployed the finished site.",
  },
]

const journey = [
  ["Discover", "What is the service?"],
  ["Evaluate", "Is it relevant to me?"],
  ["Compare", "Which plan and price fit?"],
  ["Understand", "How does ordering work?"],
  ["Review", "What meals are included?"],
  ["Enquire", "How do I get started?"],
]

// Client palette and typefaces from the live site's Elementor globals, shown as design evidence.
const brandColors = [
  { name: "Deep teal", hex: "#082932", role: "Page base" },
  { name: "Ink", hex: "#001118", role: "Depth and contrast" },
  { name: "Marigold", hex: "#FFCE53", role: "Accents and actions" },
]

const planOptions = [
  { label: "Plan length", values: ["Daily", "Weekly", "Monthly"] },
  { label: "Meal choice", values: ["Standard", "Premium"] },
]

const decisionIcons = [Palette, Columns3, ShieldCheck, MousePointerClick]

// Build order, left to right: the provided theme, then my work, ending in the live launch.
const implementationSteps = [
  {
    Icon: Layers3,
    badge: "Customization",
    card: "border border-white/10 bg-white/[0.04] backdrop-blur-sm",
    icon: "bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/20",
    label: "text-brand-300",
    title: "text-white",
    body: "text-gray-300",
  },
  {
    Icon: MonitorSmartphone,
    badge: "Layouts",
    card: "border border-accent1-400/20 bg-gradient-to-br from-brand-500/15 to-accent1-500/15 backdrop-blur-sm",
    icon: "bg-accent1-500/20 text-accent1-200 ring-1 ring-accent1-400/20",
    label: "text-accent1-300",
    title: "text-white",
    body: "text-gray-300",
  },
  {
    Icon: Globe,
    badge: "Launch",
    card: "bg-gradient-to-br from-brand-600 to-accent1-600 shadow-xl shadow-accent1-500/20 ring-1 ring-white/15",
    icon: "bg-white/15 text-white ring-1 ring-white/25",
    label: "text-white/80",
    title: "text-white",
    body: "text-white/90",
  },
]

// Owner-confirmed deliverables, grouped like a handover checklist. No custom code is claimed.
const deliverableGroups = [
  {
    title: "Design",
    Icon: LayoutTemplate,
    tone: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    items: ["Information architecture", "Visual direction", "Responsive layouts"],
  },
  {
    title: "Content",
    Icon: Palette,
    tone: "bg-accent1-50 text-accent1-700 dark:bg-accent1-950/40 dark:text-accent1-300",
    items: ["Website copy", "Original food photography", "Brand treatment and favicon"],
  },
  {
    title: "Build",
    Icon: Layers3,
    tone: "bg-accent2-50 text-accent2-700 dark:bg-accent2-950/40 dark:text-accent2-300",
    items: ["WordPress and theme setup", "Elementor customization", "Forms and plugins"],
  },
  {
    title: "Launch",
    Icon: Rocket,
    tone: "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300",
    items: ["Domain connection", "Hosting configuration", "Live deployment"],
  },
]

// The theme foundation is stated plainly: no custom theme, CSS, JavaScript or PHP is claimed.
const buildTools = ["WordPress", "Elementor", "Forms and plugins", "Domain and hosting"]

// Arrow between build steps: points down when stacked, right when the steps sit in a row.
function StepConnector() {
  return (
    <span
      aria-hidden="true"
      className="absolute -bottom-4 left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 text-white shadow-md ring-4 ring-gray-950 md:hidden lg:-right-[1.1rem] lg:bottom-auto lg:left-auto lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:translate-x-0"
    >
      <ArrowDown className="h-4 w-4 lg:-rotate-90" />
    </span>
  )
}

// Inverse styling sits on the gradient result panel; the default is the shared gradient CTA.
function WebsiteLink({ project, inverse = false }: { project: CaseStudyProject; inverse?: boolean }) {
  if (!project.liveLink) return null

  return (
    <TrackedLink
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      eventName={analyticsEvents.projectViewed}
      eventProperties={{ project: project.id, destination: "live" }}
      aria-label={`Visit Website for ${project.title} (opens in a new tab)`}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        inverse
          ? "w-full bg-white text-brand-800 shadow-lg shadow-brand-950/25 hover:bg-brand-50 focus-visible:ring-white focus-visible:ring-offset-brand-700 sm:w-auto sm:self-start"
          : "bg-gradient-to-r from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15 hover:from-brand-700 hover:to-accent1-700 focus-visible:ring-brand-500"
      }`}
    >
      Visit Website
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </TrackedLink>
  )
}

export function RekhaProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const [, pricing, booking, mobilePricing, mobilePlans, mobileBenefits, mobileSteps] = detail.screenshots

  return (
    <article>
      <RekhaProjectHero project={project} />

      <PageSectionNav
        items={[
          { href: "#overview", label: "Context & role" },
          { href: "#journey", label: "Customer journey" },
          { href: "#decisions", label: "Design decisions" },
          { href: "#responsive", label: "Responsive design" },
          { href: "#implementation", label: "Implementation" },
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
              Turning a homemade-food idea into a clear digital experience.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500 md:mx-auto"
              aria-hidden="true"
            />
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">{detail.context}</p>
          </div>

          {/* The ownership boundary is the key fact: the offer was shaped together, the website was mine. */}
          <div className="mt-10 grid gap-4 md:gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="type-card copy-heading">Shaped together</h3>
                <span className="type-caption rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  The offer
                </span>
              </div>
              <dl className="mt-5 divide-y divide-gray-200/80 border-t border-gray-200/80 dark:divide-gray-800 dark:border-gray-800">
                {sharedDecisions.map(({ title, description, Icon }) => (
                  <div key={title} className="flex gap-4 py-5">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="type-small font-semibold copy-heading">{title}</dt>
                      <dd className="type-small mt-1 copy-body">{description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="type-small mt-auto flex items-start gap-3 rounded-xl bg-brand-50 p-4 text-brand-900 dark:bg-brand-950/40 dark:text-brand-100">
                <ArrowRight className="mt-1 h-4 w-4 flex-none text-brand-600 lg:hidden" aria-hidden="true" />
                <span>
                  From there, how the offer was structured, presented and published online was my
                  responsibility.
                </span>
                <ArrowRight
                  className="mt-1 hidden h-4 w-4 flex-none text-brand-600 lg:block"
                  aria-hidden="true"
                />
              </p>
            </div>

            <div className="rounded-2xl border border-brand-200/80 bg-white/90 p-5 shadow-sm shadow-brand-950/5 backdrop-blur-sm dark:border-brand-800/50 dark:bg-gray-900/85 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="type-card copy-heading">Owned by me</h3>
                <span className="type-caption rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-semibold text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-300">
                  The website
                </span>
              </div>
              <ul className="mt-5 divide-y divide-gray-200/80 border-t border-gray-200/80 dark:divide-gray-800 dark:border-gray-800">
                {ownershipAreas.map(({ title, description, Icon, tone }) => (
                  <li key={title} className="flex gap-4 py-5 last:pb-0">
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
            <p className="type-label text-brand-700 dark:text-brand-300">02 / Customer journey</p>
            <h2 id="journey-heading" className="type-section mt-4 copy-heading">
              A one-page path from discovery to enquiry
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500 md:mx-auto"
              aria-hidden="true"
            />
            <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
              I structured the page so visitors can understand the offering before they are asked to commit.
              Each section resolves the next practical question, with contact actions available at key
              decision points.
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
              Practical choices shaped around the buying journey.
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
                    {/* The plan-comparison decision lists the options visitors compare. */}
                    {index === 1 && (
                      <dl className="mt-5 grid divide-y divide-gray-200/80 border-t border-gray-200/80 pt-5 dark:divide-gray-800 dark:border-gray-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                        {planOptions.map(({ label, values }) => (
                          <div
                            key={label}
                            className="py-4 first:pt-0 last:pb-0 sm:px-5 sm:py-0 sm:first:pl-0 sm:last:pr-0"
                          >
                            <dt className="type-caption copy-body">{label}</dt>
                            <dd className="mt-2 flex flex-wrap gap-1.5">
                              {values.map((value) => (
                                <span
                                  key={value}
                                  className="type-caption rounded-full border border-accent1-100 bg-accent1-50 px-2.5 py-0.5 font-semibold text-accent1-700 dark:border-accent1-800/60 dark:bg-accent1-950/30 dark:text-accent1-300"
                                >
                                  {value}
                                </span>
                              ))}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <RekhaResponsiveShowcase desktop={pricing} mobile={[mobilePricing, mobilePlans]} />

      <section
        id="implementation"
        aria-labelledby="implementation-heading"
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
              <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
              05 / Implementation
            </p>
            <h2 id="implementation-heading" className="type-section text-white">
              Built and published with WordPress and Elementor.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 text-gray-300">
              A premium WordPress theme provided the foundation. Everything built on top of it, through to the
              live launch, was my work.
            </p>
          </div>

          <ol
            className="mt-12 grid gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
            aria-label="Build steps, from foundation to launch"
          >
            <li className="relative flex flex-col rounded-2xl border border-dashed border-white/20 p-5 sm:p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gray-300">
                <Package className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="type-caption mt-5 font-semibold text-gray-400">Provided</p>
              <h3 className="type-card mt-1 text-white">Premium WordPress theme</h3>
              <p className="type-small mt-3 text-gray-400">
                The starting technical and design foundation for the site.
              </p>
              <StepConnector />
            </li>

            {detail.implementation.map((item, index) => {
              const step = implementationSteps[index] ?? implementationSteps[0]
              const isLast = index === detail.implementation.length - 1

              return (
                <li key={item.title} className={`relative flex flex-col rounded-2xl p-5 sm:p-6 ${step.card}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.icon}`}>
                    <step.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className={`type-caption mt-5 font-semibold ${step.label}`}>{step.badge}</p>
                  <h3 className={`type-card mt-1 ${step.title}`}>{item.title}</h3>
                  <p className={`type-small mt-3 ${step.body}`}>{item.description}</p>
                  {!isLast && <StepConnector />}
                </li>
              )
            })}
          </ol>

          <div className="mt-10 hidden flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex lg:flex-row lg:justify-between">
            <dl className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-3">
                <dt className="h-4 w-8 flex-none rounded border border-dashed border-white/40">
                  <span className="sr-only">Dashed card</span>
                </dt>
                <dd className="type-small text-gray-300">Provided by the theme</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="h-4 w-8 flex-none rounded bg-gradient-to-r from-brand-600 to-accent1-600">
                  <span className="sr-only">Colored cards</span>
                </dt>
                <dd className="type-small text-gray-300">My work</dd>
              </div>
            </dl>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <p className="type-small whitespace-nowrap font-semibold text-white">Built with</p>
              <ul
                className="flex flex-wrap justify-center gap-2"
                aria-label="Tools used to build the website"
              >
                {buildTools.map((tool) => (
                  <li
                    key={tool}
                    className="type-caption rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-gray-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              Selected views from the live website.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 copy-body">
              The booking area on desktop, and two sections as they appear on phones.
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
                  src={booking.src}
                  alt={booking.alt}
                  width={booking.width}
                  height={booking.height}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-5">
                <p className="type-label text-accent1-600 dark:text-accent1-300">Desktop</p>
                <h3 className="type-card mt-2 copy-heading">{booking.title}</h3>
                <p className="type-small mt-2 max-w-xl copy-body">{booking.caption}</p>
              </figcaption>
            </figure>

            {[mobileBenefits, mobileSteps].map((screen) => (
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
              From an early business idea to a live enquiry path.
            </h2>
            <div
              className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 copy-body">{detail.outcomes[0]}</p>
          </div>

          {/* A handover sheet: everything delivered on the left, what it led to on the right. */}
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_28px_90px_rgba(124,58,237,0.14)] dark:border-gray-800 dark:bg-gray-950 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="type-card copy-heading">Handed over</h3>
                <p className="type-caption copy-body">Owned end to end, built on a premium theme</p>
              </div>

              <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
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
                <h3 className="type-card-large mt-6 text-white">Inbound customer enquiries after launch.</h3>
                <p className="type-small mt-3 text-white/85">
                  Visitors reached out through the call and contact paths. No lead or sales total is claimed.
                </p>
              </div>

              <WebsiteLink project={project} inverse />
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center text-center lg:max-w-none lg:flex-row lg:justify-center lg:gap-3">
            <Heart className="h-5 w-5 fill-accent1-500 text-accent1-500" aria-hidden="true" />
            <p className="type-body mt-3 text-balance copy-body lg:mt-0">
              Above all, I made this website for my mother, so her homemade food could reach more families.
            </p>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
