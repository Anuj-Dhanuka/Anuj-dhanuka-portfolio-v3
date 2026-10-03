import { site } from "@/config/site"
import type { MetadataRoute } from "next"
import { caseStudyProjects, projectPath } from "@/features/projects/project-details"

export default function sitemap(): MetadataRoute.Sitemap {
  // Explicit dates track meaningful page-specific changes, not build/request time.
  // September dates come from the page-content commit; October dates reflect
  // the reviewed homepage FAQ/schema, project schema and contact artwork updates.
  // October 3 adds Certifications, its homepage link and the shared certificate order on About.
  // Reviewed case studies and their links on Projects/Experience/Skills also ship October 3.
  return [
    { url: site.homeUrl, lastModified: "2026-10-03" },
    { url: `${site.url}/about`, lastModified: "2026-10-03" },
    { url: `${site.url}/experience`, lastModified: "2026-10-03" },
    { url: `${site.url}/skills`, lastModified: "2026-10-03" },
    { url: `${site.url}/projects`, lastModified: "2026-10-03" },
    { url: `${site.url}/certifications`, lastModified: "2026-10-03" },
    { url: `${site.url}/contact`, lastModified: "2026-10-02" },
    ...caseStudyProjects.map((project) => ({
      url: `${site.url}${projectPath(project)}`,
      lastModified: project.caseStudy.lastModified,
    })),
  ]
}
