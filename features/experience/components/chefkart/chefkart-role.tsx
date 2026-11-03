import Image from "next/image"
import { ArrowRight, Briefcase, Check, Code, MessagesSquare, Rocket } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader } from "@/components/shared/centered-section-header"
import {
  AccentBar,
  homeCard,
  homeCardLift,
  homeIconTile,
} from "@/features/experience/components/chefkart/chefkart-styles"
import { chefkartPhotos, chefkartRole } from "@/features/experience/data/chefkart"
import { cn } from "@/lib/utils"

const stageIcons = { before: MessagesSquare, during: Code, after: Rocket }

export function ChefkartRole() {
  const photo = chefkartPhotos.team

  return (
    <section
      id="role"
      aria-labelledby="role-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 py-16 dark:border-purple-800/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="role-heading"
          icon={Briefcase}
          label={chefkartRole.label}
          title={chefkartRole.title}
          intro={chefkartRole.intro}
        />

        {/* Where my work sat in delivery: three stages, left to right. */}
        <Reveal delay={0.05}>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {chefkartRole.stages.map((stage, index) => {
              const Icon = stageIcons[stage.kind as keyof typeof stageIcons]
              return (
                <li key={stage.name} className="relative">
                  <article className={cn("relative h-full overflow-hidden p-5 sm:p-6", homeCardLift)}>
                    <AccentBar />
                    <div className="flex items-center justify-between gap-4">
                      <span className={homeIconTile}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="type-label text-brand-700 dark:text-brand-300">{stage.name}</span>
                    </div>
                    <h3 className="type-card mt-5 copy-heading">{stage.title}</h3>
                    <p className="type-small mt-2 copy-body">{stage.body}</p>
                  </article>
                  {index < chefkartRole.stages.length - 1 && (
                    <span
                      className="absolute -right-5 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-sm dark:border-brand-800 dark:bg-gray-950 dark:text-brand-300 md:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            <figure className="relative aspect-[16/10] overflow-hidden rounded-lg border border-purple-100 shadow-[0_18px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/30 lg:aspect-auto">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-white">
                <span className="type-small block font-semibold">{photo.caption}</span>
              </figcaption>
            </figure>

            <div className={cn("relative overflow-hidden p-5 sm:p-6", homeCard)}>
              <AccentBar />
              <h3 className="type-card copy-heading">{chefkartRole.itemsTitle}</h3>
              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {chefkartRole.items.map((item) => (
                  <li key={item} className="type-small flex gap-2.5 copy-body">
                    <Check
                      className="mt-1 h-4 w-4 flex-none text-success-600 dark:text-success-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
