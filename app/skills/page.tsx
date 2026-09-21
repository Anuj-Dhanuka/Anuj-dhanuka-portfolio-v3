import type { Metadata } from "next"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { SkillsContent } from "@/features/skills/components/skills-content"
import { SkillsHero } from "@/features/skills/components/skills-hero"

const title = "Technical Skills | React, React Native & Next.js Developer"
const description =
  "Explore Anuj Dhanuka's applied skills in React, Next.js, React Native, TypeScript, responsive UI, product delivery and modern web platforms."
const url = `${site.url}/skills`

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
        url: "/skills/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Technical skills of Anuj Dhanuka across React, React Native and Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/skills/opengraph-image"],
  },
}

const skillsJsonLd = {
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
        { "@type": "ListItem", position: 2, name: "Skills", item: url },
      ],
    },
  ],
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <SkillsHero />
        <SkillsContent />
        <CTA
          title="Looking for a developer who can contribute across web and mobile?"
          description="I’m open to opportunities where I can apply React, React Native, product awareness and dependable frontend delivery within a collaborative team."
          contactLabel="Start a conversation"
          contactHref="/contact"
        />
      </main>
    </div>
  )
}
