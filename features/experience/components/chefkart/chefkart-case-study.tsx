import Image from "next/image"
import {
  Check,
  ChefHat,
  CreditCard,
  FileText,
  LayoutDashboard,
  MapPin,
  PartyPopper,
  UtensilsCrossed,
} from "lucide-react"
import { Fragment } from "react"
import type { LucideIcon } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  CityPageIllustration,
  CooksIllustration,
  PartyIllustration,
  OperationsIllustration,
  PaymentsIllustration,
} from "@/features/experience/components/chefkart/chefkart-illustrations"
import { AccentBar, homeCard, homeFeatureCard } from "@/features/experience/components/experience-card-styles"
import type {
  CaseStudyBlock,
  CaseStudyDecision,
  ChefkartCaseStudy,
  ChefkartVisual,
} from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

// Eyebrow icon per case study.
const caseIcons: Record<string, LucideIcon> = {
  payments: CreditCard,
  "book-by-dish": UtensilsCrossed,
  "city-pages": MapPin,
  "cooks-near-me": ChefHat,
  "party-bookings": PartyPopper,
  operations: LayoutDashboard,
}

const illustrations = {
  payments: PaymentsIllustration,
  city: CityPageIllustration,
  cooks: CooksIllustration,
  party: PartyIllustration,
  operations: OperationsIllustration,
}

// Photos carry a caption; drawings are labelled as not real screens.
function CaseVisual({ visual }: { visual: ChefkartVisual }) {
  if (visual.type === "photo") {
    const { photo } = visual
    return (
      // The photo fills whatever height its row gives it, so it never leaves a gap beside the text.
      <figure className={cn("flex flex-col overflow-hidden", homeCard)}>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-64 lg:flex-1">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="type-small px-5 py-4 font-semibold copy-heading">{photo.caption}</figcaption>
      </figure>
    )
  }

  const Illustration = illustrations[visual.name]
  return (
    <figure className={cn("flex flex-col justify-center p-4", homeCard)}>
      <div className="rounded-md border border-purple-100 bg-white p-3 dark:border-purple-800/30 dark:bg-gray-100">
        <Illustration />
      </div>
      <figcaption className="mt-3 px-1">
        <span className="type-small block font-semibold copy-heading">{visual.caption}</span>
        <span className="type-caption block copy-body">Illustration, not a real ChefKart screen</span>
      </figcaption>
    </figure>
  )
}

