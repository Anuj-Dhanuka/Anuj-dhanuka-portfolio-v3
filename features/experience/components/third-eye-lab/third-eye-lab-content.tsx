import Image from "next/image"
import {
  ArrowRight,
  Briefcase,
  Globe,
  Smartphone,
  BookOpen,
  CircleCheck,
  Download,
  LayoutGrid,
  Route,
  Timer,
  TrendingUp,
  Footprints,
  Rocket,
} from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { StatsStrip } from "@/components/shared/stats-strip"
import { LinkButton } from "@/components/ui/link-button"
import {
  AccentBar,
  homeCard,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import {
  FoundationsDiagram,
  foundationMarker,
} from "@/features/experience/components/third-eye-lab/foundations-diagram"
import { PlayWhenVisible } from "@/features/experience/components/third-eye-lab/play-when-visible"
import {
  glassCard,
  LeftSectionHeader,
  PpcroySection,
  PpcroySectionShell,
} from "@/features/experience/components/ppcroy/ppcroy-section"
import { cn } from "@/lib/utils"
import {
  thirdEyeLabBeginning,
  thirdEyeLabDelivery,
  thirdEyeLabFoundations,
  thirdEyeLabJourney,
  thirdEyeLabProgression,
  thirdEyeLabProof,
} from "@/features/experience/data/third-eye-lab"

const progressionIcons = [Smartphone, Globe, Briefcase] as const
const journeyIcons = [LayoutGrid, Download, Timer, CircleCheck] as const

export function ThirdEyeLabContent() {
  const { timeline } = thirdEyeLabDelivery

  return (
    <>
      <StatsStrip stats={thirdEyeLabProof} size="compact" ariaLabel="3rd Eye Lab internship at a glance" />

      {/* Tops up the stats strip's own bottom padding to the standard 64px/96px section spacing, as on PPCROY. */}
      <PpcroySectionShell id="beginning" tone="plain" className="pt-4 md:pt-8">
        <Reveal>
          {/* Case-study overview. DOM order (photo, story, facts) is the phone order; large screens put the
              story left and the photo right, with the facts card overlapping the photo's lower corner. */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="lg:col-start-2 lg:row-start-1 lg:pb-28">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border border-purple-100 shadow-[0_18px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/30 lg:mr-12 lg:aspect-[16/11]">
                <Image
                  src={thirdEyeLabBeginning.image.src}
                  alt={thirdEyeLabBeginning.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>

            <div className="lg:col-start-1 lg:row-start-1">
              <LeftSectionHeader
                id="beginning"
                icon={Footprints}
                label={thirdEyeLabBeginning.label}
                title={thirdEyeLabBeginning.title}
              >
                {thirdEyeLabBeginning.body.map((paragraph) => (
                  <p key={paragraph} className="type-body copy-body">
                    {paragraph}
                  </p>
                ))}
              </LeftSectionHeader>
            </div>

            <dl
              className={cn(
                "relative z-10 grid gap-3 overflow-hidden p-5 sm:grid-cols-2 lg:col-start-2 lg:row-start-1 lg:w-72 lg:grid-cols-1 lg:self-end lg:justify-self-end",
                homeCard,
              )}
            >
              <AccentBar />
              {thirdEyeLabBeginning.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="type-label text-gray-500 dark:text-gray-400">{fact.label}</dt>
                  <dd className="type-small mt-1 font-semibold copy-heading">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </PpcroySectionShell>

      <PpcroySection
        id="application-flow"
        tone="tint"
        icon={Route}
        label={thirdEyeLabJourney.label}
        title={thirdEyeLabJourney.title}
        intro={thirdEyeLabJourney.intro}
      >
        <Reveal delay={0.05}>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {thirdEyeLabJourney.steps.map((step, index) => {
              const Icon = journeyIcons[index]
              return (
                // Icon beside the text on phones to save height; stacked once the cards sit in a row.
                <li
                  key={step.title}
                  className={cn("relative flex gap-4 overflow-hidden p-5 sm:p-6 md:block", homeCardLift)}
                >
                  <AccentBar />
                  <div className="flex items-start justify-between gap-4">
                    <span className={homeIconTile}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="type-caption hidden font-bold text-brand-600 dark:text-brand-400 md:block">
                      {step.number}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="type-card copy-heading md:mt-4">{step.title}</h3>
                    <p className="type-small mt-2 copy-body">{step.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>
        {/* Centred under the cards, as on PPCROY's design section. */}
        <Reveal delay={0.05} className="mt-10 flex justify-center">
          <LinkButton
            href={thirdEyeLabJourney.cta.href}
            data-cta="projects"
            data-cta-section="application_flow"
            variant="outline"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {thirdEyeLabJourney.cta.label}
          </LinkButton>
        </Reveal>
      </PpcroySection>

      {/* Text left: header, intro and the numbered foundations; the hand-drawn app sketch right. */}
      <PpcroySectionShell id="foundations" tone="plain">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <LeftSectionHeader
              id="foundations"
              icon={BookOpen}
              label={thirdEyeLabFoundations.label}
              title={thirdEyeLabFoundations.title}
            >
              <p className="type-body copy-body">{thirdEyeLabFoundations.intro}</p>
            </LeftSectionHeader>

            <ol className="mt-8 space-y-5">
              {thirdEyeLabFoundations.items.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className={foundationMarker} aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="type-card copy-heading">{item.title}</h3>
                    <p className="type-small mt-1 copy-body">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* As on PPCROY: a section CTA to the next useful page, here the full skills set. */}
            <LinkButton
              href={thirdEyeLabFoundations.cta.href}
              data-cta="skills"
              data-cta-section="foundations"
              variant="outline"
              className="mt-8 w-full sm:w-auto"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {thirdEyeLabFoundations.cta.label}
            </LinkButton>
          </Reveal>

          {/* Hidden on phones, where it is too cramped; the numbered list carries the same content. */}
          <Reveal delay={0.05} className="hidden sm:block">
            <PlayWhenVisible>
              <FoundationsDiagram />
            </PlayWhenVisible>
          </Reveal>
        </div>
      </PpcroySectionShell>

      {/* Dark section on the shared hero background, as on PPCROY: story left, one glass panel right. */}
      <PpcroySectionShell id="delivery" tone="dark">
        {/* DOM order (story, panel, button) is the phone order; large screens put the button under the story. */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
          <Reveal className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <LeftSectionHeader
              id="delivery"
              icon={Rocket}
              label={thirdEyeLabDelivery.label}
              title={thirdEyeLabDelivery.title}
              inverse
            >
              {thirdEyeLabDelivery.body.map((paragraph) => (
                <p key={paragraph} className="type-body copy-inverse-body">
                  {paragraph}
                </p>
              ))}
            </LeftSectionHeader>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className={cn("relative overflow-hidden p-6 sm:p-8", glassCard)}>
              <AccentBar />

              {/* Timeline: the assigned time as a track, delivered early, the rest used to go further. */}
              <p className="type-label text-brand-200">{timeline.track}</p>
              <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                <span className="w-[68%] rounded-full bg-brand-500" />
                <span className="ml-1 flex-1 rounded-full bg-[repeating-linear-gradient(135deg,rgba(244,114,182,0.55)_0_6px,transparent_6px_10px)]" />
              </div>
              <div className="mt-3 flex justify-between gap-4">
                <span className="type-caption font-semibold text-white">{timeline.delivered}</span>
                <span className="type-caption text-right font-semibold text-accent1-300">
                  {timeline.further}
                </span>
              </div>

              {/* The habits in order, as a connected stepper; the last is the payoff. */}
              <ol className="mt-8 border-t border-white/10 pt-8">
                {thirdEyeLabDelivery.principles.map((principle, index) => {
                  const last = index === thirdEyeLabDelivery.principles.length - 1
                  return (
                    <li key={principle} className="relative flex gap-4 pb-6 last:pb-0">
                      {last ? null : (
                        <span
                          className="absolute bottom-0 left-[13px] top-8 w-px bg-white/15"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={cn(
                          "flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 bg-gray-950 text-xs font-bold",
                          last ? "border-accent1-400 text-accent1-200" : "border-brand-400 text-brand-200",
                        )}
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <p className="type-small pt-1 font-semibold text-white">{principle}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </Reveal>
          {/* Contact right after the page's strongest claim, as on PPCROY's dark section. */}
          <Reveal delay={0.05} className="max-lg:-mt-2 lg:col-start-1 lg:row-start-2 lg:self-start">
            <LinkButton
              href={thirdEyeLabDelivery.cta.href}
              data-cta="talk_to_me"
              data-cta-section="delivery_mindset"
              variant="outlineInverse"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {thirdEyeLabDelivery.cta.label}
            </LinkButton>
          </Reveal>
        </div>
      </PpcroySectionShell>

      <PpcroySection
        id="progression"
        tone="tint"
        icon={TrendingUp}
        label={thirdEyeLabProgression.label}
        title={thirdEyeLabProgression.title}
        intro={thirdEyeLabProgression.intro}
      >
        {/* The Projects page "Different platforms" cards: icon tile, title, copy and a link at the foot. */}
        <Reveal delay={0.05}>
          <ul className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-3">
            {thirdEyeLabProgression.stages.map((stage, index) => {
              const Icon = progressionIcons[index]
              const current = index === 0
              return (
                <li
                  key={stage.company}
                  className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_22px_55px_rgba(91,33,182,0.11)] motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-800/40 dark:bg-gray-950 sm:p-7"
                >
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/50 dark:text-brand-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="type-card copy-heading">{stage.company}</h3>
                  <p className="type-caption mt-1 font-semibold text-brand-600 dark:text-brand-400">
                    {stage.focus} · {stage.period}
                  </p>
                  <p className="type-small mt-3 flex-1 copy-body">{stage.body}</p>
                  {current ? (
                    <p className="mt-6 inline-flex items-center gap-2 border-b-2 border-transparent py-2 text-sm font-semibold text-brand-700 dark:text-brand-300">
                      <span
                        className="h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-400"
                        aria-hidden="true"
                      />
                      You are here
                    </p>
                  ) : (
                    // Inline card link, as on the PPCROY platform cards: line variant, → for internal pages.
                    <LinkButton
                      href={stage.href}
                      data-cta="career_stage"
                      data-cta-section="career_path"
                      variant="line"
                      className="mt-6 self-start"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      {`Read the ${stage.company} story`}
                    </LinkButton>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </PpcroySection>
    </>
  )
}
