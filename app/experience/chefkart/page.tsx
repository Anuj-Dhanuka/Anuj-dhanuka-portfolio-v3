import type { Metadata } from "next"
import Link from "next/link"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { ChefkartContent } from "@/features/experience/components/chefkart/chefkart-content"
import { ChefkartHero } from "@/features/experience/components/chefkart/chefkart-hero"
import { chefkartClosing, chefkartHero, chefkartPage } from "@/features/experience/data/chefkart"

const url = `${site.url}${chefkartPage.path}`
const image = {
  url: `${chefkartPage.path}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "ChefKart product engineering case study by Anuj Dhanuka",
}

export const metadata: Metadata = {
  title: chefkartPage.title,
  description: chefkartPage.description,
  alternates: { canonical: url },
  openGraph: {
    title: chefkartPage.ogTitle,
    description: chefkartPage.ogDescription,
    url,
    type: "article",
    siteName: site.name,
    locale: "en_IN",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: chefkartPage.ogTitle,
    description: chefkartPage.ogDescription,
    images: [image],
  },
}

// WebPage + Article authored by the site-wide Person; no review, rating or FAQ markup.
const chefkartJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: chefkartPage.title,
      description: chefkartPage.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${url}/#article` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: `${chefkartHero.title} ${chefkartHero.titleAccent}`,
      description: chefkartPage.description,
      url,
      author: { "@id": `${site.url}/#person` },
      about: { "@type": "Organization", name: "ChefKart" },
      datePublished: chefkartPage.published,
      dateModified: chefkartPage.lastModified,
      image: `${site.url}${chefkartPage.path}/opengraph-image`,
      keywords: chefkartHero.stack.join(", "),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
        { "@type": "ListItem", position: 2, name: "Experience", item: `${site.url}/experience` },
        { "@type": "ListItem", position: 3, name: "ChefKart", item: url },
      ],
    },
  ],
}

export default function ChefkartExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chefkartJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ChefkartHero />
        <ChefkartContent />
        <CTA
          title={chefkartClosing.title}
          description={chefkartClosing.cta}
          contactLabel="Let’s talk"
          resumeLabel="View my résumé"
        >
          {/* Links the two experience case studies to each other. */}
          <p className="type-small mt-8 font-semibold text-white">
            <Link
              href="/experience/ppcroy"
              data-cta="ppcroy_experience"
              data-cta-section="closing"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Read about my PPCROY client experience
            </Link>
          </p>
        </CTA>
      </main>
    </div>
  )
}
