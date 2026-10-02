import type { Metadata } from "next"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { CertificationsContent } from "@/features/certifications/components/certifications-content"
import { CertificationsHero } from "@/features/certifications/components/certifications-hero"

import { certificates } from "@/features/certifications/data/certifications"

const title = "Certifications | Anuj Dhanuka | React & React Native"
const description =
  "Explore Anuj Dhanuka's course certificates from NxtWave CCBP and Udemy in React, React Native, JavaScript, responsive web design, Node.js and databases."
const url = `${site.url}/certifications`

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
        url: "/certifications/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anuj Dhanuka’s certifications from NxtWave CCBP and Udemy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/certifications/opengraph-image"],
  },
}

const certificationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: certificates.length,
        itemListElement: certificates.map(({ title: name, href }, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          url: href,
        })),
      },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Certifications", item: url },
      ],
    },
  ],
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <CertificationsHero />
        <CertificationsContent />
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
