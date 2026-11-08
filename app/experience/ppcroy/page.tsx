import type { Metadata } from "next"
import { Briefcase, Clock, MapPin } from "lucide-react"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { PpcroyContent } from "@/features/experience/components/ppcroy/ppcroy-content"
import { PpcroyHero } from "@/features/experience/components/ppcroy/ppcroy-hero"
import { ppcroyClosing, ppcroyHero, ppcroyPage } from "@/features/experience/data/ppcroy"

const url = `${site.url}${ppcroyPage.path}`
const image = {
  url: `${ppcroyPage.path}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "PPCROY client delivery experience by Anuj Dhanuka",
}

export const metadata: Metadata = {
  title: ppcroyPage.title,
  description: ppcroyPage.description,
  alternates: { canonical: url },
  openGraph: {
    title: ppcroyPage.title,
    description: ppcroyPage.description,
    url,
    type: "article",
    siteName: site.name,
    locale: "en_IN",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: ppcroyPage.title,
    description: ppcroyPage.description,
    images: [image],
  },
}

// WebPage + Article authored by the site-wide Person; no review, rating or FAQ markup.
const ppcroyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: ppcroyPage.title,
      description: ppcroyPage.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${url}/#article` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: `${ppcroyHero.title} ${ppcroyHero.titleAccent}`,
      description: ppcroyPage.description,
      url,
      author: { "@id": `${site.url}/#person` },
      about: { "@type": "Organization", name: "PPCROY TECH SOLUTIONS" },
      datePublished: ppcroyPage.lastModified,
      dateModified: ppcroyPage.lastModified,
      image: `${site.url}${ppcroyPage.path}/opengraph-image`,
      keywords: ppcroyHero.stack.join(", "),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
        { "@type": "ListItem", position: 2, name: "Experience", item: `${site.url}/experience` },
        { "@type": "ListItem", position: 3, name: "PPCROY", item: url },
      ],
    },
  ],
}

const availabilityIcons = [Clock, MapPin, Briefcase]

const closingLink =
  "underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"

export default function PpcroyExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ppcroyJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <PpcroyHero />
        <PpcroyContent />
        <CTA
          title={ppcroyClosing.title}
          description={ppcroyClosing.paragraphs}
          contactLabel={ppcroyClosing.contactLabel}
          resumeLabel={ppcroyClosing.resumeLabel}
        >
          {/* Phones: one panel, as wide as the buttons, with divided rows. Larger screens: a row of pills. */}
          <ul
            className="mt-8 divide-y divide-white/15 rounded-lg border border-white/20 bg-white/10 text-left sm:flex sm:flex-wrap sm:justify-center sm:gap-2 sm:divide-y-0 sm:border-0 sm:bg-transparent"
            aria-label="Availability"
          >
            {ppcroyClosing.availability.map((item, index) => {
              const Icon = availabilityIcons[index]
              return (
                <li
                  key={item}
                  className="type-small flex items-center gap-3 px-4 py-3 text-white sm:inline-flex sm:gap-2 sm:rounded-full sm:border sm:border-white/25 sm:bg-white/10 sm:px-3 sm:py-1.5"
                >
                  <Icon className="h-4 w-4 text-white/80" aria-hidden="true" />
                  {item}
                </li>
              )
            })}
          </ul>
          <p className="type-small mt-6 font-semibold text-white">
            <a
              href={site.linkedIn}
              data-cta="linkedin"
              data-cta-section="closing"
              target="_blank"
              rel="noopener noreferrer"
              className={closingLink}
            >
              {ppcroyClosing.linkedInLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </CTA>
      </main>
    </div>
  )
}
