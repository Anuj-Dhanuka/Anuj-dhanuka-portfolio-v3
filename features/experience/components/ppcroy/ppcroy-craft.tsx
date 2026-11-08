import {
  ArrowRight,
  Check,
  Copy,
  Eye,
  FileCode2,
  ListOrdered,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PersonStanding,
  Rocket,
  Search,
  Workflow,
} from "lucide-react"

import { SectionBackdrop } from "@/components/shared/centered-section-header"
import { Reveal } from "@/components/shared/reveal"
import { LinkButton } from "@/components/ui/link-button"
import { AccentBar, homeCardLift } from "@/features/experience/components/experience-card-styles"
import {
  CheckList,
  LeftSectionHeader,
  LinedSectionHeader,
  PpcroySection,
  PpcroySectionShell,
  SectionClosing,
} from "@/features/experience/components/ppcroy/ppcroy-section"
import { PlatformTabs } from "@/features/experience/components/ppcroy/ppcroy-platform-tabs"
import { ppcroyDesign, ppcroyPlatforms, ppcroyProcess, ppcroySeo } from "@/features/experience/data/ppcroy"
import { cn } from "@/lib/utils"

const principleIcons = {
  hierarchy: ListOrdered,
  consistency: Copy,
  responsive: MonitorSmartphone,
  clarity: Eye,
  accessibility: PersonStanding,
}

// Hand-drawn orbit: the five principles circle one centre idea. Strokes run through a light SVG
// turbulence filter so they read as sketched; labels are HTML so they use the type tokens. The dashed
// orbit turns slowly with the hero's orbit keyframes and stays still for reduced-motion visitors.
// Hidden on phones, where it is too cramped; the principle cards below carry the same content.
function PrinciplesDiagram() {
  const { principles, diagram } = ppcroyDesign
  const nodes = principles.map((item, index) => {
    const angle = (-90 + (360 / principles.length) * index) * (Math.PI / 180)
    const at = (r: number) => ({ x: 50 + r * Math.cos(angle), y: 50 + r * Math.sin(angle) })
    // Spokes run from the centre circle's edge to just short of each node.
    return { ...item, ...at(38), from: at(19), to: at(32) }
  })

  return (
    <figure
      aria-label={`${diagram.center} ${diagram.caption}: ${principles.map((item) => item.title).join(", ")}`}
      className="relative mx-auto aspect-square w-full max-w-[38rem]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-500/20 to-accent1-500/15 blur-3xl"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand-300 dark:text-brand-700"
        aria-hidden="true"
      >
        <defs>
          <filter id="ppcroy-sketch">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="0.5" />
          </filter>
        </defs>
        <g filter="url(#ppcroy-sketch)" fill="none" stroke="currentColor" strokeLinecap="round">
          <g
            className="motion-safe:[animation:hero-orbit-clockwise_120s_linear_infinite]"
            style={{ transformOrigin: "50px 50px" }}
          >
            <circle cx="50" cy="50" r="38" strokeWidth="0.45" strokeDasharray="2.2 1.8" />
          </g>
          {nodes.map((node) => (
            <line
              key={node.title}
              x1={node.from.x}
              y1={node.from.y}
              x2={node.to.x}
              y2={node.to.y}
              strokeWidth="0.35"
              strokeDasharray="1.2 1.4"
            />
          ))}
          <circle cx="50" cy="50" r="18" strokeWidth="0.5" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-accent1-50 px-3 text-center shadow-[0_18px_45px_rgba(124,58,237,0.12)] dark:from-brand-950/60 dark:to-accent1-950/40 dark:shadow-none">
        <span className="type-small font-semibold text-brand-700 dark:text-brand-300">{diagram.center}</span>
        <span className="type-caption mt-1 copy-body">{diagram.caption}</span>
      </div>

      {nodes.map((node) => {
        const Icon = principleIcons[node.icon]
        return (
          <div
            key={node.title}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-brand-100 bg-white py-1.5 pl-1.5 pr-3 shadow-[0_8px_24px_rgba(124,58,237,0.12)] dark:border-brand-800/60 dark:bg-gray-950 dark:shadow-none"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300 sm:h-8 sm:w-8">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="type-caption font-semibold copy-heading">{node.title}</span>
          </div>
        )
      })}
    </figure>
  )
}

