import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  landingPageDevelopmentClosing,
  landingPageDevelopmentContent,
  landingPageDevelopmentFaqId,
  landingPageDevelopmentFaqIntro,
  landingPageDevelopmentFaqTitle,
  landingPageDevelopmentFaqs,
  landingPageDevelopmentHero,
  landingPageDevelopmentImageAlt,
  landingPageDevelopmentPage,
  landingPagePrimaryEnquiry,
} from "@/features/landing-page-development/data/landing-page-development"

export const metadata: Metadata = hirePageMetadata(landingPageDevelopmentPage, landingPageDevelopmentImageAlt)

// Service page on the shared hire-page layout; the project enquiry leads in the hero and closing CTA.
export default function LandingPageDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(landingPageDevelopmentPage)) }}
      />
      <main id="main-content">
        <HireHero
          page={landingPageDevelopmentPage}
          hero={landingPageDevelopmentHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          primary={landingPagePrimaryEnquiry}
        />
        <HirePageSectionsView sections={landingPageDevelopmentContent} />
        <HirePageClosing
          faqs={landingPageDevelopmentFaqs}
          faqId={landingPageDevelopmentFaqId}
          faqTitle={landingPageDevelopmentFaqTitle}
          faqIntro={landingPageDevelopmentFaqIntro}
          closing={landingPageDevelopmentClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={landingPageDevelopmentHero.fullTimeLabel}
          freelanceLabel={landingPageDevelopmentHero.freelanceLabel}
          primary={landingPagePrimaryEnquiry}
        />
      </main>
    </div>
  )
}
