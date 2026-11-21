import { ArrowUpRight } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ProjectCard } from "@/features/projects/components/projects"
import { getMoreProjects } from "@/features/projects/project-details"
import type { Project } from "@/features/projects/data/projects"
import { cn } from "@/lib/utils"

// A compact project card with optional page-specific wording: `label` replaces the category overline (for
// example a scope label such as "Independent React Native app") and `summary` the compact description.
export type MoreProjectsItem = { project: Project; label?: string; summary?: string }

// The "Continue exploring" section from the case studies. Every prop defaults to the case-study version, so
// the project pages pass only `currentProjectId`; other pages (the /hire overview) reuse the same layout
// with their own anchor, wording, projects and closing link.
export function MoreProjects({
  currentProjectId,
  id = "related",
  label = "Continue exploring",
  title = "More projects across web, mobile and business websites.",
  description = "Explore more work across React Native and WordPress, from mobile application flows to responsive business websites.",
  items,
  note,
  link = { label: "Back to all projects", href: "/projects" },
  linkCta,
  // The case studies have a sticky section nav, hence the larger default offset for #related jumps.
  scrollMarginClass = "scroll-mt-44!",
}: {
  currentProjectId?: string
  id?: string
  label?: string
  title?: string
  description?: string
  items?: readonly MoreProjectsItem[]
  // Optional sentence above the closing link.
  note?: string
  link?: { label: string; href: string }
  // Analytics id for the closing link (LinkButton otherwise names it from its text).
  linkCta?: string
  scrollMarginClass?: string
}) {
  const cards: readonly MoreProjectsItem[] =
    items ?? getMoreProjects(currentProjectId ?? "").map((project) => ({ project }))

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "relative isolate overflow-hidden border-t border-brand-100 bg-white py-16 dark:border-brand-900/40 dark:bg-gray-950",
        scrollMarginClass,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-50/30 to-accent1-50/35 dark:from-gray-950 dark:via-brand-950/10 dark:to-accent1-950/10"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="type-label text-brand-700 dark:text-brand-300">{label}</p>
          <h2 id={`${id}-heading`} className="type-section mt-4 copy-heading">
            {title}
          </h2>
          <p className="type-body mx-auto mt-5 max-w-3xl copy-body">{description}</p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
          {cards.map((item) => (
            <ProjectCard
              key={item.project.id}
              project={item.project}
              compact
              showContributions={false}
              label={item.label}
              summary={item.summary}
            />
          ))}
        </div>
        {note && <p className="type-body mx-auto mt-8 max-w-3xl text-center copy-body">{note}</p>}
        <div className={cn("flex justify-center", note ? "mt-3" : "mt-6")}>
          <LinkButton
            href={link.href}
            variant="line"
            icon={<ArrowUpRight className="h-4 w-4" />}
            {...(linkCta ? { "data-cta": linkCta } : {})}
          >
            {link.label}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
