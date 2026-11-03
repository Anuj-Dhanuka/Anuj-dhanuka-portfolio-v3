import type { ProjectNavItem } from "@/components/layout/projects-nav"
import { projects } from "@/features/projects/data/projects"

// Header dropdown entries, in the shared display order. Built on the server and passed to the
// client navbar so only these few fields are serialised.
export const projectNavItems: ProjectNavItem[] = projects.map((project) => ({
  id: project.id,
  title: project.title,
  href: project.caseStudy ? `/projects/${project.caseStudy.slug}` : `/projects#project-${project.id}`,
}))
