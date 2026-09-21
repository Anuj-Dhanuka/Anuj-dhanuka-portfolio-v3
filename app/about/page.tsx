import type { Metadata } from "next"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { AboutContent } from "@/features/about/components/about-content"
import { AboutHero } from "@/features/about/components/about-hero"

const title = "About Anuj Dhanuka | Frontend & React Native Developer"
const description =
  "Read Anuj Dhanuka's journey from mechanical engineering and family business operations to React, React Native and product development at ChefKart."
const url = `${site.url}/about`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "profile",
    siteName: site.name,
    locale: "en_IN",
    images: [
      {
        url: "/about/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Anuj Dhanuka, Software Engineer and Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/about/opengraph-image"],
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "About", item: url },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <AboutHero />
        <AboutContent />
        <CTA
          title="Looking for a dedicated developer to join your team?"
          description="I’m open to opportunities where I can contribute thoughtful frontend execution, product awareness and dependable delivery across web and mobile experiences."
          contactLabel="Start a conversation"
          contactHref="/contact"
        />
      </main>
    </div>
  )
}
