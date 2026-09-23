import Image from "next/image"
import { ArrowUpRight, Award, Check, MapPin } from "lucide-react"

import { LinkButton } from "@/components/ui/link-button"
import type { ExperienceAccent, ExperienceRole } from "@/features/experience/data/experience"

const accentStyles: Record<
  ExperienceAccent,
  { line: string; badge: string; icon: string; achievement: string }
> = {
  purple: {
    line: "from-brand-600 to-accent1-600",
    badge:
      "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-800 dark:bg-brand-950/40 dark:text-brand-300",
    icon: "bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300",
    achievement:
      "border-brand-100 bg-brand-50/70 text-brand-900 dark:border-brand-900/50 dark:bg-brand-950/30 dark:text-brand-100",
  },
  blue: {
    line: "from-accent2-600 to-brand-600",
    badge:
      "border-accent2-200 bg-accent2-50 text-accent2-700 dark:border-accent2-800 dark:bg-accent2-950/40 dark:text-accent2-300",
    icon: "bg-accent2-100 text-accent2-700 dark:bg-accent2-900/50 dark:text-accent2-300",
    achievement:
      "border-accent2-100 bg-accent2-50/70 text-accent2-900 dark:border-accent2-900/50 dark:bg-accent2-950/30 dark:text-accent2-100",
  },
  pink: {
    line: "from-accent1-600 to-brand-600",
    badge:
      "border-accent1-200 bg-accent1-50 text-accent1-700 dark:border-accent1-800 dark:bg-accent1-950/40 dark:text-accent1-300",
    icon: "bg-accent1-100 text-accent1-700 dark:bg-accent1-900/50 dark:text-accent1-300",
    achievement:
      "border-accent1-100 bg-accent1-50/70 text-accent1-900 dark:border-accent1-900/50 dark:bg-accent1-950/30 dark:text-accent1-100",
  },
}

export function ExperienceRoleCard({ role }: { role: ExperienceRole }) {
  const styles = accentStyles[role.accent]

  return (
    <article
      id={`role-${role.id}`}
      className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_20px_60px_rgba(91,33,182,0.08)] dark:border-brand-900/45 dark:bg-gray-950"
    >
      <div className={`h-1.5 bg-gradient-to-r ${styles.line}`} aria-hidden="true" />
      <div className="grid lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
        <div className="border-b border-brand-100 bg-brand-50/45 p-6 dark:border-brand-900/45 dark:bg-brand-950/10 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-100 bg-white p-3 shadow-sm dark:border-brand-900/50">
              <Image
                src={role.logo}
                alt={role.logoAlt}
                width={100}
                height={100}
                className="max-h-full w-full object-contain"
              />
            </span>
            {role.isCurrent ? (
              <span className="rounded-full border border-success-200 bg-success-50 px-3 py-1 text-xs font-bold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-300">
                Current role
              </span>
            ) : null}
          </div>

          <p className={`mt-6 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${styles.badge}`}>
            {role.duration}
          </p>
          <h3 className="type-card-large mt-4 copy-heading">{role.position}</h3>
          <p className="mt-2 font-bold text-brand-700 dark:text-brand-300">{role.company}</p>

          <dl className="mt-6 space-y-3 border-t border-brand-100 pt-5 text-sm dark:border-brand-900/50">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Employment</dt>
              <dd className="font-semibold copy-heading">{role.type}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Work mode</dt>
              <dd className="font-semibold copy-heading">{role.workMode}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Location</dt>
              <dd className="flex items-center gap-1.5 text-right font-semibold copy-heading">
                <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                {role.location}
              </dd>
            </div>
          </dl>

          <div className={`mt-6 rounded-2xl border p-4 ${styles.achievement}`}>
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
              <p className="text-sm font-semibold leading-6">{role.achievement}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className="type-body copy-body">{role.description}</p>

          <div className="mt-7">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] copy-heading">Key contributions</h4>
            <ul className="mt-4 grid gap-3">
              {role.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-start gap-3 text-sm leading-6 copy-body">
                  <span
                    className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${styles.icon}`}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-brand-100 pt-6 dark:border-brand-900/45">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] copy-heading">
              Technologies and focus
            </h4>
            <ul aria-label={`Technologies used at ${role.company}`} className="mt-4 flex flex-wrap gap-2">
              {role.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800/60 dark:bg-gray-900 dark:text-brand-300"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          {role.cta ? (
            <div className="mt-auto pt-7">
              <LinkButton
                href={role.cta.href}
                variant="line"
                target={role.cta.external ? "_blank" : undefined}
                rel={role.cta.external ? "noopener noreferrer" : undefined}
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                {role.cta.label}
              </LinkButton>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
