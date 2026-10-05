import {
  projects,
  type Project,
  type ProjectEvidence,
  type ProjectCaseStudy,
} from "@/features/projects/data/projects"

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

const moreProjectOrder = ["mopedo", "quizwar", "rekha-maa-ki-rasoi", "rama-technical-college"] as const

export function getMoreProjects(currentProjectId: string): Project[] {
  return moreProjectOrder
    .filter((projectId) => projectId !== currentProjectId)
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter((project): project is Project => project !== undefined)
    .slice(0, 3)
}

export function projectEvidenceUrl(project: CaseStudyProject, evidence: ProjectEvidence) {
  if (!project.githubLink || !project.caseStudy.sourceRevision) return undefined
  const file = evidence.file.split("/").map(encodeURIComponent).join("/")
  return `${project.githubLink}/blob/${project.caseStudy.sourceRevision}/${file}#L${evidence.startLine}-L${evidence.endLine}`
}
