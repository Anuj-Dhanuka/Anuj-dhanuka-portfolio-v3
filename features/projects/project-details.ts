import { projects, type Project, type ProjectCaseStudy } from "@/features/projects/data/projects"

export type CaseStudyProject = Project & { caseStudy: ProjectCaseStudy }

export const caseStudyProjects = projects.filter(
  (project): project is CaseStudyProject => project.caseStudy !== undefined,
)

export function getCaseStudyProject(slug: string): CaseStudyProject | undefined {
  return caseStudyProjects.find((project) => project.caseStudy.slug === slug)
}

export function projectPath(project: CaseStudyProject): `/projects/${string}` {
  return `/projects/${project.caseStudy.slug}`
}

export function getRelatedProjects(project: CaseStudyProject): CaseStudyProject[] {
  return caseStudyProjects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({
      project: candidate,
      sharedTags: candidate.tags.filter((tag) => project.tags.includes(tag)).length,
    }))
    .filter((candidate) => candidate.sharedTags > 0)
    .sort((left, right) => right.sharedTags - left.sharedTags)
    .slice(0, 2)
    .map((candidate) => candidate.project)
}