export function PpcroyDesign() {
  return (
    <PpcroySectionShell id="design" tone="plain">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <LeftSectionHeader id="design" icon={Palette} label={ppcroyDesign.label} title={ppcroyDesign.title}>
            <p className="type-body copy-body">{ppcroyDesign.intro}</p>
            <p className="type-body copy-body">{ppcroyDesign.body}</p>
          </LeftSectionHeader>

          <h3 className="type-card mt-8 copy-heading">{ppcroyDesign.questionsTitle}</h3>
          <CheckList items={ppcroyDesign.questions} className="sm:grid-cols-2" />
        </Reveal>

        <Reveal delay={0.05} className="hidden sm:block">
          <PrinciplesDiagram />
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <h3 className="type-card mt-12 copy-heading">{ppcroyDesign.principlesTitle}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ppcroyDesign.principles.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                "relative overflow-hidden p-5",
                homeCardLift,
                index === 4 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <AccentBar />
              <h4 className="type-card copy-heading">{item.title}</h4>
              <p className="type-small mt-2 copy-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.05} className="mt-10 flex justify-center">
        <LinkButton
          href={ppcroyDesign.cta.href}
          data-cta="uiux_case_study"
          data-cta-section="design_judgment"
          variant="outline"
          icon={<ArrowRight className="h-4 w-4" />}
        >
          {ppcroyDesign.cta.label}
        </LinkButton>
      </Reveal>
    </PpcroySectionShell>
  )
}

