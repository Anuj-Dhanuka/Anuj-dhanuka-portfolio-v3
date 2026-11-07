import { BarChart3, CreditCard, Globe, LayoutDashboard, Smartphone } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  AccentBar,
  homeCard,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import {
  chefkartEvidence,
  chefkartEvidenceHeader,
  chefkartStatsMethodology,
} from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

// Same icon per product as the hero diagram.
const repoIcons = { app: Smartphone, website: Globe, dashboard: LayoutDashboard, payments: CreditCard }

function RepoName({ icon, name }: { icon: keyof typeof repoIcons; name: string }) {
  const Icon = repoIcons[icon]
  return (
    // Stacked in the four-column row, where names would otherwise wrap beside the icon.
    <div className="flex items-center gap-4 lg:block">
      <span className={homeIconTile}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="type-card copy-heading lg:mt-4">{name}</h3>
    </div>
  )
}

export function ChefkartContribution() {
  return (
    <section
      id="contribution"
      aria-labelledby="contribution-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
    >
      {/* Same soft glow as the homepage What I Bring section. */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="contribution-heading"
          icon={BarChart3}
          label={chefkartEvidenceHeader.label}
          title={chefkartEvidenceHeader.title}
          intro={chefkartEvidenceHeader.intro}
        />

        <Reveal delay={0.05}>
          <div className="mt-10 space-y-6">
            {/* One row of four: headline figure, ownership share where published, then the rest
                pinned to the bottom so every card ends level. */}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {chefkartEvidence.repos.map((repo) => (
                <li
                  key={repo.name}
                  className={cn("relative flex flex-col overflow-hidden p-5 sm:p-6", homeCardLift)}
                >
                  <AccentBar />
                  <RepoName icon={repo.icon} name={repo.name} />
                  <p className="mt-6">
                    <span className="type-card-large block tabular-nums copy-heading">{repo.headline}</span>
                    <span className="type-small block copy-body">{repo.headlineLabel}</span>
                  </p>
                  {repo.ownership !== null && (
                    <div className="mt-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="type-caption copy-body">Ownership</span>
                        <span className="type-small font-semibold tabular-nums copy-heading">
                          {repo.ownership}%
                        </span>
                      </div>
                      <div
                        className="mt-2 h-2 overflow-hidden rounded-full bg-purple-100 dark:bg-purple-900/40"
                        aria-hidden="true"
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
                          style={{ width: `${repo.ownership}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {/* Value above label, side by side, so every footer is one row of equal height. */}
                  <div className="mt-auto pt-5">
                    <dl className="grid grid-cols-2 gap-4 border-t border-purple-100 pt-4 dark:border-purple-800/30">
                      {repo.facts.map(([value, label]) => (
                        // Label first in the markup, value shown on top.
                        <div key={label} className="flex flex-col-reverse">
                          <dt className="type-caption copy-body">{label}</dt>
                          <dd className="type-small font-semibold tabular-nums copy-heading">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
            </ul>

            {/* Totals, then how they were measured: the same closing card as each case study. */}
            <div className={cn("relative overflow-hidden", homeCard)}>
              <AccentBar />
              <div className="p-5 sm:p-6">
                <p className="type-label text-brand-700 dark:text-brand-300">Across all four</p>
                <ul className="mt-4 grid divide-y divide-purple-100 dark:divide-purple-800/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {chefkartEvidence.combined.map((item) => (
                    <li key={item.label} className="py-4 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0">
                      <p className="type-card-large tabular-nums copy-heading">{item.value}</p>
                      <p className="type-caption mt-1 copy-body">{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                id="methodology"
                className="scroll-mt-28 border-t border-purple-100 bg-brand-50/40 p-5 dark:border-purple-800/30 dark:bg-brand-950/20 sm:p-6"
              >
                <p className="type-label text-brand-700 dark:text-brand-300">How this was measured</p>
                <p className="type-small mt-2 copy-body">{chefkartStatsMethodology}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
