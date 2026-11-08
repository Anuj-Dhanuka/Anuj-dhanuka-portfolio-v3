import type { Metadata } from "next"
import Link from "next/link"

import { CTA } from "@/components/shared/cta"
import { site } from "@/config/site"
import { ThirdEyeLabContent } from "@/features/experience/components/third-eye-lab/third-eye-lab-content"
import { ThirdEyeLabHero } from "@/features/experience/components/third-eye-lab/third-eye-lab-hero"
import {
  thirdEyeLabClosing,
  thirdEyeLabHero,
  thirdEyeLabPage,
} from "@/features/experience/data/third-eye-lab"

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
      datePublished: thirdEyeLabPage.lastModified,
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
          contactLabel="Start a conversation"
          resumeLabel="View my résumé"
        >
          <p className="type-small mt-8 font-semibold text-white">
            <Link
              href="/experience/ppcroy"
              data-cta="ppcroy_experience"
              data-cta-section="closing"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Continue to my PPCROY client-delivery experience
            </Link>
          </p>
        </CTA>
      </main>
    </div>
  )
}