// Minimal HTML colouring in the site palette: tags pink, attribute names violet, values white, text muted.
function HighlightedHtml({ code }: { code: string }) {
  const parts = code.split(/(<\/?[a-z0-9]+|\s[a-z-]+=|"[^"]*"|\/?>)/g).filter(Boolean)
  return (
    <>
      {parts.map((part, index) => {
        const tone = /^<\/?[a-z]|^\/?>$/.test(part)
          ? "text-accent1-300"
          : /^\s[a-z-]+=$/.test(part)
            ? "text-brand-300"
            : part.startsWith('"')
              ? "text-white"
              : "text-white/55"
        return (
          <span key={index} className={tone}>
            {part}
          </span>
        )
      })}
    </>
  )
}

export function PpcroySeo() {
  return (
    <PpcroySection
      id="seo"
      tone="tint"
      icon={Search}
      label={ppcroySeo.label}
      title={ppcroySeo.title}
      intro={ppcroySeo.intro}
    >
      <Reveal delay={0.05}>
        {/* The one bold element: the page's source, each line led by a dashed rule to the practice it covers. */}
        <figure
          aria-label={`${ppcroySeo.sourceTitle}, with the ${ppcroySeo.practicesTitle.toLowerCase()}`}
          className="relative mt-12 overflow-hidden rounded-xl bg-gradient-to-br from-brand-950 via-brand-950 to-accent1-950 shadow-[0_30px_80px_rgba(46,16,101,0.35)] ring-1 ring-white/10"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent1-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 px-4 sm:px-5">
            <p className="flex items-center gap-2 border-b-2 border-accent1-400 py-3 font-mono text-[13px] text-white">
              <FileCode2 className="h-4 w-4 text-accent1-300" aria-hidden="true" />
              {ppcroySeo.fileName}
            </p>
            <p className="type-small hidden font-semibold text-white/80 sm:block">
              {ppcroySeo.practicesTitle}
            </p>
          </div>

          <ol className="relative py-4">
            {ppcroySeo.source.map((line, index) => (
              <li
                key={index}
                className={cn(
                  "flex flex-col gap-1.5 px-4 py-1 sm:px-5 lg:flex-row lg:items-center lg:gap-4",
                  line.practices && "transition-colors hover:bg-white/[0.04]",
                )}
              >
                <div className="flex min-w-0 items-baseline gap-4">
                  <span
                    className="w-5 flex-none select-none text-right font-mono text-[12px] text-white/30"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <code
                    className="min-w-0 break-words font-mono text-[13px] leading-6 lg:whitespace-nowrap"
                    style={{ paddingLeft: `${line.depth * 1.25}rem` }}
                  >
                    <HighlightedHtml code={line.code} />
                  </code>
                </div>
                {line.practices && (
                  <>
                    <span
                      className="hidden h-px min-w-8 flex-1 border-t border-dashed border-white/20 lg:block"
                      aria-hidden="true"
                    />
                    <span
                      className="flex flex-col gap-1.5 pl-9 lg:!ml-0 lg:flex-none lg:pl-0"
                      style={{ marginLeft: `${line.depth * 1.25}rem` }}
                    >
                      {line.practices.map((practice) => (
                        <span
                          key={practice}
                          className="type-caption inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-2.5 py-1 font-semibold text-white"
                        >
                          <Check className="h-3.5 w-3.5 flex-none text-accent1-300" aria-hidden="true" />
                          {practice}
                        </span>
                      ))}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </figure>
      </Reveal>
    </PpcroySection>
  )
}

export function PpcroyPlatforms() {
  return (
    // Same header and backdrop as the homepage Technology Stack section.
    <PpcroySectionShell id="platforms" tone="plain" backdrop={<SectionBackdrop watermark="PLATFORMS" />}>
      <Reveal>
        <LinedSectionHeader
          id="platforms"
          label={ppcroyPlatforms.label}
          title={ppcroyPlatforms.title}
          intro={ppcroyPlatforms.intro}
        />
      </Reveal>
      <Reveal delay={0.05} className="mt-12">
        <PlatformTabs />
      </Reveal>
    </PpcroySectionShell>
  )
}

// A staircase from the first conversation to launch: on extra-large screens each step stands on a bar
// that rises and deepens towards a full brand-gradient finish; smaller screens get a vertical list with a
// progress bar that fills step by step. The bars are decorative; the numbered list carries the content.
// Brand palette steps from pale to deep in light mode, and from deep to bright in dark mode, so the
// staircase always climbs steadily to the signature gradient.
const stairTones = [
  "bg-brand-100 dark:bg-brand-900/50",
  "bg-brand-200 dark:bg-brand-900",
  "bg-brand-300 dark:bg-brand-800",
  "bg-brand-400 dark:bg-brand-700",
  "bg-brand-500 dark:bg-brand-600",
  "bg-brand-600 dark:bg-brand-500",
  "bg-brand-700 dark:bg-brand-400",
  "bg-gradient-to-r from-brand-600 to-accent1-600",
]

export function PpcroyProcess() {
  const { steps } = ppcroyProcess
  const share = (index: number) => (index + 1) / steps.length

  return (
    <PpcroySection
      id="process"
      tone="tint"
      icon={Workflow}
      label={ppcroyProcess.label}
      title={ppcroyProcess.title}
    >
      <Reveal delay={0.05}>
        {/* Phones stack the two ends with a short dashed link; wider screens run them along one line. */}
        <div className="mt-12 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="type-small inline-flex flex-none items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1.5 font-semibold copy-heading shadow-sm dark:border-brand-800/40 dark:bg-gray-950">
            <MessagesSquare className="h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden="true" />
            {ppcroyProcess.from}
          </span>
          <span
            className="ml-5 h-4 border-l border-dashed border-brand-300 dark:border-brand-700 sm:hidden"
            aria-hidden="true"
          />
          <span
            className="relative hidden h-px flex-1 border-t border-dashed border-brand-300 dark:border-brand-700 sm:block"
            aria-hidden="true"
          >
            <ArrowRight className="absolute -right-1 -top-2 h-4 w-4 text-brand-400" />
          </span>
          <span className="type-small inline-flex flex-none items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 px-3 py-1.5 font-semibold text-white shadow-lg shadow-brand-500/15">
            <Rocket className="h-4 w-4" aria-hidden="true" />
            {ppcroyProcess.to}
          </span>
        </div>

        <ol className="mt-10 space-y-8 xl:grid xl:grid-cols-8 xl:gap-x-3 xl:space-y-0">
          {steps.map((step, index) => {
            const last = index === steps.length - 1
            const number = String(index + 1).padStart(2, "0")
            return (
              <li key={step.title} className="flex gap-4 xl:flex-col xl:gap-0">
                <span
                  className="type-small flex h-10 w-10 flex-none items-center justify-center rounded-full border border-brand-300 bg-white font-semibold text-brand-700 dark:border-brand-700 dark:bg-gray-950 dark:text-brand-300 xl:hidden"
                  aria-hidden="true"
                >
                  {number}
                </span>

                {/* The staircase: every column shares one height, so each title sits exactly on its bar
                    and the titles climb in an even diagonal; descriptions all start on the baseline.
                    It holds the only heading per step: visually hidden below xl, where the list title shows. */}
                <div className="sr-only flex-col justify-end border-b border-brand-200 dark:border-brand-800 xl:not-sr-only xl:flex xl:h-[19rem]">
                  <p className="type-small font-semibold text-brand-700 dark:text-brand-300">{number}</p>
                  <h3 className="type-card mb-3 copy-heading">{step.title}</h3>
                  <span
                    className={cn("flex items-start justify-center rounded-t-lg pt-3", stairTones[index])}
                    style={{ height: `${2.5 + index * 1.75}rem` }}
                    aria-hidden="true"
                  >
                    {last && <Rocket className="h-5 w-5 text-white" />}
                  </span>
                </div>

                <div className="min-w-0 flex-1 xl:pt-4">
                  <p className="type-card copy-heading xl:hidden" aria-hidden="true">
                    {step.title}
                  </p>
                  <p className="type-small mt-2 copy-body xl:mt-0">{step.body}</p>
                  {/* Progress towards launch on smaller screens. */}
                  <span
                    className="mt-3 block h-1 overflow-hidden rounded-full bg-brand-100 dark:bg-brand-900/40 xl:hidden"
                    aria-hidden="true"
                  >
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-brand-600 to-accent1-600"
                      style={{ width: `${share(index) * 100}%` }}
                    />
                  </span>
                </div>
              </li>
            )
          })}
        </ol>
      </Reveal>
      <SectionClosing>{ppcroyProcess.closing}</SectionClosing>
      <Reveal delay={0.05} className="mt-6 flex justify-center">
        <LinkButton
          href={ppcroyProcess.cta.href}
          data-cta="explore_projects"
          data-cta-section="process"
          icon={<ArrowRight className="h-4 w-4" />}
        >
          {ppcroyProcess.cta.label}
        </LinkButton>
      </Reveal>
    </PpcroySection>
  )
}