function Block({
  block,
  narrow = false,
  className,
}: {
  block: CaseStudyBlock
  narrow?: boolean
  className?: string
}) {
  const List = block.ordered ? "ol" : "ul"
  // Numbered steps stay in one column so they read top to bottom.
  const twoColumns = !narrow && !block.ordered && (block.items?.length ?? 0) > 5
  return (
    <div className={cn("relative overflow-hidden p-5 sm:p-6", homeCard, className)}>
      <AccentBar />
      <h3 className="type-card copy-heading">{block.heading}</h3>
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="type-body mt-3 copy-body">
          {paragraph}
        </p>
      ))}
      {block.items && (
        <List className={cn("mt-4 grid gap-x-8 gap-y-3", twoColumns && "md:grid-cols-2")}>
          {block.items.map((item, index) => (
            <li key={item} className="type-small flex gap-2.5 copy-body">
              {block.ordered ? (
                <span className="type-caption flex h-5 w-5 flex-none items-center justify-center rounded-full border border-brand-200 font-semibold text-brand-700 dark:border-brand-800 dark:text-brand-300">
                  {index + 1}
                </span>
              ) : (
                <Check
                  className="mt-1 h-4 w-4 flex-none text-success-600 dark:text-success-500"
                  aria-hidden="true"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </List>
      )}
    </div>
  )
}

const outcomeTones = {
  success: "bg-success-500",
  pending: "bg-brand-400",
  fail: "bg-accent1-500",
}

// The one decision worth remembering, on the homepage featured card like the operations lane.
function Decision({ decision }: { decision: CaseStudyDecision }) {
  return (
    <div className={cn("p-5 sm:p-8", homeFeatureCard)}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div>
          <h3 className="type-card copy-heading">{decision.heading}</h3>
          {decision.paragraphs.map((paragraph) => (
            <p key={paragraph} className="type-body mt-3 copy-body">
              {paragraph}
            </p>
          ))}
        </div>
        {decision.outcomes && (
          <ul className="space-y-3" aria-label="How each case is handled">
            {decision.outcomes.map((outcome) => (
              <li
                key={outcome.label}
                className="flex items-start gap-3 rounded-lg border border-purple-100 bg-white/80 px-4 py-3 shadow-sm dark:border-purple-800/40 dark:bg-gray-950/45"
              >
                <span
                  className={cn("mt-1.5 h-2.5 w-2.5 flex-none rounded-full", outcomeTones[outcome.tone])}
                  aria-hidden="true"
                />
                <span>
                  <span className="type-small block font-semibold copy-heading">{outcome.label}</span>
                  <span className="type-small block copy-body">{outcome.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const scalePattern = /^(.+?): ([\d,]+) files changed, ([\d,]+) additions and ([\d,]+) deletions$/
const linesPattern = /^([\d,]+) surviving source lines, about ([\d.]+%) of the (.+?)’s current source$/

// Turns a scale string into a label, a big number and a small detail line.
function parseStat(item: string) {
  const change = item.match(scalePattern)
  if (change) {
    return {
      label: change[1],
      value: `${change[2]} files`,
      detail: `+${change[3]} lines added · −${change[4]} removed`,
    }
  }
  const lines = item.match(linesPattern)
  if (lines) {
    return {
      label: `My code still in the ${lines[3]}`,
      value: `${lines[1]} lines`,
      detail: `About ${lines[2]} of its current source`,
    }
  }
  return null
}

// Closing card: the size of the work as numbers, then what it shows. Works with one stat or several.
function Summary({ scale, demonstrates }: { scale?: readonly string[]; demonstrates?: string }) {
  // A single stat sits beside the takeaway instead of leaving an empty row.
  const sideBySide = scale?.length === 1 && Boolean(demonstrates)
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        homeCard,
        sideBySide && "md:grid md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]",
      )}
    >
      <AccentBar />
      {scale && (
        <div className="p-5 sm:p-6">
          <p className="type-label text-brand-700 dark:text-brand-300">Size of the work</p>
          <ul
            className={cn(
              // Stacked stats are split by rules on phones; side by side, by vertical rules.
              "mt-4 grid divide-y divide-purple-100 dark:divide-purple-800/30",
              !sideBySide && "sm:divide-x sm:divide-y-0",
              !sideBySide && (scale.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"),
            )}
          >
            {scale.map((item) => {
              const stat = parseStat(item)
              return (
                <li key={item} className="py-4 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0">
                  {stat ? (
                    <>
                      <p className="type-small font-semibold copy-heading">{stat.label}</p>
                      <p className="type-card-large mt-1 copy-heading">{stat.value}</p>
                      <p className="type-caption mt-1 copy-body">{stat.detail}</p>
                    </>
                  ) : (
                    <p className="type-small copy-body">{item}</p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {demonstrates && (
        <div
          className={cn(
            "h-full bg-brand-50/40 p-5 dark:bg-brand-950/20 sm:p-6",
            scale && "border-t border-purple-100 dark:border-purple-800/30",
            sideBySide && "md:border-l md:border-t-0",
          )}
        >
          <p className="type-label text-brand-700 dark:text-brand-300">What this shows</p>
          <p className="type-body mt-2 copy-body">{demonstrates}</p>
        </div>
      )}
    </div>
  )
}

export function CaseStudy({ study, index }: { study: ChefkartCaseStudy; index: number }) {
  const headingId = `${study.id}-heading`
  const decisionAfter = study.decision?.afterBlock ?? study.blocks.length - 1
  // With a visual, the first two blocks (problem + what I built) stack beside it so both
  // columns end level. Later, two adjacent text-only blocks share a row.
  const lead = study.visual ? Math.min(2, study.blocks.length) : 0
  // Short blocks (text only, or a list of up to four) sit side by side, up to three per row.
  const isShort = (i: number) =>
    i >= lead && i < study.blocks.length && (study.blocks[i].items?.length ?? 0) <= 4
  const textOnly = (i: number) => isShort(i) && !study.blocks[i].items
  const rows: number[][] = []
  for (let i = lead; i < study.blocks.length; i++) {
    const row = [i]
    while (row.length < 3 && isShort(row[0]) && isShort(i + 1) && decisionAfter !== i) {
      row.push(++i)
    }
    rows.push(row)
  }
  const decisionAfterLead = study.decision && lead > 0 && decisionAfter === lead - 1
  // With no numbers to show, a final short text block shares a row with the takeaway.
  const lastRow = rows[rows.length - 1]
  const pairSummary =
    !study.scale &&
    Boolean(study.demonstrates) &&
    lastRow?.length === 1 &&
    textOnly(lastRow[0]) &&
    !(study.decision && decisionAfter === lastRow[0])
  if (pairSummary) rows.pop()

  return (
    <section
      id={study.id}
      aria-labelledby={headingId}
      className={cn(
        "relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 py-16 dark:border-purple-800/30 md:py-24",
        // Alternate the two homepage section backgrounds.
        index % 2 === 0
          ? "bg-white dark:bg-gray-900"
          : "bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10",
      )}
    >
      {index % 2 === 0 && (
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
          aria-hidden="true"
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id={headingId}
          icon={caseIcons[study.id] ?? FileText}
          label={`Case study ${index + 1} · ${study.label}`}
          title={study.title}
          intro={study.summary}
        />

        <Reveal delay={0.05}>
          <div className="mt-10 space-y-6">
            {study.visual && lead > 0 && (
              <div
                className={cn(
                  "grid gap-6 lg:items-stretch",
                  // Drawings are tall, so they get a narrower column than photos.
                  study.visual.type === "illustration"
                    ? "lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",
                )}
              >
                <div className="flex flex-col gap-6">
                  {study.blocks.slice(0, lead).map((block, blockIndex) => (
                    // The last card grows to meet the bottom of the visual.
                    <Block
                      key={block.heading}
                      block={block}
                      narrow
                      className={blockIndex === lead - 1 ? "flex-1" : undefined}
                    />
                  ))}
                </div>
                <CaseVisual visual={study.visual} />
              </div>
            )}
            {decisionAfterLead && study.decision && <Decision decision={study.decision} />}

            {rows.map((row) => {
              const last = row[row.length - 1]
              return (
                <Fragment key={study.blocks[row[0]].heading}>
                  {row.length > 1 ? (
                    <div className={cn("grid gap-6", row.length === 2 ? "md:grid-cols-2" : "lg:grid-cols-3")}>
                      {row.map((i) => (
                        <Block key={study.blocks[i].heading} block={study.blocks[i]} />
                      ))}
                    </div>
                  ) : (
                    <Block block={study.blocks[row[0]]} />
                  )}
                  {study.decision && last === decisionAfter && <Decision decision={study.decision} />}
                </Fragment>
              )
            })}

            {pairSummary ? (
              <div className="grid gap-6 md:grid-cols-2">
                <Block block={study.blocks[lastRow[0]]} />
                <Summary demonstrates={study.demonstrates} />
              </div>
            ) : (
              (study.scale || study.demonstrates) && (
                <Summary scale={study.scale} demonstrates={study.demonstrates} />
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
