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
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  Code2,
  Component,
  CreditCard,
  Download,
  ExternalLink,
  FolderGit2,
  Globe,
  Handshake,
  Hash,
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
  PenLine,
  Scale,
  ShoppingBag,
  Smartphone,
  Store,
  SwatchBook,
  Type,
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
  homeCard,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import type {
  Capability,
  CapabilityIcon,
  DesignDetails as DesignDetailsContent,
  EngagementLink,
  HirePageSections,
  ComparisonOption,
  OptionComparison,
  PlatformChoices,
  TechIcon,
  TechItem,
  WorkItem,
  WorkVisual,
} from "@/features/hire-pages/types"
import { ProjectPhone } from "@/features/projects/components/project-phone"
import { ProjectLinks } from "@/features/projects/components/projects"
import { cn } from "@/lib/utils"

export const capabilityIcons: Record<CapabilityIcon, LucideIcon> = {
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
  edit: PenLine,
  handover: PackageCheck,
  typography: Type,
  consistency: Component,
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
        {work.note && (
          <p className="type-body mx-auto mt-14 max-w-3xl text-center copy-body md:mt-16">
            <LinkedText body={work.note.text} link={work.note.link} />
          </p>
        )}
      </div>
    </section>
  )
}

// Body text with one phrase as an inline link, so the destination is an ordinary crawlable anchor.
function LinkedText({ body, link }: { body: string; link: NonNullable<Capability["link"]> }) {
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
                  {link ? <LinkedText body={body} link={link} /> : body}
                </p>
              </li>
            )
          })}
        </ul>

        {capabilities.comparison && <Comparison comparison={capabilities.comparison} />}

        {/* With a separate platform-choice section, that section carries the buttons instead. */}
        {!capabilities.choices && (
          <ActionRow
            links={capabilities.comparison?.links ?? []}
            href={freelanceContactHref}
            label={capabilities.ctaLabel}
            shortLabel={capabilities.ctaShortLabel}
            section="capabilities"
          />
        )}
      </div>
    </section>
  )
}

// One row of line buttons: related-page links (if any), then the project enquiry. On phones they keep one
// row with short visible labels (the full label stays the accessible name).
function ActionRow({
  links,
  href,
  label,
  shortLabel,
  section,
}: {
  links: OptionComparison["links"]
  href: string
  label: string
  shortLabel?: string
  section: string
}) {
  return (
    <ul
      className={cn(
        "mt-10 flex items-center gap-x-1 min-[360px]:gap-x-3 sm:justify-center sm:gap-x-8",
        links.length > 0 ? "justify-between" : "justify-center",
      )}
    >
      {links.map((link) => (
        <li key={link.href}>
          <LinkButton
            href={link.href}
            variant="line"
            data-cta={ctaSlug(link.label)}
            className="whitespace-nowrap"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            <ResponsiveLabel label={link.label} shortLabel={link.shortLabel} />
          </LinkButton>
        </li>
      ))}
      <li>
        <LinkButton
          href={href}
          variant="line"
          data-cta="discuss_freelance_project"
          data-cta-section={section}
          className="whitespace-nowrap"
          icon={<ArrowUpRight className="h-4 w-4" />}
        >
          <ResponsiveLabel label={label} shortLabel={shortLabel} />
        </LinkButton>
      </li>
    </ul>
  )
}

// Visible text on phones, full label from sm up; the full label is always the accessible name.
function ResponsiveLabel({ label, shortLabel }: { label: string; shortLabel?: string }) {
  if (!shortLabel) return <>{label}</>
  return (
    <>
      <span className="sm:hidden" aria-hidden="true">
        {shortLabel}
      </span>
      <span className="sr-only sm:not-sr-only">{label}</span>
    </>
  )
}

// An option's brand mark in the tinted tile used by the technology tiles.
function OptionMark({ option, size = "md" }: { option: ComparisonOption; size?: "sm" | "md" }) {
  const { Icon, color } = techIcons[option.icon]
  return (
    <span
      className={cn(
        "flex flex-none items-center justify-center rounded-lg border border-gray-100 dark:border-gray-800",
        size === "md" ? "h-10 w-10" : "h-6 w-6 rounded-md",
        !color && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
      )}
      style={color ? { backgroundColor: `${color}1a` } : undefined}
      aria-hidden="true"
    >
      <Icon className={size === "md" ? "h-5 w-5" : "h-3.5 w-3.5"} style={color ? { color } : undefined} />
    </span>
  )
}

