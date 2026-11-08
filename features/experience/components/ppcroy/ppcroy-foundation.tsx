import Image from "next/image"
import {
  ArrowRight,
  Compass,
  Layers,
  Megaphone,
  MessagesSquare,
  Scale,
  Target,
  UserRound,
} from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { LinkButton } from "@/components/ui/link-button"
import {
  AccentBar,
  homeCardLift,
  homeFeatureCard,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import {
  CheckList,
  glassCard,
  LeftSectionHeader,
  PpcroySection,
  PpcroySectionShell,
} from "@/features/experience/components/ppcroy/ppcroy-section"
import { StepChain } from "@/features/experience/components/step-chain"
import {
  ppcroyBalance,
  ppcroyBeginning,
  ppcroyClients,
  ppcroyLanding,
} from "@/features/experience/data/ppcroy"
import { cn } from "@/lib/utils"

const balanceIcons = { business: Target, visitor: UserRound, experience: Layers }

export function PpcroyBeginning() {
  const { image } = ppcroyBeginning

  return (
    // Tops up the stats strip's own bottom padding to the standard 64px/96px section spacing.
    <PpcroySectionShell id="beginning" tone="plain" className="pt-4 md:pt-8">
      <Reveal>
        {/* Homepage Mentorship pattern at an even split: heading and copy left, visual right. */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <LeftSectionHeader
              id="beginning"
              icon={Compass}
              label={ppcroyBeginning.label}
              title={ppcroyBeginning.title}
            >
              {ppcroyBeginning.body.map((paragraph) => (
                <p key={paragraph} className="type-body copy-body">
                  {paragraph}
                </p>
              ))}
            </LeftSectionHeader>
          </div>

          {/* Image first on phones, beside the text on large screens. */}
          <figure className="relative order-first aspect-[4/3] overflow-hidden lg:order-none lg:aspect-[16/10] rounded-lg border border-purple-100 shadow-[0_18px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/30">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </Reveal>
    </PpcroySectionShell>
  )
}

export function PpcroyBalance() {
  return (
    <PpcroySection
      id="balance"
      tone="tint"
      icon={Scale}
      label={ppcroyBalance.label}
      title={ppcroyBalance.title}
      intro={ppcroyBalance.intro}
    >
      <Reveal delay={0.05}>
        <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-6">
          {ppcroyBalance.items.map((item) => {
            const Icon = balanceIcons[item.icon]
            return (
              // Icon beside the text on phones to save height; stacked once the cards sit in a row.
              <li
                key={item.title}
                className={cn("relative flex gap-4 overflow-hidden p-5 sm:p-6 md:block", homeCardLift)}
              >
                <AccentBar />
                <span className={homeIconTile}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="type-card copy-heading md:mt-4">{item.title}</h3>
                  <p className="type-small mt-2 copy-body">{item.body}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </PpcroySection>
  )
}

export function PpcroyLanding() {
  const lastStep = ppcroyLanding.process.length - 1

  return (
    <PpcroySectionShell id="landing-pages" tone="plain">
      {/* Heading and the whole journey on the left, the numbered steps behind it on the right. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <LeftSectionHeader
            id="landing-pages"
            icon={Megaphone}
            label={ppcroyLanding.label}
            title={ppcroyLanding.title}
          >
            <p className="type-body copy-body">{ppcroyLanding.intro}</p>
          </LeftSectionHeader>

          <div className={cn("mt-8 p-5 sm:p-6", homeFeatureCard)}>
            <h3 className="type-card copy-heading">{ppcroyLanding.journeyTitle}</h3>
            <div className="mt-4">
              <StepChain steps={ppcroyLanding.journey} onTint />
            </div>
            <p className="type-small mt-4 font-semibold copy-heading">{ppcroyLanding.closing}</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="type-card copy-heading">{ppcroyLanding.processTitle}</h3>
          <ol className="mt-6">
            {ppcroyLanding.process.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {index < lastStep && (
                  <span
                    className="absolute bottom-0 left-5 top-10 w-px -translate-x-1/2 bg-brand-200 dark:bg-brand-800"
                    aria-hidden="true"
                  />
                )}
                <span className="type-small flex h-10 w-10 flex-none items-center justify-center rounded-full border border-brand-300 font-semibold text-brand-700 dark:border-brand-700 dark:text-brand-300">
                  {index + 1}
                </span>
                <div className="min-w-0 pt-1.5">
                  <h4 className="type-card copy-heading">{step.title}</h4>
                  <p className="type-body mt-2 copy-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </PpcroySectionShell>
  )
}

export function PpcroyClients() {
  return (
    <PpcroySectionShell id="clients" tone="dark">
      {/* DOM order (story, cards, button) is the phone order; large screens put the button under the lessons. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
        <Reveal className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <LeftSectionHeader
            id="clients"
            icon={MessagesSquare}
            label={ppcroyClients.label}
            title={ppcroyClients.title}
            inverse
          >
            <p className="type-body copy-inverse-body">{ppcroyClients.intro}</p>
          </LeftSectionHeader>

          <h3 className="type-card mt-8 text-white">{ppcroyClients.lessonsTitle}</h3>
          <CheckList items={ppcroyClients.lessons} className="sm:grid-cols-2" inverse />
        </Reveal>

        <Reveal delay={0.05} className="space-y-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <figure className={cn("relative overflow-hidden p-6 sm:p-8", glassCard)}>
            <AccentBar />
            <blockquote className="type-card-large text-white">{ppcroyClients.quote}</blockquote>
            <figcaption className="type-body mt-6 copy-inverse-body">{ppcroyClients.closing}</figcaption>
          </figure>
          <div className={cn("p-5 sm:p-6", glassCard)}>
            <h3 className="type-card text-white">{ppcroyClients.flowTitle}</h3>
            <div className="mt-4">
              <StepChain steps={ppcroyClients.flow} inverse />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="max-lg:-mt-2 lg:col-start-1 lg:row-start-2 lg:self-start">
          <LinkButton
            href={ppcroyClients.cta.href}
            data-cta="talk_to_me"
            data-cta-section="client_ownership"
            variant="outlineInverse"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {ppcroyClients.cta.label}
          </LinkButton>
        </Reveal>
      </div>
    </PpcroySectionShell>
  )
}
