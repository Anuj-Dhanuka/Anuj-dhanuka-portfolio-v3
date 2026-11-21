import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  reactDeveloperClosing,
  reactDeveloperContent,
  reactDeveloperFaqIntro,
  reactDeveloperFaqs,
  reactDeveloperHero,
  reactDeveloperPage,
} from "@/features/react-developer/data/react-developer"

export const metadata: Metadata = hirePageMetadata(
  reactDeveloperPage,
  "Anuj Dhanuka, React developer for hire in India",
)

export default function ReactDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(reactDeveloperPage)) }}
      />
      <main id="main-content">
        <HireHero
          breadcrumb={reactDeveloperPage.breadcrumb}
          hero={reactDeveloperHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
        />
        <HirePageSectionsView sections={reactDeveloperContent} />
        <HirePageClosing
          faqs={reactDeveloperFaqs}
          faqIntro={reactDeveloperFaqIntro}
          closing={reactDeveloperClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={reactDeveloperHero.fullTimeLabel}
          freelanceLabel={reactDeveloperHero.freelanceLabel}
        />
      </main>
    </div>
  )
}
