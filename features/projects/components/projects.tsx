import { projects, type Project } from "@/features/projects/data/projects"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Monitor,
  Smartphone,
  Store,
} from "lucide-react"
import Image from "next/image"
import { TrackedLink } from "@/components/analytics/tracked-link"
import { analyticsEvents } from "@/config/analytics"

function ProjectVisual({ project }: { project: Project }) {
  if (project.type === "mobile" && project.images?.length) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent1-50 dark:from-brand-950/30 dark:via-gray-950 dark:to-accent1-950/20">
        <div
          className={`absolute inset-x-8 bottom-2 h-28 rounded-full bg-gradient-to-r ${project.accent} opacity-20 blur-3xl`}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
          {project.images.map((image, index) => (
            <div
              key={image}
              className={[
                "absolute overflow-hidden rounded-[1.5rem] border-[6px] border-gray-950 bg-gray-950 shadow-2xl shadow-purple-500/20",
                index === 0
                  ? "z-20 h-[224px] w-[110px] sm:h-[270px] sm:w-[132px] lg:h-[296px] lg:w-[146px]"
                  : index === 1
                    ? "left-4 z-10 h-[190px] w-[94px] -rotate-6 opacity-85 sm:left-8 sm:h-[232px] sm:w-[114px] lg:h-[256px] lg:w-[126px]"
                    : "right-4 z-10 h-[190px] w-[94px] rotate-6 opacity-85 sm:right-8 sm:h-[232px] sm:w-[114px] lg:h-[256px] lg:w-[126px]",
              ].join(" ")}
            >
              <Image
                src={image}
                alt={`${project.title} screen ${index + 1}`}
                width={292}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {project.liveLink && (
        <Button
          asChild
          className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
        >
          <TrackedLink
            eventName={analyticsEvents.projectViewed}
            eventProperties={{ project: project.id, destination: "live" }}
            aria-label={`View ${project.title} live project (opens in a new tab)`}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project
            <ExternalLink className="h-4 w-4" />
          </TrackedLink>
        </Button>
      )}
      {project.githubLink && (
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-lg border-purple-200 bg-white px-5 text-brand-700 hover:bg-purple-50 dark:border-purple-800/50 dark:bg-gray-950/30 dark:text-brand-300 dark:hover:bg-purple-900/20"
        >
          <TrackedLink
            eventName={analyticsEvents.projectViewed}
            eventProperties={{ project: project.id, destination: "source" }}
            aria-label={`View ${project.title} source code (opens in a new tab)`}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
            <Code2 className="h-4 w-4" />
          </TrackedLink>
        </Button>
      )}
    </div>
  )
}

export function ProjectCard({
  project,
  compact = false,
  showContributions = true,
}: {
  project: Project
  compact?: boolean
  showContributions?: boolean
}) {
  const ProjectIcon = { business: BriefcaseBusiness, monitor: Monitor, mobile: Smartphone, store: Store }[
    project.icon
  ]

  return (
    <article
      id={`project-${project.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white/92 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:border-purple-800/30 dark:bg-gray-950/35"
    >
      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${project.accent}`}
        aria-hidden="true"
      />
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="type-small font-semibold text-accent1-600 dark:text-accent1-300">
              {project.category}
            </p>
            <h3 className="type-card-large mt-2 copy-heading">{project.title}</h3>
          </div>
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300">
            <ProjectIcon className="h-5 w-5" />
          </span>
        </div>

        <p className="type-small mt-3 font-semibold text-brand-700 dark:text-brand-300">{project.role}</p>
        <p className="type-small mt-3 copy-body">{project.description}</p>

        {showContributions && (
          <div className="mt-4">
            <p className="type-label font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
              My contribution
            </p>
            <ul className="mt-3 space-y-2">
              {(compact ? project.contributions.slice(0, 3) : project.contributions).map((contribution) => (
                <li key={contribution} className="flex gap-2 text-sm leading-6 copy-body">
                  <span
                    className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
                  />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-100 bg-purple-50/70 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            SELECTED PROJECTS
          </div>
          <h2 className="type-section copy-heading">
            Projects that show how I turn ideas into complete digital experiences.
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
          <p className="type-body mt-6 copy-body">
            Explore my work across React, React Native and WordPress, from business websites to mobile
            applications. Each project includes the technologies used, my contributions and a link to the live
            site or source code.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <LinkButton href="/projects" variant="line" icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore all projects
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
