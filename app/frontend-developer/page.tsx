import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  frontendDeveloperClosing,
  frontendDeveloperContent,
  frontendDeveloperFaqIntro,
  frontendDeveloperFaqs,
  frontendDeveloperHero,
  frontendDeveloperImageAlt,
  frontendDeveloperPage,
} from "@/features/frontend-developer/data/frontend-developer"

export const metadata: Metadata = hirePageMetadata(frontendDeveloperPage, frontendDeveloperImageAlt)

export default function FrontendDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(frontendDeveloperPage)) }}
      />
      <main id="main-content">
        <HireHero
          page={frontendDeveloperPage}
          hero={frontendDeveloperHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
        />
        <HirePageSectionsView sections={frontendDeveloperContent} />
        <HirePageClosing
          faqs={frontendDeveloperFaqs}
          faqIntro={frontendDeveloperFaqIntro}
          closing={frontendDeveloperClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={frontendDeveloperHero.fullTimeLabel}
          freelanceLabel={frontendDeveloperHero.freelanceLabel}
        />
      </main>
    </div>
  )
}
