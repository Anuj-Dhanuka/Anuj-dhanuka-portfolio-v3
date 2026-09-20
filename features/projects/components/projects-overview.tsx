import { ProjectsHero } from "@/features/projects/components/projects-hero"
import { ArrowUpRight, Code2, Smartphone, Store } from "lucide-react"
import { ProjectCard } from "@/features/projects/components/projects"
import { projects } from "@/features/projects/data/projects"
import { LinkButton } from "@/components/ui/link-button"

function SelectedWorkHeader() {
  return (
    <header className="relative isolate overflow-hidden border-y border-brand-100 bg-gradient-to-r from-brand-50/70 via-white to-accent1-50/60 py-16 text-center dark:border-brand-900/40 dark:from-brand-950/30 dark:via-gray-950 dark:to-accent1-950/20 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span className="select-none text-[clamp(7rem,22vw,18rem)] font-bold leading-none tracking-[-0.08em] text-brand-700/[0.04] dark:text-white/[0.025]">
          WORK
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
          aria-hidden="true"
        />
        <h2 id="selected-work-heading" className="type-display mx-auto mt-7 max-w-4xl copy-heading">
          A closer look at what I’ve built.
        </h2>
        <p className="type-lead mx-auto mt-5 max-w-3xl copy-body">
          Selected web and mobile work showing the product context, technology choices and final interface
          delivered for each project.
        </p>
      </div>
    </header>
  )
}

const capabilities = [
  {
    Icon: Code2,
    title: "React web applications",
    description:
      "Reusable components and responsive interfaces that bring multiple services into one consistent experience.",
    example: "Explore Mopedo",
    href: "#project-mopedo",
  },
  {
    Icon: Smartphone,
    title: "React Native mobile apps",
    description:
      "Category-based navigation, dynamic content and reusable screens built around clear mobile user flows.",
    example: "Explore Levels App",
    href: "#project-levels-app",
  },
  {
    Icon: Store,
    title: "WordPress business websites",
    description:
      "Content structure, visual design and responsive layouts for food businesses and educational institutions.",
    example: "Explore business websites",
    href: "#project-rekha-maa-ki-rasoi",
  },
]

const approach = [
  {
    title: "Structure the experience",
    description: "Organise information around what visitors need to find and the actions they need to take.",
  },
  {
    title: "Build a consistent interface",
    description:
      "Translate the visual direction into reusable components, clear navigation and layouts that adapt to different screens.",
  },
  {
    title: "Refine the details",
    description:
      "Improve content readability, visual consistency and mobile usability across the completed experience.",
  },
]

export function ProjectsOverview() {
  const projectOrder = ["mopedo", "rekha-maa-ki-rasoi", "rama-technical-college", "levels-app"]
  const orderedProjects = projectOrder
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter((project): project is (typeof projects)[number] => Boolean(project))

  return (
    <>
      <ProjectsHero />

      <section
        id="selected-work"
        aria-labelledby="selected-work-heading"
        className="bg-white pb-16 dark:bg-gray-950 md:pb-24"
      >
        <SelectedWorkHeader />
        <div className="container mx-auto mt-12 px-4 sm:px-6 md:mt-16 lg:px-8">
          <div className="grid w-full items-stretch gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20 lg:gap-x-10">
            {orderedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showContributions={false} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="border-y border-brand-100 bg-brand-50/60 py-16 dark:border-brand-900/40 dark:bg-gray-900 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="capabilities-heading" className="type-section copy-heading">
              Different platforms. The same attention to detail.
            </h2>
            <div
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
              aria-hidden="true"
            />
            <p className="type-body mt-6 copy-body">
              Frontend development adapted to different audiences, content models and devices while keeping
              the experience clear and consistent.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-3">
            {capabilities.map(({ Icon, title, description, example, href }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_16px_45px_rgba(91,33,182,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_22px_55px_rgba(91,33,182,0.11)] motion-reduce:transform-none motion-reduce:transition-none dark:border-brand-800/40 dark:bg-gray-950 sm:p-7"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700 dark:border-brand-800/60 dark:bg-brand-950/50 dark:text-brand-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="type-card copy-heading">{title}</h3>
                <p className="type-small mt-3 copy-body">{description}</p>
                <a
                  href={href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold text-brand-700 underline-offset-4 hover:text-accent1-700 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:text-accent1-300"
                >
                  {example}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-white py-16 dark:bg-gray-950 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16">
            <div className="contents lg:block">
              <div className="max-w-xl">
                <h2 id="approach-heading" className="type-section copy-heading">
                  Built around people and their next step.
                </h2>
                <p className="type-body mt-5 copy-body">
                  A practical process for turning requirements into clear information, consistent interfaces
                  and responsive experiences.
                </p>
              </div>
              <LinkButton
                href="/#experience"
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="order-3 inline-flex min-h-11 items-center gap-2 justify-self-start rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/15 transition-colors hover:from-brand-700 hover:to-accent1-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 lg:mt-7"
              >
                Explore my professional experience
              </LinkButton>
            </div>

            <ol className="order-2 divide-y divide-brand-100 border-y border-brand-100 dark:divide-brand-900/50 dark:border-brand-900/50 lg:order-none">
              {approach.map((step) => (
                <li key={step.title} className="flex gap-4 py-6 first:pt-6 sm:gap-5">
                  <span
                    className="mt-2.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-brand-600 to-accent1-600"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="type-card copy-heading">{step.title}</h3>
                    <p className="type-small mt-2 copy-body">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
