import type { Metadata } from "next"
import { site } from "@/config/site"
import { projectPath, type CaseStudyProject } from "@/features/projects/project-details"

export function projectMetadata(project: CaseStudyProject): Metadata {
  const title = `${project.title} — ${project.category} | ${site.author}`
  const description = project.caseStudy.metaDescription ?? project.caseStudy.summary
  const path = projectPath(project)
  const image = {
    url: `${path}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${project.title} by ${site.author}`,
  }

  return {
    title,
    description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  }
}

export function projectJsonLd(project: CaseStudyProject) {
  const url = `${site.url}${projectPath(project)}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${project.title} — project case study`,
        description: project.caseStudy.metaDescription ?? project.caseStudy.summary,
        isPartOf: { "@id": `${site.url}/#website` },
        author: { "@id": `${site.url}/#person` },
        mainEntity: { "@id": `${url}/#work` },
        breadcrumb: { "@id": `${url}/#breadcrumb` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}/#work`,
        url,
        name: project.title,
        description: project.description,
        creator: { "@id": `${site.url}/#person` },
        keywords: project.tags.join(", "),
        image: project.caseStudy.screenshots.map((screenshot) => `${site.url}${screenshot.src}`),
        sameAs: [project.liveLink, project.githubLink].filter(Boolean),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  }
}
