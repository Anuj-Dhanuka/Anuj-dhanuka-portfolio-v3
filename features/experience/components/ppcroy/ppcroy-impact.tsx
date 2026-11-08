import { ArrowDown, ArrowRight, Briefcase, Sprout } from "lucide-react"
import Image from "next/image"

import { Reveal } from "@/components/shared/reveal"
import { LinkButton } from "@/components/ui/link-button"
import {
  AccentBar,
  homeCard,
  homeCardLift,
  homeFeatureCard,
} from "@/features/experience/components/experience-card-styles"
import {
  LeftSectionHeader,
  PpcroySection,
  PpcroySectionShell,
} from "@/features/experience/components/ppcroy/ppcroy-section"
import { ppcroyImpact, ppcroyProjects, ppcroySelectedWork } from "@/features/experience/data/ppcroy"
import { cn } from "@/lib/utils"

export function PpcroySelectedWork() {
  if (ppcroyProjects.length === 0) return null

  return (
    <PpcroySection
      id="selected-work"
      tone="tint"
      icon={Briefcase}
      label={ppcroySelectedWork.label}
      title={ppcroySelectedWork.title}
      intro={ppcroySelectedWork.intro}
    >
      <Reveal delay={0.05}>
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {ppcroyProjects.map((project) => (
            <li key={project.title} className={cn("relative overflow-hidden p-5 sm:p-6", homeCardLift)}>
              <AccentBar />
              <p className="type-label text-brand-700 dark:text-brand-300">
                {project.type} · {project.platform}
              </p>
              <h3 className="type-card mt-2 copy-heading">{project.title}</h3>
              <dl className="mt-4 space-y-3">
                {(
                  [
                    ["Business goal", project.goal],
                    ["My responsibility", project.responsibility],
                    ["Important decision", project.decision],
                    ["Outcome", project.outcome],
                  ] as const
                ).map(([term, detail]) => (
                  <div key={term}>
                    <dt className="type-small font-semibold copy-heading">{term}</dt>
                    <dd className="type-small mt-0.5 copy-body">{detail}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Reveal>
    </PpcroySection>
  )
}

const stageLogos = {
  PPCROY: { src: "/logos/ppcroy-logo.svg", alt: "PPCROY Tech Solutions", width: 160, height: 40 },
  ChefKart: { src: "/logos/chefkart-logo.webp", alt: "ChefKart", width: 160, height: 56 },
} as const

// A career path: the story and the ChefKart link on the left; on the right PPCROY's foundation
// leads down a dashed connector into the ChefKart card that carried it further.
export function PpcroyImpact() {
  const [first, second] = ppcroyImpact.progression

  return (
    <PpcroySectionShell id="impact" tone="plain">
      {/* DOM order (story, cards, button) is the phone order; on large screens the button moves
          back under the story in the left column. */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
        <Reveal className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <LeftSectionHeader id="impact" icon={Sprout} label={ppcroyImpact.label} title={ppcroyImpact.title}>
            <p className="type-body copy-body">{ppcroyImpact.intro}</p>
            {ppcroyImpact.body.map((paragraph) => (
              <p key={paragraph} className="type-body copy-body">
                {paragraph}
              </p>
            ))}
            <p className="type-body font-semibold copy-heading">{ppcroyImpact.closing}</p>
          </LeftSectionHeader>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <h3 className="sr-only">{ppcroyImpact.progressionTitle}</h3>
          <ol>
            {[first, second].map((stage, index) => {
              const logo = stageLogos[stage.name as keyof typeof stageLogos]
              const featured = index === 1
              return (
                <li key={stage.name}>
                  {featured && (
                    <div className="flex justify-center py-3" aria-hidden="true">
                      <span className="flex flex-col items-center">
                        <span className="h-8 border-l-2 border-dashed border-brand-300 dark:border-brand-700" />
                        <ArrowDown className="-mt-1 h-5 w-5 text-brand-500" />
                      </span>
                    </div>
                  )}
                  <div
                    className={cn(
                      "relative overflow-hidden p-6 sm:p-8",
                      featured ? homeFeatureCard : homeCard,
                    )}
                  >
                    {!featured && <AccentBar />}
                    <span
                      className={cn(
                        "inline-flex h-12 items-center rounded-lg px-3",
                        featured ? "bg-white shadow-sm" : "bg-gray-950",
                      )}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-7 w-auto"
                      />
                    </span>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`What ${stage.name} gave me`}>
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "type-small rounded-full border px-3 py-1 font-medium",
                            featured
                              ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-200"
                              : "border-brand-100 bg-white copy-body dark:border-brand-800/40 dark:bg-gray-950/40",
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>

        {/* 32px under the cards on phones, the site's usual content-to-button gap. */}
        <Reveal delay={0.05} className="max-lg:-mt-4 lg:col-start-1 lg:row-start-2 lg:self-start">
          <LinkButton
            href="/experience/chefkart"
            data-cta="chefkart_experience"
            data-cta-section="impact"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {ppcroyImpact.cta}
          </LinkButton>
        </Reveal>
      </div>
    </PpcroySectionShell>
  )
}
