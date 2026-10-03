import { describe, expect, it } from "vitest"
import { projects } from "@/features/projects/data/projects"
import {
  caseStudyProjects,
  getCaseStudyProject,
  getRelatedProjects,
  projectPath,
} from "@/features/projects/project-details"
import { projectJsonLd, projectMetadata } from "@/features/projects/project-seo"
import { site } from "@/config/site"

describe("project publication boundaries", () => {
  it("publishes only reviewed case studies with unique stable slugs", () => {
    expect(caseStudyProjects.map(projectPath)).toEqual(["/projects/mopedo", "/projects/levels-app"])
    expect(new Set(caseStudyProjects.map(projectPath)).size).toBe(caseStudyProjects.length)
    for (const project of caseStudyProjects) {
      expect(project.caseStudy.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(project.caseStudy.implementation.length).toBeGreaterThan(0)
      expect(project.contributions.length).toBeGreaterThan(0)
    }
    for (const project of projects.filter((item) => !item.caseStudy)) {
      expect(getCaseStudyProject(project.id)).toBeUndefined()
    }
    for (const slug of ["missing-project", "Mopedo", "../mopedo", "toString"]) {
      expect(getCaseStudyProject(slug)).toBeUndefined()
    }
  })

  it("keeps metadata, breadcrumbs and work entities on the same production URL", () => {
    for (const project of caseStudyProjects) {
      const url = `${site.url}${projectPath(project)}`
      const metadata = projectMetadata(project)
      const graph = projectJsonLd(project)["@graph"]
      expect(metadata.alternates?.canonical).toBe(url)
      expect(metadata.openGraph).toMatchObject({ url })
      expect(metadata.twitter).toMatchObject({ description: project.caseStudy.summary })
      expect(graph[0]).toMatchObject({ url, mainEntity: { "@id": `${url}/#work` } })
      expect(graph[1]).toMatchObject({ url, creator: { "@id": `${site.url}/#person` } })
      expect(graph[2]).toMatchObject({
        itemListElement: [
          { position: 1, item: site.homeUrl },
          { position: 2, item: `${site.url}/projects` },
          { position: 3, item: url },
        ],
      })
      expect(graph.some((entity) => entity["@type"] === "Person")).toBe(false)
    }
  })

  it("recommends only other published projects with shared technologies", () => {
    for (const project of caseStudyProjects) {
      const related = getRelatedProjects(project)
      expect(related.length).toBeGreaterThan(0)
      for (const candidate of related) {
        expect(candidate.id).not.toBe(project.id)
        expect(candidate.tags.some((tag) => project.tags.includes(tag))).toBe(true)
      }
    }
    expect(getRelatedProjects({ ...caseStudyProjects[0], tags: ["Unrelated technology"] })).toEqual([])
  })
})
