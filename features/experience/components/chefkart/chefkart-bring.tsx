import { Code, CreditCard, Layers, RefreshCw, Route, Sparkles, Target, Users, Zap } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  AccentBar,
  homeCardLift,
  homeFeatureCard,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import { chefkartBring, chefkartBringHeader, chefkartClosing } from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

const bringIcons = {
  journeys: Route,
  code: Code,
  product: Target,
  payments: CreditCard,
  performance: Zap,
  surfaces: Layers,
  team: Users,
  iterate: RefreshCw,
}

export function ChefkartBring() {
  return (
    <section
      id="bring"
      aria-labelledby="bring-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 py-16 dark:border-purple-800/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="bring-heading"
          icon={Sparkles}
          label={chefkartBringHeader.label}
          title={chefkartBringHeader.title}
          intro={chefkartBringHeader.intro}
        />

        <Reveal delay={0.05}>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chefkartBring.map((item) => {
              const Icon = bringIcons[item.icon]
              return (
                <li
                  key={item.text}
                  // Icon beside the text on phones to save height; stacked once cards sit in a row.
                  className={cn(
                    "relative flex items-center gap-4 overflow-hidden p-5 sm:block sm:p-6",
                    homeCardLift,
                  )}
                >
                  <AccentBar />
                  <span className={homeIconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="type-small font-semibold copy-heading sm:mt-4">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* The closing statement, on the same featured card as the case-study decisions. */}
        <Reveal delay={0.05}>
          <div className={cn("mt-6 p-5 sm:p-8", homeFeatureCard)}>
            <p className="type-label text-brand-700 dark:text-brand-300">In my words</p>
            <p className="type-body mt-3 max-w-4xl copy-body">{chefkartClosing.paragraph}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
