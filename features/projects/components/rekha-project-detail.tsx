import Image from "next/image"
import { ArrowDown, ArrowRight, Check, ExternalLink } from "lucide-react"

import { TrackedLink } from "@/components/analytics/tracked-link"
import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { LinkButton } from "@/components/ui/link-button"
import { analyticsEvents } from "@/config/analytics"
import { MoreProjects } from "@/features/projects/components/more-projects"
import type { CaseStudyProject } from "@/features/projects/project-details"

const facts = [
  ["Project type", "Independent small-business website"],
  ["My responsibility", "End-to-end website design and delivery"],
  ["Design ownership", "Visual direction · information architecture · responsive UI"],
  ["Implementation", "WordPress · Elementor · forms and plugins"],
]

const ownershipAreas = [
  {
    title: "Experience design",
    description:
      "I planned the information architecture, section sequence, navigation, CTA placement and responsive page layouts.",
  },
  {
    title: "Brand and content",
    description:
      "I chose the dark-teal and yellow visual direction, typography and brand treatment, created the favicon, wrote the website copy and captured the original food photography.",
  },
  {
    title: "Implementation and delivery",
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

const responsiveNotes = [
  {
    title: "Reflow the hierarchy",
    description:
      "Desktop columns become a single reading order on phones, keeping the proposition, plan details and enquiry path understandable without a separate mobile page.",
  },
  {
    title: "Keep choices readable",
    description:
      "Plan cards and form fields stack at narrow widths, while headings, spacing and imagery scale down to preserve their relative hierarchy.",
  },
  {
    title: "Keep actions usable",
    description:
      "Navigation condenses for mobile and enquiry buttons remain prominent, full-width where useful and large enough to operate by touch.",
  },
]

function WebsiteLink({ project, label = "Visit Website" }: { project: CaseStudyProject; label?: string }) {
  if (!project.liveLink) return null

  return (
    <TrackedLink
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      eventName={analyticsEvents.projectViewed}
      eventProperties={{ project: project.id, destination: "live" }}
      aria-label={`${label} for ${project.title} (opens in a new tab)`}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/15 transition hover:from-brand-700 hover:to-accent1-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </TrackedLink>
  )
}

export function RekhaProjectDetail({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const [hero, pricing, booking, mobileHero, mobileBooking] = detail.screenshots

  return (
    <article>
      <section className="relative isolate overflow-hidden bg-gray-950 py-16 text-white md:py-24">
        <HeroBackground />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <p className="type-label text-brand-200">Independent business website</p>
              <h1 className="type-hero mt-4 text-white">Rekha Maa Ki Rasoi — Food Business Website</h1>
              <p className="type-body mt-6 max-w-3xl text-gray-200">{detail.summary}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WebsiteLink project={project} />
                <LinkButton
                  href="#overview"
                  variant="outlineInverse"
                  icon={<ArrowDown className="h-4 w-4" />}
                >
                  Explore the case study
                </LinkButton>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core project skills">
                {[
                  "UI/UX Design",
                  "WordPress",
                  "Elementor",
                  "Responsive Design",
                  "Information Architecture",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-gray-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30 sm:p-3">
              <div className="relative aspect-[8/5] overflow-hidden rounded-xl bg-[#062f38]">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={hero.width}
                  height={hero.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <div className="border-b border-brand-100 bg-brand-50/50 dark:border-brand-900/40 dark:bg-gray-900">
        <dl className="container mx-auto grid gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="type-label text-brand-700 dark:text-brand-300">{label}</dt>
              <dd className="type-small mt-2 copy-heading">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

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
        className="scroll-mt-32 border-b border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-700 dark:text-brand-300">01 / Project context</p>
          <h2 id="overview-heading" className="type-section mt-4 max-w-4xl copy-heading">
            Turning a homemade-food idea into a clear digital experience
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <p className="type-body copy-body">{detail.context}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {ownershipAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-brand-100 bg-brand-50/45 p-5 dark:border-brand-900/40 dark:bg-brand-950/20"
                >
                  <h3 className="type-card copy-heading">{area.title}</h3>
                  <p className="type-small mt-3 copy-body">{area.description}</p>
                </article>
              ))}
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
          <p className="type-label text-brand-700 dark:text-brand-300">02 / Customer journey</p>
          <h2 id="journey-heading" className="type-section mt-4 copy-heading">
            A one-page path from discovery to enquiry
          </h2>
          <p className="type-body mt-5 max-w-3xl copy-body">
            I structured the page so visitors can understand the offering before they are asked to commit.
            Each section resolves the next practical question, with contact actions available at key decision
            points.
          </p>
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
        className="scroll-mt-32 border-b border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-700 dark:text-brand-300">03 / Design decisions</p>
          <h2 id="decisions-heading" className="type-section mt-4 copy-heading">
            Practical choices shaped around the buying journey
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {detail.decisions?.map((decision, index) => (
              <article
                key={decision.title}
                className="rounded-2xl border border-brand-100 border-t-4 border-t-brand-500 bg-brand-50/30 p-6 dark:border-brand-900/40 dark:border-t-brand-400 dark:bg-brand-950/20"
              >
                <p className="type-caption font-semibold text-brand-700 dark:text-brand-300">
                  Decision 0{index + 1}
                </p>
                <h3 className="type-card mt-3 copy-heading">{decision.title}</h3>
                <p className="type-body mt-4 copy-body">{decision.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="responsive"
        aria-labelledby="responsive-heading"
        className="scroll-mt-32 border-b border-brand-100 bg-gray-950 py-16 text-white md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-300">04 / Responsive design</p>
          <h2 id="responsive-heading" className="type-section mt-4 max-w-4xl text-white">
            One hierarchy, adapted for desktop and mobile
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)]">
            <figure>
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2">
                <Image
                  src={pricing.src}
                  alt={pricing.alt}
                  width={pricing.width}
                  height={pricing.height}
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="type-small mt-4 text-gray-300">
                Desktop composition: audience choices and plan comparisons use the available horizontal space.
              </figcaption>
            </figure>
            <figure className="mx-auto w-full max-w-[390px]">
              <div className="overflow-hidden rounded-[2rem] border-[8px] border-gray-800 bg-gray-900 shadow-2xl">
                <Image
                  src={mobileHero.src}
                  alt={mobileHero.alt}
                  width={mobileHero.width}
                  height={mobileHero.height}
                  sizes="390px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="type-small mt-4 text-gray-300">
                Mobile adaptation: the hero, imagery and primary actions stack into a focused reading order.
              </figcaption>
            </figure>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {responsiveNotes.map((note) => (
              <article key={note.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h3 className="type-card text-white">{note.title}</h3>
                <p className="type-small mt-3 text-gray-300">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="implementation"
        aria-labelledby="implementation-heading"
        className="scroll-mt-32 border-b border-brand-100 bg-brand-50/45 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-700 dark:text-brand-300">05 / Implementation</p>
          <h2 id="implementation-heading" className="type-section mt-4 copy-heading">
            Built and published with WordPress and Elementor
          </h2>
          <p className="type-body mt-5 max-w-4xl copy-body">
            The site used a premium WordPress theme as its starting foundation. I then customized the
            business-specific structure, visual identity, copy, original food imagery and responsive layouts
            in Elementor, and handled the supporting setup needed to publish it.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.implementation.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-brand-100 bg-white p-6 dark:border-brand-900/40 dark:bg-gray-950"
              >
                <Check className="h-6 w-6 text-brand-600 dark:text-brand-300" aria-hidden="true" />
                <h3 className="type-card mt-4 copy-heading">{item.title}</h3>
                <p className="type-body mt-4 copy-body">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="interface"
        aria-labelledby="interface-heading"
        className="scroll-mt-32 border-b border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-700 dark:text-brand-300">06 / The interface</p>
          <h2 id="interface-heading" className="type-section mt-4 copy-heading">
            Selected views from the live website
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {[hero, booking].map((screen) => (
              <figure key={screen.src} className="min-w-0">
                <div className="overflow-hidden rounded-2xl border border-brand-100 bg-gray-950 p-2 shadow-xl shadow-brand-950/10 dark:border-brand-900/40">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="type-card copy-heading">{screen.title}</h3>
                  <p className="type-small mt-3 copy-body">{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
            <figure className="mx-auto w-full max-w-[390px] lg:col-span-2">
              <div className="overflow-hidden rounded-[2rem] border-[8px] border-gray-900 bg-gray-950 shadow-xl">
                <Image
                  src={mobileBooking.src}
                  alt={mobileBooking.alt}
                  width={mobileBooking.width}
                  height={mobileBooking.height}
                  sizes="390px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="type-card copy-heading">{mobileBooking.title}</h3>
                <p className="type-small mt-3 copy-body">{mobileBooking.caption}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="outcome"
        aria-labelledby="outcome-heading"
        className="scroll-mt-32 border-b border-brand-100 bg-brand-50/45 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="type-label text-brand-700 dark:text-brand-300">07 / What I delivered</p>
          <h2 id="outcome-heading" className="type-section mt-4 copy-heading">
            From an early business idea to a live enquiry path
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {detail.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="type-body rounded-2xl border border-brand-100 bg-white p-6 copy-body dark:border-brand-900/40 dark:bg-gray-950"
              >
                {outcome}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-5 border-t border-brand-100 pt-8 dark:border-brand-900/40 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-small max-w-3xl copy-body">
              The live site is the delivered implementation and primary external evidence for this project.
            </p>
            <WebsiteLink project={project} />
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId={project.id} />
    </article>
  )
}
