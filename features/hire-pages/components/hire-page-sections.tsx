import Image from "next/image"
import Link from "next/link"
import type { IconType } from "react-icons"
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJson,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiElementor,
  SiShopify,
  SiVite,
  SiWordpress,
  SiGoogleanalytics,
} from "react-icons/si"
import {
  TbApi,
  TbApps,
  TbBraces,
  TbCloudUpload,
  TbDatabase,
  TbFilter,
  TbListDetails,
  TbRoute,
  TbSeo,
  TbTemplate,
  TbTerminal2,
  TbTruckDelivery,
  TbBolt,
  TbDevices,
  TbForms,
  TbLayout,
  TbPlug,
  TbShoppingCart,
  TbWorldWww,
} from "react-icons/tb"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  Code2,
  CreditCard,
  Download,
  ExternalLink,
  FolderGit2,
  Globe,
  Handshake,
  KeyRound,
  LayoutDashboard,
  LayoutTemplate,
  Layers,
  ListChecks,
  MessagesSquare,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  PackageCheck,
  Paintbrush,
  PanelsTopLeft,
  ShoppingBag,
  Smartphone,
  Store,
  type LucideIcon,
} from "lucide-react"

import { TrackedLink } from "@/components/analytics/tracked-link"
import { inlineLinkClass } from "@/components/shared/hire-page-links"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import { PageSectionNav } from "@/components/shared/page-section-nav"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button"
import { analyticsEvents } from "@/config/analytics"
import {
  CityPageIllustration,
  PaymentsIllustration,
} from "@/features/experience/components/chefkart/chefkart-illustrations"
import {
  AccentBar,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import type {
  Capability,
  CapabilityIcon,
  EngagementLink,
  HirePageSections,
  TechIcon,
  TechItem,
  WorkItem,
  WorkVisual,
} from "@/features/hire-pages/types"
import { ProjectPhone } from "@/features/projects/components/project-phone"
import { ProjectLinks } from "@/features/projects/components/projects"
import { cn } from "@/lib/utils"

const capabilityIcons: Record<CapabilityIcon, LucideIcon> = {
  interface: LayoutTemplate,
  dashboard: LayoutDashboard,
  api: Network,
  nextjs: Globe,
  mobile: Smartphone,
  auth: KeyRound,
  payments: CreditCard,
  responsive: MonitorSmartphone,
  interactive: MousePointerClick,
  website: PanelsTopLeft,
  store: Store,
  theme: Paintbrush,
  product: ShoppingBag,
}

const pill =
  "rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"

const ctaSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")

function TextLink({ link, section }: { link: EngagementLink; section?: string }) {
  return (
    <LinkButton
      href={link.href}
      variant="line"
      data-cta={ctaSlug(link.label)}
      data-cta-section={section}
      {...(link.download ? { download: true } : {})}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      icon={link.download ? <Download className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
    >
      {link.shortLabel ? (
        <>
          {/* Short text on phones only; the full label stays the accessible name everywhere. */}
          <span className="sm:hidden" aria-hidden="true">
            {link.shortLabel}
          </span>
          <span className="sr-only sm:not-sr-only">{link.label}</span>
        </>
      ) : (
        link.label
      )}
      {(link.pdf || link.external) && (
        <span className="sr-only">
          {" "}
          ({[link.pdf && "PDF", link.external && "opens in a new tab"].filter(Boolean).join(", ")})
        </span>
      )}
    </LinkButton>
  )
}

const illustrations = {
  "chefkart-city": CityPageIllustration,
  "chefkart-payments": PaymentsIllustration,
} as const

// Featured-project pattern: the visual and the text column share each row 50/50 (overline, title, summary,
// three highlights, a plain tech line and one primary action), alternating sides. Phones read overline and
// title → visual → details, so the visual never precedes its heading.
function WorkFrame({ visual }: { visual: WorkVisual }) {
  if (visual.type === "image") {
    return (
      <figure>
        <div className="overflow-hidden rounded-lg border border-purple-100 bg-white shadow-[0_20px_50px_rgba(76,29,149,0.14)] dark:border-purple-800/40">
          <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-accent1-400" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-gray-300" aria-hidden="true" />
            <span className="type-caption ml-2 truncate text-gray-500">{visual.address}</span>
            {visual.live && (
              <span className="ml-auto inline-flex flex-none items-center gap-1.5 rounded-full border border-success-200 bg-success-50 px-2 py-0.5 text-[11px] font-semibold text-success-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-success-500 motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                Live
              </span>
            )}
          </div>
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="h-auto w-full"
          />
        </div>
        {visual.caption && (
          <figcaption className="type-caption mt-3 text-center copy-body">{visual.caption}</figcaption>
        )}
      </figure>
    )
  }

  if (visual.type === "phones") {
    // The shared mobile presentation (bare phone frames, no surrounding box), three screens in a row.
    return (
      <figure>
        <ul className="mx-auto grid max-w-[34rem] grid-cols-3 items-center gap-3 sm:gap-5">
          {visual.screens.map((screen, index) => (
            <li key={screen.src} className={cn(index === 1 && "lg:-translate-y-4")}>
              <ProjectPhone screenshot={screen} />
            </li>
          ))}
        </ul>
        <figcaption className="type-caption mt-5 text-center copy-body">{visual.caption}</figcaption>
      </figure>
    )
  }

  const Illustration = illustrations[visual.name]
  return (
    <figure>
      <div className="rounded-lg border border-purple-100 bg-white p-3 shadow-[0_20px_50px_rgba(76,29,149,0.14)] dark:border-purple-800/40">
        <Illustration />
      </div>
      <figcaption className="type-caption mt-3 text-center copy-body">{visual.caption}</figcaption>
    </figure>
  )
}

function FeaturedWork({ item, index }: { item: WorkItem; index: number }) {
  const visualFirst = index % 2 === 0
  return (
    <article
      id={item.anchor}
      aria-labelledby={`${item.id}-work-heading`}
      className={item.anchor ? "scroll-mt-24" : undefined}
    >
      {/* Editorial divider: index, a hairline that opens with the homepage's brand→accent rule, and the
          ownership label. It separates the projects without boxing them in. */}
      <div className="mb-8 flex items-center gap-4 lg:mb-10">
        <span className="type-label tabular-nums text-brand-700 dark:text-brand-300" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* A long ownership label wraps instead of squeezing the hairline; the rule never exceeds its track. */}
        <span className="relative h-px min-w-8 flex-1 bg-purple-100 dark:bg-purple-800/40" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-0.5 w-20 max-w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
        </span>
        <p className="type-label min-w-0 text-right text-accent1-600 dark:text-accent1-300">{item.kind}</p>
      </div>

      <div
        className={cn(
          "grid gap-6 [grid-template-areas:'header'_'visual'_'body'] lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:content-center lg:gap-x-12 lg:gap-y-0",
          visualFirst
            ? "lg:[grid-template-areas:'visual_header'_'visual_body']"
            : "lg:[grid-template-areas:'header_visual'_'body_visual']",
        )}
      >
        <div className="min-w-0 [grid-area:header] lg:self-end">
          <h3 id={`${item.id}-work-heading`} className="type-card-large copy-heading">
            {item.title}
          </h3>
          {item.meta && (
            <p className="type-caption mt-2 font-semibold text-gray-500 dark:text-gray-400">{item.meta}</p>
          )}
        </div>

        <div className="min-w-0 [grid-area:visual] lg:self-center">
          <WorkFrame visual={item.visual} />
        </div>

        <div className="min-w-0 [grid-area:body] lg:self-start">
          <p className="type-body copy-body lg:mt-4">{item.summary}</p>
          <ul className="mt-4 space-y-2.5">
            {item.highlights.map((highlight) => (
              <li key={highlight.label} className="type-small flex gap-3 copy-body">
                <Check
                  className="mt-1 h-4 w-4 flex-none text-brand-600 dark:text-brand-300"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold copy-heading">{highlight.label}:</strong> {highlight.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="type-caption mt-4 font-semibold text-brand-700 dark:text-brand-300">
            <span className="sr-only">Built with </span>
            {item.stack.join(" · ")}
          </p>
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            {item.project ? (
              <>
                {/* Phones: the compact one-row variant used on the Continue exploring cards. */}
                <div className="@container w-full sm:hidden">
                  <ProjectLinks project={item.project} includeCaseStudy size="sm" />
                </div>
                <div className="hidden sm:block">
                  <ProjectLinks project={item.project} includeCaseStudy />
                </div>
              </>
            ) : item.liveSite ? (
              // Same live-project button and project_viewed event as the shared project buttons.
              <Button
                asChild
                className="h-11 w-full rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700 sm:w-auto"
              >
                <TrackedLink
                  eventName={analyticsEvents.projectViewed}
                  eventProperties={{ project: item.liveSite.id, destination: "live" }}
                  aria-label={`View ${item.liveSite.title} live project (opens in a new tab)`}
                  href={item.liveSite.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                  <ExternalLink className="h-4 w-4" />
                </TrackedLink>
              </Button>
            ) : (
              item.primaryLink && (
                <LinkButton
                  href={item.primaryLink.href}
                  data-cta={ctaSlug(item.primaryLink.label)}
                  className="w-full sm:w-auto"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  {item.primaryLink.label}
                </LinkButton>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function SelectedWork({ work }: { work: HirePageSections["work"] }) {
  return (
    <section
      id={work.id}
      aria-labelledby={`${work.id}-heading`}
      className="relative scroll-mt-24 border-y border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-950 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id={`${work.id}-heading`}
          label="Evidence"
          title={work.title}
          intro={work.intro}
          icon={FolderGit2}
        />
        <div className="mt-12 space-y-16 md:mt-16 lg:space-y-20">
          {work.items.map((item, index) => (
            <FeaturedWork key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Body text with one phrase as an inline link, so the destination is an ordinary crawlable anchor.
function CapabilityBody({ body, link }: { body: string; link: NonNullable<Capability["link"]> }) {
  const [before, after] = body.split(link.text)
  return (
    <>
      {before}
      <Link href={link.href} className={inlineLinkClass}>
        {link.text}
      </Link>
      {after}
    </>
  )
}

// Homepage skills-section layout: a centred header (pill, heading, rule, description), four numbered lift
// cards in the "What I Bring" card style, then one centred text link. No scroll-triggered entrance, so the
// copy is visible without waiting for an animation.
function Capabilities({
  capabilities,
  freelanceContactHref,
}: {
  capabilities: HirePageSections["capabilities"]
  freelanceContactHref: string
}) {
  return (
    <section
      id={capabilities.id ?? "capabilities"}
      aria-labelledby="capabilities-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Same header as the homepage skills section: centred pill, heading, rule and description. */}
        <CenteredSectionHeader
          reveal={false}
          id="capabilities-heading"
          label={capabilities.label ?? "Capabilities"}
          title={capabilities.title}
          intro={capabilities.intro}
          icon={Layers}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-5">
          {capabilities.items.map(({ title, body, icon, link }, index) => {
            const Icon = capabilityIcons[icon]
            return (
              <li key={title} className={cn("relative overflow-hidden p-5", homeCardLift)}>
                <AccentBar />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className={homeIconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span
                    className="text-xs font-bold tabular-nums text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="type-card copy-heading">{title}</h3>
                <p className="type-small mt-3 copy-body">
                  {link ? <CapabilityBody body={body} link={link} /> : body}
                </p>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <LinkButton
            href={freelanceContactHref}
            variant="line"
            data-cta="discuss_freelance_project"
            data-cta-section="capabilities"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            {capabilities.ctaLabel}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

const engagementIcons = { role: BriefcaseBusiness, project: Code2 } as const

// Two parallel path cards in the homepage card style. From lg each card is a five-row subgrid (intro,
// "Share:" box, availability, main button, secondary links), so rows and both main buttons line up even
// though only the full-time card has availability pills and secondary links.
function WorkWithMe({ engagement }: { engagement: HirePageSections["engagement"] }) {
  return (
    <section
      id={engagement.id ?? "work-with-me"}
      aria-labelledby="work-with-me-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-purple-100/70 bg-brand-50/50 py-16 dark:border-purple-800/30 dark:bg-gray-950 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id="work-with-me-heading"
          label="Engagement"
          title="Two ways to work with me"
          intro={engagement.intro}
          icon={Handshake}
        />
        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2 lg:grid-rows-[repeat(5,auto)] lg:gap-y-0">
          {engagement.items.map((path) => {
            const Icon = engagementIcons[path.icon]
            const section = `${path.id.replace("-", "_")}_path`
            return (
              <article
                key={path.id}
                aria-labelledby={`${path.id}-heading`}
                className={cn(
                  "relative flex flex-col overflow-hidden p-5 sm:p-8 lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-y-0",
                  homeCardLift,
                )}
              >
                <AccentBar />
                <div>
                  <div className="flex items-center gap-3">
                    <div className={homeIconTile}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="type-label text-accent1-600 dark:text-accent1-300">{path.label}</p>
                  </div>
                  <h3 id={`${path.id}-heading`} className="type-card-large mt-5 copy-heading">
                    {path.title}
                  </h3>
                  <p className="type-body mt-3 copy-body">{path.summary}</p>
                </div>

                <div className="mt-6 rounded-lg border border-purple-100 bg-brand-50/40 p-4 dark:border-purple-800/30 dark:bg-brand-950/20">
                  <p className="text-sm font-semibold copy-heading">{path.share.heading}</p>
                  <ul className="mt-3 space-y-2">
                    {path.share.items.map((entry) => (
                      <li key={entry} className="type-small flex gap-2.5 copy-body">
                        <Check
                          className="mt-1 h-4 w-4 flex-none text-brand-600 dark:text-brand-300"
                          aria-hidden="true"
                        />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                  {path.share.note && <p className="type-small mt-3 copy-body">{path.share.note}</p>}
                </div>

                <div>
                  {path.facts.length > 0 && (
                    <ul aria-label={path.factsLabel} className="mt-5 flex flex-wrap gap-2">
                      {path.facts.map((fact) => (
                        <li key={fact} className={pill}>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 border-t border-purple-100/70 pt-6 dark:border-purple-800/30">
                  <LinkButton
                    href={path.cta.href}
                    data-cta={path.cta.analytics}
                    data-cta-section={section}
                    className="w-full sm:w-auto"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    {path.cta.label}
                  </LinkButton>
                </div>

                {/* Below the main button: secondary links (full-time) or a plain, non-focusable summary (freelance). */}
                <div>
                  {path.footnote && <p className="type-small mt-4 copy-body">{path.footnote}</p>}
                  {path.links.length > 0 && (
                    <ul className="mt-5 flex flex-wrap justify-between gap-x-3 gap-y-3 sm:justify-start sm:gap-x-6">
                      {path.links.map((link) => (
                        <li key={link.href}>
                          <TextLink link={link} section={section} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Icons for the phone timeline markers, in step order (the homepage Experience timeline uses icon markers).
const approachIcons: readonly LucideIcon[] = [MessagesSquare, ClipboardList, Code2, PackageCheck]

// Process steps. Phones: the homepage Experience-timeline feel — a bold continuous brand gradient line,
// ringed icon markers with a soft pulse, and each step in a white card opening with a tinted "Step" pill,
// on the homepage's violet/pink wash. From lg: one homepage card (accent bar) with four divided columns.
function Approach({
  approach,
  freelanceContactHref,
}: {
  approach: HirePageSections["approach"]
  freelanceContactHref: string
}) {
  return (
    <section
      id={approach.id ?? "approach"}
      aria-labelledby="approach-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-purple-100/70 bg-gradient-to-b from-white via-purple-50/40 to-pink-50/40 py-16 dark:border-purple-800/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 md:py-24 lg:bg-none lg:bg-white dark:lg:bg-none dark:lg:bg-gray-950"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-20 lg:hidden"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-40 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 blur-3xl dark:from-purple-600/30 dark:to-pink-600/30" />
        <div className="absolute bottom-24 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/30 to-purple-400/40 blur-3xl dark:from-blue-600/25 dark:to-purple-600/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id="approach-heading"
          label={approach.label ?? "Process"}
          title={approach.title ?? "How we can approach your project"}
          intro={approach.intro}
          icon={ListChecks}
        />
        <div className="relative mx-auto mt-10 max-w-xl md:mt-12 lg:max-w-none lg:overflow-hidden lg:rounded-lg lg:border lg:border-purple-100 lg:bg-white/90 lg:shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_45px_rgba(124,58,237,0.07)] lg:backdrop-blur-sm lg:dark:border-purple-800/30 lg:dark:bg-gray-950/55 lg:dark:shadow-none">
          <div className="hidden lg:block">
            <AccentBar />
          </div>
          {/* Phone timeline line: continuous, behind the markers. */}
          <span
            className="absolute bottom-6 left-5 top-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 shadow-lg shadow-purple-500/20 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 lg:hidden"
            aria-hidden="true"
          />
          <ol className="grid gap-6 lg:grid-cols-4 lg:gap-0">
            {approach.steps.map((step, index) => {
              const Icon = approachIcons[index]
              const number = String(index + 1).padStart(2, "0")
              return (
                <li
                  key={step.title}
                  className="relative pl-14 border-purple-100/70 dark:border-purple-800/30 lg:p-6 lg:[&:not(:last-child)]:border-r"
                >
                  {/* Phone marker: ringed icon with a soft pulse, like the homepage timeline. */}
                  <span
                    className="absolute left-5 top-5 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center lg:hidden"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 rounded-full bg-purple-500/30 motion-safe:animate-ping motion-safe:[animation-duration:2.5s] dark:bg-purple-400/30" />
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-4 border-purple-500 bg-white shadow-md dark:border-purple-400 dark:bg-gray-800">
                      {Icon && <Icon className="h-3.5 w-3.5 text-purple-600 dark:text-purple-300" />}
                    </span>
                  </span>

                  {/* Desktop marker: the outlined number from the approved card layout. */}
                  <span
                    className="hidden h-7 w-7 items-center justify-center rounded-full border-2 border-brand-200 text-xs font-bold tabular-nums text-brand-700 dark:border-brand-700 dark:text-brand-300 lg:flex"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>

                  <div className="min-w-0 rounded-xl border border-purple-100 bg-white p-5 shadow-md shadow-purple-500/5 dark:border-gray-700 dark:bg-gray-800 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent">
                    <span className="mb-3 inline-flex rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-xs font-semibold text-purple-800 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-purple-200 lg:hidden">
                      Step {number}
                    </span>
                    <h3 className="type-card copy-heading lg:mt-5">{step.title}</h3>
                    <p className="type-small mt-2 copy-body">{step.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {approach.ctaLabel && (
          <div className="mt-10 flex justify-center md:mt-12">
            <LinkButton
              href={freelanceContactHref}
              variant="line"
              data-cta="discuss_your_project"
              data-cta-section="approach"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {approach.ctaLabel}
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  )
}

// Brand icons and colours, as in the homepage technology strip. null = monochrome mark (follows the theme).
// Generic marks (REST APIs, React Navigation, Firestore, Firebase Storage) use the portfolio violet or the
// Firebase amber rather than an imitation logo.
const techIcons: Record<TechIcon, { Icon: IconType; color: string | null }> = {
  react: { Icon: SiReact, color: "#61DAFB" },
  reactNative: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: null },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#1572B6" },
  redux: { Icon: SiRedux, color: "#764ABC" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  restApi: { Icon: TbApi, color: "#7C3AED" },
  reactRouter: { Icon: SiReactrouter, color: "#CA4245" },
  navigation: { Icon: TbRoute, color: "#7C3AED" },
  vite: { Icon: SiVite, color: "#646CFF" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  styledComponents: { Icon: SiStyledcomponents, color: "#DB7093" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: null },
  firebase: { Icon: SiFirebase, color: "#FFA000" },
  firestore: { Icon: TbDatabase, color: "#FFA000" },
  storage: { Icon: TbCloudUpload, color: "#FFA000" },
  wordpress: { Icon: SiWordpress, color: "#21759B" },
  elementor: { Icon: SiElementor, color: "#92003B" },
  shopify: { Icon: SiShopify, color: "#5E8E3E" },
  // Liquid has no brand mark in the icon set: template braces in the portfolio violet.
  liquid: { Icon: TbBraces, color: "#7C3AED" },
  json: { Icon: SiJson, color: null },
  // Shopify tooling and store setup have no brand marks of their own: generic icons in Shopify green.
  cli: { Icon: TbTerminal2, color: "#5E8E3E" },
  themeEditor: { Icon: TbTemplate, color: "#5E8E3E" },
  metafields: { Icon: TbListDetails, color: "#5E8E3E" },
  collections: { Icon: TbFilter, color: "#5E8E3E" },
  apps: { Icon: TbApps, color: "#5E8E3E" },
  shipping: { Icon: TbTruckDelivery, color: "#5E8E3E" },
  seo: { Icon: TbSeo, color: "#5E8E3E" },
  // The WooCommerce mark is a wide wordmark that shrinks to a sliver in a square tile: a cart in its purple.
  woocommerce: { Icon: TbShoppingCart, color: "#96588A" },
  elementorPro: { Icon: SiElementor, color: "#92003B" },
  // WordPress tooling and site setup have no brand marks of their own: generic icons in WordPress blue.
  wpThemes: { Icon: TbLayout, color: "#21759B" },
  plugins: { Icon: TbPlug, color: "#21759B" },
  forms: { Icon: TbForms, color: "#21759B" },
  wpSeo: { Icon: TbSeo, color: "#21759B" },
  breakpoints: { Icon: TbDevices, color: "#21759B" },
  hosting: { Icon: TbWorldWww, color: "#21759B" },
  analytics: { Icon: SiGoogleanalytics, color: "#E37400" },
  performance: { Icon: TbBolt, color: "#21759B" },
}

// Same tile as the homepage technology strip, without its drag/scroll behaviour (static list here).
function TechPill({ name, breakableName, kind, icon }: TechItem) {
  const { Icon, color } = techIcons[icon]
  return (
    <li className="group relative flex min-h-16 min-w-0 items-center gap-3 min-[360px]:max-sm:[&:last-child:nth-child(odd)]:col-span-2 overflow-hidden rounded-lg border border-purple-100/80 bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_28px_rgba(124,58,237,0.055)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_18px_38px_rgba(124,58,237,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-purple-800/35 dark:bg-gray-950/70 dark:shadow-none dark:hover:border-brand-700/70 sm:p-3.5">
      <span
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent1-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-500 dark:to-accent1-500"
        aria-hidden="true"
      />
      <span
        className={cn(
          "flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-gray-100 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none dark:border-gray-800",
          !color && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
        )}
        style={color ? { backgroundColor: `${color}1a` } : undefined}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" style={color ? { color } : undefined} />
      </span>
      <span className="min-w-0">
        <span className="block break-words text-sm font-semibold leading-tight copy-heading">
          {breakableName ?? name}
        </span>
        <span className="mt-1 block text-xs leading-tight text-gray-500 dark:text-gray-400">{kind}</span>
      </span>
    </li>
  )
}

// One full-width grid of homepage technology-strip tiles: five per row on desktop, two on phones (one below
// 360px, where a long name such as "styled-components" cannot fit half the width).
function Technologies({ technologies }: { technologies: HirePageSections["technologies"] }) {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_88%_75%,rgba(219,39,119,0.07),transparent_34%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_88%_75%,rgba(236,72,153,0.12),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id="technologies-heading"
          label={technologies.label ?? "Technology"}
          title={technologies.title ?? "Technologies I work with"}
          intro={technologies.intro}
          icon={Code2}
        />

        <ul
          aria-label="Technologies"
          className={cn(
            "mt-10 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:mt-12 lg:gap-4",
            // A short list stays a compact, centred pair instead of padding a five-column grid.
            technologies.items.length <= 2
              ? "mx-auto max-w-xl"
              : "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
          )}
        >
          {technologies.items.map((item) => (
            <TechPill key={item.name} {...item} />
          ))}
        </ul>

        {technologies.note && (
          <p className="type-small mx-auto mt-6 max-w-2xl text-center copy-body">{technologies.note}</p>
        )}

        <div className="mt-10 flex justify-center">
          <LinkButton href="/skills" variant="line" icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore my skills
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

// Everything between a hire page's hero and its FAQ, in the approved order.
export function HirePageSectionsView({ sections }: { sections: HirePageSections }) {
  return (
    <>
      {/* Hidden on phones, where the page reads straight down; shown from sm up. */}
      <div className="hidden sm:block">
        <PageSectionNav items={sections.nav} ariaLabel={sections.navLabel} />
      </div>
      <SelectedWork work={sections.work} />
      <Capabilities
        capabilities={sections.capabilities}
        freelanceContactHref={sections.freelanceContactHref}
      />
      <WorkWithMe engagement={sections.engagement} />
      <Approach approach={sections.approach} freelanceContactHref={sections.freelanceContactHref} />
      <Technologies technologies={sections.technologies} />
    </>
  )
}
