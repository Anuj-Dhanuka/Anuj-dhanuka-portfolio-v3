import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"
import type { ReactNode } from "react"

import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import { HeroBackground } from "@/components/shared/hero-background"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"

// Sections alternate between the light backgrounds, as on the ChefKart page; "dark" reuses the hero background.
const tones = {
  plain: "bg-white dark:bg-gray-900",
  tint: "bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10",
  dark: "border-b-0 bg-black text-white",
}

// The hero's glass panel, for cards on a dark section.
export const glassCard = "rounded-lg border border-white/15 bg-white/[0.06] backdrop-blur-sm"

export function PpcroySectionShell({
  id,
  tone,
  className,
  backdrop,
  children,
}: {
  id: string
  tone: keyof typeof tones
  className?: string
  // Full-bleed decoration behind the section, such as the homepage grid backdrop.
  backdrop?: ReactNode
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 py-16 dark:border-purple-800/30 md:py-24",
        tones[tone],
        className,
      )}
    >
      {tone === "dark" && <HeroBackground />}
      {backdrop}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function PpcroySection({
  id,
  tone,
  icon,
  label,
  title,
  intro,
  children,
}: {
  id: string
  tone: keyof typeof tones
  icon: LucideIcon
  label: string
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <PpcroySectionShell id={id} tone={tone}>
      <CenteredSectionHeader id={`${id}-heading`} icon={icon} label={label} title={title} intro={intro} />
      {children}
    </PpcroySectionShell>
  )
}

// The homepage Mentorship header: left-aligned label, heading, accent rule and copy.
export function LeftSectionHeader({
  id,
  icon: Icon,
  label,
  title,
  inverse = false,
  children,
}: {
  id: string
  icon: LucideIcon
  label: string
  title: string
  // For dark sections: the hero's pill and white heading.
  inverse?: boolean
  children: ReactNode
}) {
  return (
    <>
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
          inverse
            ? "border-brand-400/25 bg-brand-950/60 text-brand-200"
            : "border-brand-100 bg-white/80 text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300",
        )}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </p>
      <h2
        id={`${id}-heading`}
        className={cn("type-display mt-5 max-w-2xl", inverse ? "text-white" : "copy-heading")}
      >
        {title}
      </h2>
      <div
        className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
        aria-hidden="true"
      />
      <div className="mt-6 max-w-2xl space-y-4">{children}</div>
    </>
  )
}

// The homepage Technology Stack header: a label between two fading rules, then a centred heading and intro.
export function LinedSectionHeader({
  id,
  label,
  title,
  intro,
}: {
  id: string
  label: string
  title: string
  intro: string
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-purple-300" aria-hidden="true" />
        <p className="type-label font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
          {label}
        </p>
        <span className="h-px w-10 bg-gradient-to-r from-pink-300 to-transparent" aria-hidden="true" />
      </div>
      <h2 id={`${id}-heading`} className="type-display copy-heading">
        {title}
      </h2>
      <p className="type-body mx-auto mt-5 max-w-2xl copy-body">{intro}</p>
    </div>
  )
}

// The takeaway that closes a section.
export function SectionClosing({ children }: { children: ReactNode }) {
  return (
    <Reveal delay={0.05}>
      <p className="type-body mx-auto mt-10 max-w-3xl text-center font-semibold copy-heading">{children}</p>
    </Reveal>
  )
}

export function CheckList({
  items,
  className,
  inverse = false,
}: {
  items: readonly string[]
  className?: string
  inverse?: boolean
}) {
  return (
    <ul className={cn("mt-4 grid gap-x-6 gap-y-3", className)}>
      {items.map((item) => (
        <li key={item} className={cn("type-small flex gap-2.5", inverse ? "text-gray-300" : "copy-body")}>
          <Check
            className={cn(
              "mt-1 h-4 w-4 flex-none",
              inverse ? "text-brand-300" : "text-success-600 dark:text-success-500",
            )}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
