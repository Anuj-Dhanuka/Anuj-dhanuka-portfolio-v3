import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"

import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import { LinkButton } from "@/components/ui/link-button"
import {
  AccentBar,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import type { ServiceEntry } from "@/features/hire/data/hire"
import { capabilityIcons } from "@/features/hire-pages/components/hire-page-sections"
import { cn } from "@/lib/utils"

const ctaSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")

// One service entry: the homepage lift card with one descriptive link. The link's ::after covers the card,
// so the whole card is a touch target without nesting interactive elements; its focus ring is drawn on the card.
function ServiceCard({
  service,
  section,
  className,
}: {
  service: ServiceEntry
  section: string
  className?: string
}) {
  const Icon = capabilityIcons[service.icon]
  return (
    <li
      className={cn(
        "relative flex flex-col overflow-hidden p-5 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-brand-500 has-[a:focus-visible]:ring-offset-2 dark:has-[a:focus-visible]:ring-offset-gray-950 sm:p-6",
        homeCardLift,
        className,
      )}
    >
      <AccentBar />
      <div className={homeIconTile}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="type-card mt-5 copy-heading">{service.title}</h3>
      <p className="type-small mt-3 flex-1 copy-body">{service.body}</p>
      <Link
        href={service.href}
        data-cta={ctaSlug(service.linkLabel)}
        data-cta-section={section}
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-brand-700 underline decoration-brand-300/0 underline-offset-4 transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent1-700 group-hover:decoration-accent1-500 focus-visible:outline-none dark:text-brand-300 dark:group-hover:text-accent1-300"
      >
        {service.linkLabel}
        <ArrowRight
          className="h-4 w-4 flex-none transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          aria-hidden="true"
        />
      </Link>
    </li>
  )
}

// Seven services. From lg a twelve-column grid gives four cards in the first row and three wider cards in the
// second, so no row ends with an empty slot; on tablets (two columns) the seventh card spans both.
const expertiseSpans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "sm:col-span-2 lg:col-span-4",
] as const

// All seven service pages, then a direct project enquiry, so a visitor can get in touch without choosing a
// technology or opening a service page first.
export function ExpertiseSection({
  expertise,
  freelanceHref,
}: {
  expertise: {
    id: string
    label: string
    title: string
    intro: string
    items: readonly ServiceEntry[]
    supportingLine: string
    ctaLabel: string
  }
  freelanceHref: string
}) {
  return (
    <section
      id={expertise.id}
      aria-labelledby={`${expertise.id}-heading`}
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id={`${expertise.id}-heading`}
          label={expertise.label}
          title={expertise.title}
          intro={expertise.intro}
          icon={Compass}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-12 lg:gap-5">
          {expertise.items.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              section="expertise"
              className={expertiseSpans[index]}
            />
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-5 text-center md:mt-12">
          <p className="type-body copy-body">{expertise.supportingLine}</p>
          <LinkButton
            href={freelanceHref}
            data-cta="discuss_freelance_project"
            data-cta-section="expertise"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {expertise.ctaLabel}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
