import { ArrowUpRight } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectCard } from "@/features/projects/components/projects"
import { getMoreProjects } from "@/features/projects/project-details"

export function MoreProjects({ currentProjectId }: { currentProjectId: string }) {
  const moreProjects = getMoreProjects(currentProjectId)

  return (
    <section
      id="related"
      aria-labelledby="related-heading"
      className="relative isolate scroll-mt-44! overflow-hidden border-t border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-50/30 to-accent1-50/35 dark:from-gray-950 dark:via-brand-950/10 dark:to-accent1-950/10"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="type-label text-brand-700 dark:text-brand-300">Continue exploring</p>
          <h2 id="related-heading" className="type-section mt-4 copy-heading">
            More projects across web, mobile and business websites.
          </h2>
          <p className="type-body mx-auto mt-5 max-w-3xl copy-body">
            Explore more work across React Native and WordPress, from mobile application flows to responsive
            business websites.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
          {moreProjects.map((item) => (
            <ProjectCard key={item.id} project={item} compact showContributions={false} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <LinkButton href="/projects" variant="line" icon={<ArrowUpRight className="h-4 w-4" />}>
            Back to all projects
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
