import { describe, expect, it } from "vitest"
import { projects } from "@/features/projects/data/projects"
import {
  caseStudyProjects,
  getCaseStudyProject,
  getMoreProjects,
  projectPath,
  projectEvidenceUrl,
} from "@/features/projects/project-details"
import { projectJsonLd, projectMetadata } from "@/features/projects/project-seo"
import { site } from "@/config/site"

describe("project publication boundaries", () => {
  it("publishes only reviewed case studies with unique stable slugs", () => {
    expect(caseStudyProjects.map(projectPath)).toEqual(["/projects/mopedo", "/projects/quizwar"])
    expect(new Set(caseStudyProjects.map(projectPath)).size).toBe(caseStudyProjects.length)
    for (const project of caseStudyProjects) {
      expect(project.caseStudy.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(project.caseStudy.implementation.length).toBeGreaterThan(0)
      expect(project.contributions.length).toBeGreaterThan(0)
    }
    for (const project of projects.filter((item) => !item.caseStudy)) {
      expect(getCaseStudyProject(project.id)).toBeUndefined()
    }
    for (const slug of [
      "levels-app",
      "quiz-war-app",
      "react-native-quiz-app",
      "missing-project",
      "Mopedo",
      "../mopedo",
      "toString",
    ]) {
      expect(getCaseStudyProject(slug)).toBeUndefined()
    }
  })

  it("publishes the independent mobile project without retired client evidence", () => {
    const project = getCaseStudyProject("quizwar")
    expect(project).toBeDefined()
    expect(project?.githubLink).toBe("https://github.com/Anuj-Dhanuka/QuizWar")
    expect(project?.caseStudy.experienceHref).toBeUndefined()
    expect(project?.caseStudy.screenshots).toHaveLength(3)
    expect(project?.caseStudy.screenshots.every((image) => image.src.startsWith("/quizwar-"))).toBe(true)
    expect(JSON.stringify(project)).not.toMatch(/levels|3rd Eye|internship|2024|ahead of schedule/i)
    expect(projects.some((item) => item.id === "levels-app")).toBe(false)
  })

  it("keeps metadata, breadcrumbs and work entities on the same production URL", () => {
    for (const project of caseStudyProjects) {
      const url = `${site.url}${projectPath(project)}`
      const metadata = projectMetadata(project)
      const graph = projectJsonLd(project)["@graph"]
      const description = project.caseStudy.metaDescription ?? project.caseStudy.summary
      expect(metadata.alternates?.canonical).toBe(url)
      expect(metadata.openGraph).toMatchObject({ url })
      expect(metadata).toMatchObject({ description })
      expect(metadata.openGraph).toMatchObject({ description })
      expect(metadata.twitter).toMatchObject({ description })
      expect(graph[0]).toMatchObject({ url, description, mainEntity: { "@id": `${url}/#work` } })
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

  it("builds revision-pinned evidence URLs from the published repository", () => {
    const project = getCaseStudyProject("quizwar")!
    const evidence = [
      ...project.caseStudy.implementation.flatMap((item) => (item.evidence ? [item.evidence] : [])),
      ...(project.caseStudy.decisions?.flatMap((item) => (item.evidence ? [item.evidence] : [])) ?? []),
      ...(project.caseStudy.challenge?.evidence ? [project.caseStudy.challenge.evidence] : []),
    ]
    expect(evidence.length).toBeGreaterThanOrEqual(5)
    expect(project.caseStudy.sourceRevision).toMatch(/^[a-f0-9]{40}$/)
    for (const item of evidence) {
      const url = new URL(projectEvidenceUrl(project, item)!)
      expect(url.origin).toBe("https://github.com")
      expect(url.pathname).toBe(`/Anuj-Dhanuka/QuizWar/blob/${project.caseStudy.sourceRevision}/${item.file}`)
      expect(url.hash).toBe(`#L${item.startLine}-L${item.endLine}`)
      expect(item.startLine).toBeGreaterThan(0)
      expect(item.endLine).toBeGreaterThanOrEqual(item.startLine)
      expect(url.pathname).not.toMatch(/google-services|main\//)
    }
    expect(
      projectEvidenceUrl(project, {
        label: "Encoded path",
        file: "src/Some File.js",
        startLine: 1,
        endLine: 2,
      }),
    ).toContain("Some%20File.js#L1-L2")
    expect(projectEvidenceUrl(getCaseStudyProject("mopedo")!, evidence[0])).toBeUndefined()
  })

  it("shows three other projects without publishing listing-only case studies", () => {
    expect(getMoreProjects("mopedo").map((project) => project.id)).toEqual([
      "quizwar",
      "rekha-maa-ki-rasoi",
      "rama-technical-college",
    ])
    expect(getMoreProjects("quizwar").map((project) => project.id)).toEqual([
      "mopedo",
      "rekha-maa-ki-rasoi",
      "rama-technical-college",
    ])
    for (const project of caseStudyProjects) {
      const moreProjects = getMoreProjects(project.id)
      expect(moreProjects).toHaveLength(3)
      expect(new Set(moreProjects.map((item) => item.id)).size).toBe(3)
      expect(moreProjects.some((item) => item.id === project.id)).toBe(false)
      for (const item of moreProjects.filter((candidate) => !candidate.caseStudy)) {
        expect(getCaseStudyProject(item.id)).toBeUndefined()
        expect(item.liveLink).toBeTruthy()
      }
    }
  })
})
