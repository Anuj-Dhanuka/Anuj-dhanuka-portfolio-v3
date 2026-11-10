import type { Metadata } from "next"
import { Briefcase, Clock, MapPin } from "lucide-react"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { ThirdEyeLabContent } from "@/features/experience/components/third-eye-lab/third-eye-lab-content"
import { ThirdEyeLabHero } from "@/features/experience/components/third-eye-lab/third-eye-lab-hero"
import {
  thirdEyeLabClosing,
  thirdEyeLabHero,
  thirdEyeLabPage,
} from "@/features/experience/data/third-eye-lab"

const availabilityIcons = [Clock, MapPin, Briefcase]

const url = `${site.url}${thirdEyeLabPage.path}`
const image = {
  url: `${thirdEyeLabPage.path}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "3rd Eye Lab React Native internship experience by Anuj Dhanuka",
}

export const metadata: Metadata = {
  title: thirdEyeLabPage.title,
  description: thirdEyeLabPage.description,
  alternates: { canonical: url },
  openGraph: {
    title: thirdEyeLabPage.title,
    description: thirdEyeLabPage.description,
    url,
    type: "article",
    siteName: site.name,
    locale: "en_IN",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: thirdEyeLabPage.title,
    description: thirdEyeLabPage.description,
    images: [image],
  },
}

const thirdEyeLabJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: thirdEyeLabPage.title,
      description: thirdEyeLabPage.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${url}/#article` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      inLanguage: site.locale,
    },
    {
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: `${thirdEyeLabHero.title} ${thirdEyeLabHero.titleAccent}`,
      description: thirdEyeLabPage.description,
      url,
      author: { "@id": `${site.url}/#person` },
      about: { "@type": "Organization", name: "3rd Eye Lab" },
      datePublished: thirdEyeLabPage.published,
      dateModified: thirdEyeLabPage.lastModified,
      image: `${site.url}${thirdEyeLabPage.path}/opengraph-image`,
      keywords: thirdEyeLabHero.stack.join(", "),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
        { "@type": "ListItem", position: 2, name: "Experience", item: `${site.url}/experience` },
        { "@type": "ListItem", position: 3, name: "3rd Eye Lab", item: url },
      ],
    },
  ],
}

export default function ThirdEyeLabExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thirdEyeLabJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main-content">
        <ThirdEyeLabHero />
        <ThirdEyeLabContent />
        <CTA
          title={thirdEyeLabClosing.title}
          description={thirdEyeLabClosing.description}
          contactLabel={thirdEyeLabClosing.contactLabel}
          resumeLabel={thirdEyeLabClosing.resumeLabel}
        >
          {/* As on PPCROY. Phones: one panel, as wide as the buttons, with divided rows. Larger screens: a row of pills. */}
          <ul
            className="mt-8 divide-y divide-white/15 rounded-lg border border-white/20 bg-white/10 text-left sm:flex sm:flex-wrap sm:justify-center sm:gap-2 sm:divide-y-0 sm:border-0 sm:bg-transparent"
            aria-label="Availability"
          >
            {thirdEyeLabClosing.availability.map((item, index) => {
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
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {thirdEyeLabClosing.linkedInLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </CTA>
      </main>
    </div>
  )
}
