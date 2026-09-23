import { ArrowDown, ArrowUpRight } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { SkillsOrbit } from "@/features/skills/components/skills-orbit"

export function SkillsHero() {
  return (
    <section
      aria-labelledby="skills-hero-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:flex lg:min-h-[680px] lg:items-center lg:pb-12 lg:pt-32 xl:min-h-[720px]"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="min-w-0">
            <HeroBreadcrumb current="Skills" />

            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              Technical skills and product capabilities
            </p>

            <h1 id="skills-hero-heading" className="type-hero mt-5 max-w-3xl text-white">
              Technical skills applied across{" "}
              <span className="hero-gradient-text">web, mobile and product delivery.</span>
            </h1>

            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">
              I build responsive React and Next.js interfaces, React Native applications and production
              experiences shaped by user needs, business context and reliable engineering practices.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#core-skills"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore my skills
              </LinkButton>
              <LinkButton
                href="/projects"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                See skills in practice
              </LinkButton>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[500px] md:block">
            <SkillsOrbit />
          </div>
        </div>
      </div>
    </section>
  )
}
