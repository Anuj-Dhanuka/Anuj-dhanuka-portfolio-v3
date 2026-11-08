import { ArrowUpRight, Check, Code2, GitBranch, Layers3, Rocket, Smartphone, Sparkles } from "lucide-react"

import { PageSectionNav } from "@/components/shared/page-section-nav"
import { Reveal } from "@/components/shared/reveal"
import { StatsStrip } from "@/components/shared/stats-strip"
import { LinkButton } from "@/components/ui/link-button"
import {
  thirdEyeLabBeginning,
  thirdEyeLabDelivery,
  thirdEyeLabFoundations,
  thirdEyeLabJourney,
  thirdEyeLabProgression,
  thirdEyeLabProof,
} from "@/features/experience/data/third-eye-lab"

const sectionNav = [
  { href: "#beginning", label: "The first step" },
  { href: "#application-flow", label: "Application flow" },
  { href: "#foundations", label: "Foundations" },
  { href: "#delivery", label: "Delivery mindset" },
  { href: "#progression", label: "Career progression" },
] as const

const foundationIcons = [Smartphone, Layers3, Code2, Sparkles, GitBranch] as const

function SectionHeading({
  id,
  label,
  title,
  intro,
  inverse = false,
}: {
  id: string
  label: string
  title: string
  intro?: string
  inverse?: boolean
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className={`type-label ${inverse ? "text-brand-300" : "text-brand-700 dark:text-brand-300"}`}>
        {label}
      </p>
      <h2 id={id} className={`type-section mt-4 ${inverse ? "text-white" : "copy-heading"}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`type-body mx-auto mt-5 max-w-3xl ${inverse ? "text-gray-300" : "copy-body"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export function ThirdEyeLabContent() {
  return (
    <>
      <StatsStrip stats={thirdEyeLabProof} size="compact" ariaLabel="3rd Eye Lab internship at a glance" />
      <PageSectionNav items={sectionNav} ariaLabel="3rd Eye Lab experience sections" />

      <section
        id="beginning"
        aria-labelledby="beginning-heading"
        className="scroll-mt-28 border-b border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="type-label text-brand-700 dark:text-brand-300">{thirdEyeLabBeginning.label}</p>
              <h2 id="beginning-heading" className="type-display mt-4 copy-heading">
                {thirdEyeLabBeginning.title}
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600"
                aria-hidden="true"
              />
            </div>
            <div className="space-y-5">
              {thirdEyeLabBeginning.body.map((paragraph) => (
                <p key={paragraph} className="type-body copy-body">
                  {paragraph}
                </p>
              ))}
              <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5 dark:border-brand-900/50 dark:bg-brand-950/20 sm:p-6">
                <p className="type-small font-semibold text-brand-900 dark:text-brand-100">
                  The page intentionally focuses on my learning and contribution. Company source code,
                  internal screenshots and unsupported product claims remain private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="application-flow"
        aria-labelledby="application-flow-heading"
        className="relative scroll-mt-28 overflow-hidden border-b border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="application-flow-heading"
            label={thirdEyeLabJourney.label}
            title={thirdEyeLabJourney.title}
            intro={thirdEyeLabJourney.intro}
          />

          <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {thirdEyeLabJourney.steps.map((step, index) => (
              <li key={step.title} className="h-full">
                <Reveal
                  delay={index * 0.05}
                  className="h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_18px_50px_rgba(91,33,182,0.07)] dark:border-brand-900/50 dark:bg-gray-950"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="type-caption font-bold text-brand-600 dark:text-brand-400">
                      {step.number}
                    </span>
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-500 to-accent1-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="type-card mt-5 copy-heading">{step.title}</h3>
                  <p className="type-small mt-3 copy-body">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="foundations"
        aria-labelledby="foundations-heading"
        className="scroll-mt-28 border-b border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="foundations-heading"
            label={thirdEyeLabFoundations.label}
            title={thirdEyeLabFoundations.title}
            intro={thirdEyeLabFoundations.intro}
          />

          <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {thirdEyeLabFoundations.items.map((item, index) => {
              const Icon = foundationIcons[index]
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/45 p-5 dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="type-card mt-5 copy-heading">{item.title}</h3>
                  <p className="type-small mt-3 copy-body">{item.body}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        id="delivery"
        aria-labelledby="delivery-heading"
        className="relative scroll-mt-28 overflow-hidden bg-gray-950 py-16 text-white md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.25),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(236,72,153,0.2),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <p className="type-label text-brand-300">{thirdEyeLabDelivery.label}</p>
              <h2 id="delivery-heading" className="type-display mt-4 text-white">
                {thirdEyeLabDelivery.title}
              </h2>
              <div
                className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent1-500"
                aria-hidden="true"
              />
              <div className="mt-6 space-y-4">
                {thirdEyeLabDelivery.body.map((paragraph) => (
                  <p key={paragraph} className="type-body text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {thirdEyeLabDelivery.principles.map((principle, index) => (
                <li key={principle} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                      {index === thirdEyeLabDelivery.principles.length - 1 ? (
                        <Rocket className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                    <span className="type-caption font-bold text-brand-300">0{index + 1}</span>
                  </div>
                  <p className="type-small mt-5 font-semibold text-white">{principle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="progression"
        aria-labelledby="progression-heading"
        className="scroll-mt-28 border-b border-brand-100 bg-brand-50/55 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="progression-heading"
            label={thirdEyeLabProgression.label}
            title={thirdEyeLabProgression.title}
            intro={thirdEyeLabProgression.intro}
          />

          <ol className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-3">
            {thirdEyeLabProgression.stages.map((stage, index) => (
              <li
                key={stage.company}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] dark:border-brand-900/50 dark:bg-gray-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="type-caption font-bold text-brand-600 dark:text-brand-400">
                      {stage.period}
                    </p>
                    <h3 className="type-card mt-2 copy-heading">{stage.company}</h3>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                    {index + 1}
                  </span>
                </div>
                <p className="type-label mt-5 text-brand-700 dark:text-brand-300">{stage.focus}</p>
                <p className="type-small mt-3 flex-1 copy-body">{stage.body}</p>
                <LinkButton
                  href={stage.href}
                  data-cta="career_stage"
                  data-cta-section="career_path"
                  variant="line"
                  className="mt-6 self-start"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  {index === 0 ? "You are here" : `Read the ${stage.company} story`}
                </LinkButton>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
