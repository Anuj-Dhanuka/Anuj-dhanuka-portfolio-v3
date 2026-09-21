import type { Metadata } from "next"

import { site } from "@/config/site"
import { ContactHero } from "@/features/contact/components/contact-hero"
import { ContactPageContent } from "@/features/contact/components/contact-page-content"

const title = "Contact Anuj Dhanuka | React & React Native Developer"
const description =
  "Contact Anuj Dhanuka about frontend and software engineering roles, React and Next.js products, React Native apps or selected web and mobile projects."
const url = site.url + "/contact"

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
        url: "/contact/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Anuj Dhanuka, React and React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/contact/opengraph-image"],
  },
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": url + "/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": site.url + "/#website" },
      about: { "@id": site.url + "/#person" },
      mainEntity: { "@id": site.url + "/#person" },
      breadcrumb: { "@id": url + "/#breadcrumb" },
      inLanguage: site.locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": url + "/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: url },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ContactHero />
        <ContactPageContent />
      </main>
    </div>
  )
}
