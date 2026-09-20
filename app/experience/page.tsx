import type { Metadata } from "next"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { ExperienceContent } from "@/features/experience/components/experience-content"
import { ExperienceHero } from "@/features/experience/components/experience-hero"

const title = "Professional Experience | React & React Native Developer"
const description =
  "Explore Anuj Dhanuka's professional experience building React Native apps, React and Next.js products, dashboards, payment workflows and 20+ client websites."
const url = `${site.url}/experience`

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
    locale: "en_IN",
    images: [
      {
        url: "/experience/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Professional experience of Anuj Dhanuka, React and React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/experience/opengraph-image"],
  },
}

const experienceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${site.url}/#person` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Experience", item: url },
      ],
    },
  ],
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ExperienceHero />
        <ExperienceContent />
        <CTA
          title="Looking for a developer who can contribute across web and mobile?"
          description="I’m open to opportunities where I can bring React, React Native, product awareness and dependable cross-functional delivery to a team building useful digital products."
          contactLabel="Start a conversation"
          contactHref="/#contact"
        />
      </main>
    </div>
  )
}
