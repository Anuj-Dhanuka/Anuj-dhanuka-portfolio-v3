import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, Code2 } from "lucide-react"

import { CTA, ctaPrimaryButtonClass, ctaSecondaryButtonClass } from "@/components/shared/cta"
import { FaqSection } from "@/components/shared/faq-section"
import { Button } from "@/components/ui/button"
import { site } from "@/config/site"
import { ReactDeveloperContent } from "@/features/react-developer/components/react-developer-content"
import { ReactDeveloperHero } from "@/features/react-developer/components/react-developer-hero"
import {
  freelanceContactHref,
  fullTimeContactHref,
  reactDeveloperClosing,
  reactDeveloperFaqIntro,
  reactDeveloperFaqs,
  reactDeveloperHero,
  reactDeveloperPage,
} from "@/features/react-developer/data/react-developer"

const { title, description } = reactDeveloperPage
const url = `${site.url}${reactDeveloperPage.path}`
const image = {
  url: `${reactDeveloperPage.path}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Anuj Dhanuka, React developer for hire in India",
}

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
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
}

// WebPage about the site-wide Person, plus breadcrumbs. No JobPosting, Offer, review, rating or FAQ markup.
const reactDeveloperJsonLd = {
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
      datePublished: reactDeveloperPage.published,
      dateModified: reactDeveloperPage.lastModified,
      inLanguage: site.locale,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
        { "@type": "ListItem", position: 2, name: "React Developer", item: url },
      ],
    },
  ],
}

export default function ReactDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reactDeveloperJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ReactDeveloperHero />
        <ReactDeveloperContent />
        <FaqSection
          items={reactDeveloperFaqs}
          title="Questions about working together"
          description={reactDeveloperFaqIntro}
          eyebrow="Questions"
          reveal={false}
          grid={false}
        />
        <CTA
          title={reactDeveloperClosing.title}
          description={reactDeveloperClosing.description}
          actions={
            <>
              <Button asChild size="lg" className={ctaPrimaryButtonClass}>
                <Link
                  href={fullTimeContactHref}
                  data-cta="discuss_full_time_role"
                  data-cta-section="closing_cta"
                >
                  <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {reactDeveloperHero.fullTimeLabel}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className={ctaSecondaryButtonClass}>
                <Link
                  href={freelanceContactHref}
                  data-cta="discuss_freelance_project"
                  data-cta-section="closing_cta"
                >
                  <Code2 className="mr-2 h-5 w-5" aria-hidden="true" /> {reactDeveloperHero.freelanceLabel}
                </Link>
              </Button>
            </>
          }
        />
      </main>
    </div>
  )
}
