import { site } from "@/config/site"
import type { Metadata } from "next"
import { CTA } from "@/components/shared/cta"
import { ProjectsOverview } from "@/features/projects/components/projects-overview"
import { projects } from "@/features/projects/data/projects"

const title = "Web & Mobile Development Projects | Anuj Dhanuka"
const description =
  "Explore web and mobile projects by Anuj Dhanuka, from business websites to interactive apps. See project screenshots, development work and live demos."
const url = `${site.url}/projects`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/projects/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Web and mobile projects by Anuj Dhanuka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projects/opengraph-image"],
  },
}

const projectJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      author: { "@id": `${site.url}/#person` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          ...projects.filter((project) => project.id === "mopedo"),
          ...projects.filter((project) => project.id !== "mopedo"),
        ].map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${url}#project-${project.id}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Projects", item: url },
      ],
    },
  ],
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ProjectsOverview />
        <CTA
          title="Have a web or mobile project in mind?"
          description="Let’s discuss how I can help turn your designs and product requirements into a responsive, usable experience."
          contactLabel="Get in touch"
          contactHref="/#contact"
        />
      </main>
    </div>
  )
}
