import { ArrowDown } from "lucide-react"
import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectLinks } from "@/features/projects/components/projects"
import { LevelsPhone } from "@/features/projects/components/levels-phone"
import type { CaseStudyProject } from "@/features/projects/project-details"
import styles from "./levels-project.module.css"

export function LevelsProjectHero({ project }: { project: CaseStudyProject }) {
  const detail = project.caseStudy
  const login = detail.screenshots.find((screen) => screen.src === "/levels-app-login.webp")
  const categories = detail.screenshots.find((screen) => screen.src === "/levels-app-categories.webp")
  const quiz = detail.screenshots.find((screen) => screen.src === "/levels-app-quiz.webp")

  return (
    <header className="relative isolate overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:flex lg:min-h-[640px] lg:items-center lg:pb-12 lg:pt-32 xl:min-h-[680px]">
      <HeroBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />
      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <div className="hidden lg:block">
              <HeroBreadcrumb current={project.title} parents={[{ label: "Projects", href: "/projects" }]} />
            </div>
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              Delivered ahead of schedule
            </p>
            <h1 className="type-hero mt-5 max-w-3xl text-white">
              {project.title} — <span className="hero-gradient-text">React Native</span> Quiz App
            </h1>
            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">{detail.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ProjectLinks project={project} sourcePrimary />
              <LinkButton
                href="#context"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore the case study
              </LinkButton>
            </div>
            <ul aria-label="Project focus" className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="type-caption rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-semibold text-gray-200"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-[420px] lg:order-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-12 rounded-full bg-gradient-to-br from-brand-500/30 to-accent1-500/20 blur-3xl"
            />
            <div className={styles.phoneStage} aria-hidden="true">
              {login && (
                <div className={styles.phoneLeft}>
                  <LevelsPhone screenshot={login} decorative hero />
                </div>
              )}
              {quiz && (
                <div className={styles.phoneRight}>
                  <LevelsPhone screenshot={quiz} decorative hero />
                </div>
              )}
              {categories && (
                <div className={styles.phoneCenter}>
                  <LevelsPhone screenshot={categories} decorative hero preload />
                </div>
              )}
            </div>
            <p className="type-caption relative mx-auto w-fit rounded-full border border-brand-400/20 bg-brand-950/70 px-4 py-2 text-center font-semibold text-brand-200 backdrop-blur-sm">
              Category selection · Quiz questions · Mobile screens
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