// Two options compared row by row inside the Services section, as one full-width homepage card (accent bar,
// brand-tinted header, icon tiles). One real table with column and row headers for screen readers; on
// phones it becomes stacked rows. Explicit ARIA table roles keep the semantics when the display changes,
// and each phone cell repeats its option name visibly (hidden from screen readers, which announce the
// header).
function Comparison({ comparison }: { comparison: OptionComparison }) {
  return (
    <div className="mt-16 md:mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <h3 id="comparison-heading" className="type-card-large copy-heading">
          {comparison.title}
        </h3>
        <p className="type-body mt-3 copy-body">{comparison.intro}</p>
      </div>

      <div className={cn("relative mt-8 overflow-hidden md:mt-10", homeCard)}>
        <AccentBar />
        <table role="table" aria-labelledby="comparison-heading" className="w-full table-fixed text-left">
          <thead role="rowgroup" className="hidden sm:table-header-group">
            <tr
              role="row"
              className="border-b border-purple-100/70 bg-brand-50/60 dark:border-purple-800/30 dark:bg-brand-950/20"
            >
              <th
                role="columnheader"
                scope="col"
                className="type-label w-[30%] px-6 py-5 align-middle text-brand-700 dark:text-brand-300 lg:w-[26%]"
              >
                {comparison.needLabel}
              </th>
              {comparison.options.map((option) => (
                <th
                  key={option.label}
                  role="columnheader"
                  scope="col"
                  className="border-l border-purple-100/70 px-6 py-5 align-middle dark:border-purple-800/30"
                >
                  <span className="flex items-center gap-3">
                    <OptionMark option={option} />
                    <span className="type-card copy-heading">{option.label}</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup" className="block sm:table-row-group">
            {comparison.rows.map((row) => {
              const Icon = capabilityIcons[row.icon]
              return (
                <tr
                  role="row"
                  key={row.need}
                  className="group block border-b border-purple-100/70 px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-brand-50/40 motion-reduce:transition-none dark:border-purple-800/30 dark:hover:bg-brand-950/15 sm:table-row sm:p-0"
                >
                  <th
                    role="rowheader"
                    scope="row"
                    className="block sm:table-cell sm:px-6 sm:py-6 sm:align-middle"
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn(homeIconTile, "h-10 w-10")}>
                        <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                      </span>
                      <span className="type-card copy-heading">{row.need}</span>
                    </span>
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      role="cell"
                      key={comparison.options[index].label}
                      className="type-body mt-4 block copy-body sm:mt-0 sm:table-cell sm:align-middle sm:border-l sm:border-purple-100/70 sm:px-6 sm:py-6 sm:dark:border-purple-800/30"
                    >
                      <span className="mb-1.5 flex items-center gap-2 sm:hidden" aria-hidden="true">
                        <OptionMark option={comparison.options[index]} size="sm" />
                        <span className="text-sm font-semibold copy-heading">
                          {comparison.options[index].label}
                        </span>
                      </span>
                      {value}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Platform choice as its own section after Services: the shared centred header, each platform described
// once in a full-width homepage card (three divided columns from lg, stacked with dividers on phones, each
// opening with its brand mark), the closing sentence, then the row of related-page links and the project
// enquiry. A light brand tint and top border separate it from Services; the option names are h3s.
function ChoicesSection({
  choices,
  freelanceContactHref,
  ctaLabel,
  ctaShortLabel,
}: {
  choices: PlatformChoices
  freelanceContactHref: string
  ctaLabel: string
  ctaShortLabel?: string
}) {
  return (
    <section
      id={choices.id}
      aria-labelledby={`${choices.id}-heading`}
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-purple-100/70 bg-brand-50/40 py-12 dark:border-purple-800/30 dark:bg-gray-900 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          reveal={false}
          id={`${choices.id}-heading`}
          label={choices.label}
          title={choices.title}
          icon={Scale}
        />
        <div className={cn("relative mt-10 overflow-hidden md:mt-12", homeCard)}>
          <AccentBar />
          <ul
            aria-labelledby={`${choices.id}-heading`}
            className="grid divide-y divide-purple-100/70 dark:divide-purple-800/30 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            {choices.options.map((option) => (
              <li
                key={option.label}
                className="p-5 transition-colors duration-300 hover:bg-brand-50/40 motion-reduce:transition-none dark:hover:bg-brand-950/15 sm:p-6 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <OptionMark option={option} />
                  <h3 className="type-card copy-heading">{option.label}</h3>
                </div>
                <p className="type-small mt-4 copy-body">{option.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="type-body mx-auto mt-8 max-w-2xl text-center copy-body">{choices.closing}</p>
        <ActionRow
          links={choices.links}
          href={freelanceContactHref}
          label={ctaLabel}
          shortLabel={ctaShortLabel}
          section="platform_choice"
        />
      </div>
    </section>
  )
}

// Small token-drawn visuals for the design-details bento tiles (no screenshots, project files or numbers),
// one per detail icon. Decorative: each tile's heading and text carry the meaning.
const bar = "block h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"

function SpecTile({ icon }: { icon: CapabilityIcon }) {
  switch (icon) {
    case "typography":
      // Type specimen: a gradient "Aa", heading and body lines, and a pink spacing redline between them.
      return (
        <div className="flex w-56 items-center gap-4">
          <span className="bg-gradient-to-br from-brand-600 to-accent1-600 bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent dark:from-brand-400 dark:to-accent1-400">
            Aa
          </span>
          <span className="relative flex flex-1 flex-col gap-1.5">
            <span className="block h-2.5 w-11/12 rounded-full bg-gray-800 dark:bg-gray-200" />
            <span className="block h-2.5 w-2/3 rounded-full bg-gray-800 dark:bg-gray-200" />
            <span className="relative my-1 ml-1 block h-3 w-px bg-accent1-500">
              <span className="absolute -left-1 top-0 h-px w-2.5 bg-accent1-500" />
              <span className="absolute -left-1 bottom-0 h-px w-2.5 bg-accent1-500" />
            </span>
            <span className={cn(bar, "w-full")} />
            <span className={cn(bar, "w-5/6")} />
            <span className={cn(bar, "w-3/5")} />
          </span>
        </div>
      )
    case "responsive":
      // Desktop, tablet and phone frames, each restacking the same blocks.
      return (
        <div className="flex items-end justify-center gap-3">
          {(
            [
              ["h-16 w-24", "grid-cols-3"],
              ["h-16 w-12", "grid-cols-2"],
              ["h-12 w-7", "grid-cols-1"],
            ] as const
          ).map(([size, cols]) => (
            <span
              key={size}
              className={cn(
                "flex flex-col gap-1 rounded-md border-2 border-gray-300 p-1 dark:border-gray-500",
                size,
              )}
            >
              <span className="block h-1 w-1/2 rounded-full bg-brand-500/70" />
              <span className={cn("grid flex-1 gap-0.5", cols)}>
                {Array.from({ length: cols === "grid-cols-1" ? 2 : cols === "grid-cols-2" ? 4 : 3 }).map(
                  (_, index) => (
                    <span key={index} className="rounded-[2px] bg-brand-100 dark:bg-brand-500/35" />
                  ),
                )}
              </span>
            </span>
          ))}
        </div>
      )
    case "interactive":
      // One button in three states: default, hover (gradient) and keyboard focus (offset ring).
      return (
        <div className="flex flex-col items-center gap-2">
          <span className="flex h-6 w-28 items-center justify-center rounded-md border border-brand-300 dark:border-brand-600">
            <span className="h-1.5 w-12 rounded-full bg-brand-400" />
          </span>
          <span className="flex h-6 w-28 items-center justify-center rounded-md bg-gradient-to-r from-brand-600 to-accent1-600 shadow-md shadow-purple-500/20">
            <span className="h-1.5 w-12 rounded-full bg-white/80" />
          </span>
          <span className="flex h-6 w-28 items-center justify-center rounded-md border border-brand-300 ring-2 ring-brand-500 ring-offset-2 ring-offset-white dark:border-brand-600 dark:ring-offset-gray-950">
            <span className="h-1.5 w-12 rounded-full bg-brand-400" />
          </span>
        </div>
      )
    case "consistency":
      // Repeated instances of one component; the main component is outlined like a Figma selection.
      return (
        <div className="grid w-56 grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "flex flex-col gap-1 rounded-md border bg-white p-1.5 dark:bg-gray-900",
                index === 0
                  ? "border-dashed border-brand-500 dark:border-brand-400"
                  : "border-purple-100 dark:border-purple-800/40",
              )}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand-500 to-accent1-500" />
              <span className="block h-1 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="block h-1 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700" />
            </span>
          ))}
        </div>
      )
    default:
      return null
  }
}

// Figma-style frame names shown above each frame's visual (decorative; the heading carries the meaning).
const frameNames: Partial<Record<CapabilityIcon, string>> = {
  typography: "Type scale",
  responsive: "Breakpoints",
  interactive: "States",
  consistency: "Components",
}

const handleClass =
  "absolute h-2 w-2 rounded-[2px] border border-brand-400 bg-gray-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"

// Text-led section between Services and Engagement: a compact dark "design canvas" in the homepage hero's
// palette (black in both themes via the `dark` class, so every `dark:` style and semantic text colour inside
// switches with it). The shared centred header (as on Process), then
// the four details sit in one row of Figma-like frames: frame label, a small token-drawn visual on a dotted
// artboard, heading and text, with selection handles and a violet outline on hover. On phones the frames
// become a swipeable, snapping row that shows the edge of the next frame, so the section stays about one
// screen tall, and the closing promise ends the section; every frame's copy is server-rendered and readable, and the row is keyboard-scrollable.
function DesignDetails({ details }: { details: DesignDetailsContent }) {
  const [titleStart, titleEnd] = details.titleAccent
    ? details.title.split(details.titleAccent)
    : [details.title, ""]
  return (
    <section
      id={details.id}
      aria-labelledby={`${details.id}-heading`}
      className="dark relative isolate scroll-mt-24 overflow-hidden border-t border-white/10 bg-gray-950 py-12 text-white sm:py-16 md:py-20"
    >
      {/* Hero-style glows: violet top-left, pink bottom-right. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(124,58,237,0.32),transparent_38%),radial-gradient(circle_at_92%_100%,rgba(219,39,119,0.22),transparent_38%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Same centred header as the other sections (Process included); inside this `dark` section it
            takes its dark styles. */}
        <CenteredSectionHeader
          reveal={false}
          id={`${details.id}-heading`}
          label={details.label}
          title={
            <>
              {titleStart}
              {details.titleAccent && <span className="hero-gradient-text">{details.titleAccent}</span>}
              {titleEnd}
            </>
          }
          intro={details.intro}
          icon={SwatchBook}
        />

        {/* Phones: a swipeable row (tabIndex so keyboard users can scroll it). md: 2×2. lg: one row of four. */}
        <ul
          tabIndex={0}
          aria-label={details.title}
          className="-mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 pt-2 [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:-mx-6 sm:mt-10 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:mt-12 lg:grid-cols-4"
        >
          {details.items.map(({ title, body, icon }, index) => (
            <li
              key={title}
              className="group relative flex w-[82%] flex-none snap-start flex-col rounded-lg border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/70 hover:bg-white/[0.06] motion-reduce:transition-none min-[480px]:w-[60%] md:w-auto"
            >
              <span aria-hidden="true">
                <span className={cn(handleClass, "-left-1 -top-1")} />
                <span className={cn(handleClass, "-right-1 -top-1")} />
                <span className={cn(handleClass, "-bottom-1 -left-1")} />
                <span className={cn(handleClass, "-bottom-1 -right-1")} />
              </span>
              <p
                className="flex items-center gap-1.5 px-1 pb-2 text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-brand-300 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <Hash className="h-3 w-3" />
                {String(index + 1).padStart(2, "0")} {frameNames[icon] ?? title}
              </p>
              {/* Artboard holding the frame's visual. */}
              <div
                className="flex h-28 items-center justify-center overflow-hidden rounded-md border border-white/[0.06] bg-gray-950/70 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:14px_14px]"
                aria-hidden="true"
              >
                <div className="origin-center scale-[0.85] transition-transform duration-300 group-hover:scale-90 motion-reduce:transition-none motion-reduce:group-hover:scale-[0.85]">
                  <SpecTile icon={icon} />
                </div>
              </div>
              <h3 className="type-card mt-4 px-1 text-white">{title}</h3>
              <p className="type-small mt-2 px-1 pb-1 text-gray-300">{body}</p>
            </li>
          ))}
        </ul>

        {/* The closing promise ends the section, centred under the frames. */}
        <p className="mx-auto mt-6 max-w-3xl md:mt-10 text-center text-sm font-semibold leading-6 text-white">
          <BadgeCheck className="mr-2 inline h-5 w-5 align-[-5px] text-brand-300" aria-hidden="true" />
          {details.closing}
        </p>
      </div>
    </section>
  )
}

const engagementIcons = { role: BriefcaseBusiness, project: Code2 } as const

// Two parallel path cards in the homepage card style. From lg each card is a five-row subgrid (intro,
// "Share:" box, availability, main button, secondary links), so rows and both main buttons line up even
// though only the full-time card has availability pills and secondary links.
export function WorkWithMe({ engagement }: { engagement: HirePageSections["engagement"] }) {
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
          title={engagement.title ?? "Two ways to work with me"}
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

// Icons for the phone timeline markers, in step order (three-step lists use the first three) (the homepage Experience timeline uses icon markers).
const approachIcons: readonly LucideIcon[] = [MessagesSquare, ClipboardList, Code2, PackageCheck]

// Process steps. Phones: the homepage Experience-timeline feel — a bold continuous brand gradient line,
// ringed icon markers with a soft pulse, and each step in a white card opening with a tinted "Step" pill,
// on the homepage's violet/pink wash. From lg: one homepage card (accent bar) with four divided columns.
export function Approach({
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
          <ol
            className={cn(
              "grid gap-6 lg:gap-0",
              // Three steps (the /hire overview) share the card in thirds; the role pages use four.
              approach.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
            )}
          >
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
function TechPill({ name, breakableName, kind, icon, className }: TechItem & { className?: string }) {
  const { Icon, color } = techIcons[icon]
  return (
    <li
      className={cn(
        "group relative flex min-h-16 min-w-0 items-center gap-3 min-[360px]:max-sm:[&:last-child:nth-child(odd)]:col-span-2 overflow-hidden rounded-lg border border-purple-100/80 bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_28px_rgba(124,58,237,0.055)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_1px_0_rgba(15,23,42,0.05),0_18px_38px_rgba(124,58,237,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-purple-800/35 dark:bg-gray-950/70 dark:shadow-none dark:hover:border-brand-700/70 sm:p-3.5",
        className,
      )}
    >
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
  const count = technologies.items.length
  // Seven or eight tiles: centred rows (two, three, then four per row) so the last row is not left hanging
  // under a five-column grid. A lone last tile still spans the row on phones.
  const centredRows = count >= 7 && count <= 8
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
            "mt-10 gap-3 md:mt-12 lg:gap-4",
            centredRows
              ? "mx-auto flex max-w-5xl flex-wrap justify-center"
              : "grid grid-cols-1 min-[360px]:grid-cols-2",
            // A short list stays a compact, centred pair instead of padding a five-column grid.
            !centredRows &&
              (count <= 2
                ? "mx-auto max-w-xl"
                : count <= 6
                  ? // Up to six tiles: two even rows of three rather than five plus a lone tile.
                    "mx-auto max-w-4xl sm:grid-cols-3"
                  : "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"),
          )}
        >
          {technologies.items.map((item) => (
            <TechPill
              key={item.name}
              {...item}
              className={
                centredRows
                  ? "w-full min-[360px]:w-[calc(50%-0.375rem)] min-[360px]:max-sm:[&:last-child:nth-child(odd)]:w-full sm:w-[calc((100%-1.5rem)/3)] lg:w-[calc((100%-3rem)/4)]"
                  : undefined
              }
            />
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
      {sections.capabilities.choices && (
        <ChoicesSection
          choices={sections.capabilities.choices}
          freelanceContactHref={sections.freelanceContactHref}
          ctaLabel={sections.capabilities.ctaLabel}
          ctaShortLabel={sections.capabilities.ctaShortLabel}
        />
      )}
      {sections.designDetails && <DesignDetails details={sections.designDetails} />}
      <WorkWithMe engagement={sections.engagement} />
      <Approach approach={sections.approach} freelanceContactHref={sections.freelanceContactHref} />
      <Technologies technologies={sections.technologies} />
    </>
  )
}
