import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  wordpressDeveloperClosing,
  wordpressDeveloperContent,
  wordpressDeveloperFaqIntro,
  wordpressDeveloperFaqId,
  wordpressDeveloperFaqs,
  wordpressDeveloperHero,
  wordpressDeveloperImageAlt,
  wordpressDeveloperPage,
} from "@/features/wordpress-developer/data/wordpress-developer"

export const metadata: Metadata = hirePageMetadata(wordpressDeveloperPage, wordpressDeveloperImageAlt)

export default function WordpressDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(wordpressDeveloperPage)) }}
      />
      <main id="main-content">
        <HireHero
          breadcrumb={wordpressDeveloperPage.breadcrumb}
          hero={wordpressDeveloperHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
        />
        <HirePageSectionsView sections={wordpressDeveloperContent} />
        <HirePageClosing
          faqs={wordpressDeveloperFaqs}
          faqId={wordpressDeveloperFaqId}
          faqIntro={wordpressDeveloperFaqIntro}
          closing={wordpressDeveloperClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={wordpressDeveloperHero.fullTimeLabel}
          freelanceLabel={wordpressDeveloperHero.freelanceLabel}
        />
      </main>
    </div>
  )
}
