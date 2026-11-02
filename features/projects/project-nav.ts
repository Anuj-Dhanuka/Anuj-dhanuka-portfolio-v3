import type { ProjectNavItem } from "@/components/layout/projects-nav"
import { projects } from "@/features/projects/data/projects"

// Header dropdown entries, in the shared display order. Built on the server and passed to the
// client navbar so only these few fields are serialised.
export const projectNavItems: ProjectNavItem[] = projects.flatMap((project) => {
  const image = project.image ?? project.images?.[0]
  if (!image) return []

  return [
    {
      id: project.id,
      title: project.title,
      category: project.category,
      summary: project.compactDescription ?? project.description,
      href: project.caseStudy ? `/projects/${project.caseStudy.slug}` : `/projects#project-${project.id}`,
      image,
      fit: project.type === "mobile" ? "contain" : "cover",
    },
  ]
})
