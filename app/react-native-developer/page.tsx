import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  reactNativeDeveloperClosing,
  reactNativeDeveloperContent,
  reactNativeDeveloperFaqIntro,
  reactNativeDeveloperFaqs,
  reactNativeDeveloperHero,
  reactNativeDeveloperImageAlt,
  reactNativeDeveloperPage,
} from "@/features/react-native-developer/data/react-native-developer"

export const metadata: Metadata = hirePageMetadata(reactNativeDeveloperPage, reactNativeDeveloperImageAlt)

export default function ReactNativeDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(reactNativeDeveloperPage)) }}
      />
      <main id="main-content">
        <HireHero
          breadcrumb={reactNativeDeveloperPage.breadcrumb}
          hero={reactNativeDeveloperHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
        />
        <HirePageSectionsView sections={reactNativeDeveloperContent} />
        <HirePageClosing
          faqs={reactNativeDeveloperFaqs}
          faqIntro={reactNativeDeveloperFaqIntro}
          closing={reactNativeDeveloperClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={reactNativeDeveloperHero.fullTimeLabel}
          freelanceLabel={reactNativeDeveloperHero.freelanceLabel}
        />
      </main>
    </div>
  )
}
