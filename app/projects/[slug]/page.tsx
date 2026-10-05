import { notFound } from "next/navigation"
import { CTA } from "@/components/shared/cta"
import { LevelsProjectDetail } from "@/features/projects/components/levels-project-detail"
import { MopedoProjectDetail } from "@/features/projects/components/mopedo-project-detail"
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
        ) : (
          <LevelsProjectDetail project={project} />
        )}
        <CTA
          title="Want to discuss similar frontend or mobile work?"
          description="Get in touch to discuss a role, a product interface or a website project."
          contactLabel="Get in touch"
        />
      </main>
    </div>
  )
}
