import { notFound } from "next/navigation"
import { CTA } from "@/components/shared/cta"
import { QuizWarProjectDetail } from "@/features/projects/components/quizwar-project-detail"
import { MopedoProjectDetail } from "@/features/projects/components/mopedo-project-detail"
import { RekhaProjectDetail } from "@/features/projects/components/rekha-project-detail"
import { caseStudyProjects, getCaseStudyProject } from "@/features/projects/project-details"
import { projectJsonLd, projectMetadata } from "@/features/projects/project-seo"

type ProjectPageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.caseStudy.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getCaseStudyProject((await params).slug)
  if (!project) notFound()
  return projectMetadata(project)
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getCaseStudyProject((await params).slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        {project.caseStudy.slug === "mopedo" ? (
          <MopedoProjectDetail project={project} />
        ) : project.caseStudy.slug === "rekha-maa-ki-rasoi" ? (
          <RekhaProjectDetail project={project} />
        ) : (
          <QuizWarProjectDetail project={project} />
        )}
        <CTA
          title="Want to discuss a product interface or business website?"
          description="Get in touch to discuss a frontend role, responsive interface or end-to-end website project."
          contactLabel="Get in touch"
        />
      </main>
    </div>
  )
}
