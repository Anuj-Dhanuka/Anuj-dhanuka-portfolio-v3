import { Globe, Layers, LayoutDashboard, Smartphone } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  AccentBar,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/experience-card-styles"
import { chefkartBreadth, chefkartBreadthHeader } from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

const surfaceIcons = { app: Smartphone, website: Globe, dashboard: LayoutDashboard }

export function ChefkartBreadth() {
  return (
    <section
      id="breadth"
      aria-labelledby="breadth-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
    >
      {/* Same soft glow as the homepage What I Bring section. */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="breadth-heading"
          icon={Layers}
          label={chefkartBreadthHeader.label}
          title={chefkartBreadthHeader.title}
          intro={chefkartBreadthHeader.intro}
        />
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {chefkartBreadth.map((group) => {
              const Icon = surfaceIcons[group.icon]
              return (
                <div key={group.surface} className={cn("relative overflow-hidden p-5 sm:p-6", homeCardLift)}>
                  <AccentBar />
                  <div className="flex items-center gap-4">
                    <span className={homeIconTile}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="type-card copy-heading">{group.surface}</h3>
                      <p className="type-caption copy-body">{group.items.length} areas</p>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.surface} work`}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="type-caption rounded-full border border-purple-100 bg-white px-2.5 py-1 font-medium copy-body dark:border-purple-800/30 dark:bg-gray-950/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
