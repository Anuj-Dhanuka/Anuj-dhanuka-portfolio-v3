import { Blocks, DatabaseZap, LifeBuoy, Route, ShieldCheck, Workflow, Wrench, Zap } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  AccentBar,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import { chefkartPrinciples, chefkartPrinciplesHeader } from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

const principleIcons = {
  risk: ShieldCheck,
  reuse: Blocks,
  parallel: Zap,
  cache: DatabaseZap,
  failure: LifeBuoy,
  entry: Route,
  after: Workflow,
}

export function ChefkartPrinciples() {
  const last = chefkartPrinciples.length - 1
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 py-16 dark:border-purple-800/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="engineering-heading"
          icon={Wrench}
          label={chefkartPrinciplesHeader.label}
          title={chefkartPrinciplesHeader.title}
          intro={chefkartPrinciplesHeader.intro}
        />
        <Reveal delay={0.05}>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chefkartPrinciples.map((item, index) => {
              const Icon = principleIcons[item.icon]
              // The seventh habit closes the set across the full width, with the icon beside it.
              const wide = index === last
              return (
                <li
                  key={item.title}
                  className={cn(
                    "relative overflow-hidden p-5 sm:p-6",
                    homeCardLift,
                    wide && "md:col-span-2 md:flex md:items-center md:gap-5 lg:col-span-3",
                  )}
                >
                  <AccentBar />
                  <span className={homeIconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className={cn(!wide && "mt-4", wide && "mt-4 md:mt-0")}>
                    <h3 className="type-card copy-heading">{item.title}</h3>
                    <p className="type-small mt-2 copy-body">{item.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
