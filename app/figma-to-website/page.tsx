import type { Metadata } from "next"

import {
  figmaToWebsiteClosing,
  figmaToWebsiteContent,
  figmaToWebsiteFaqId,
  figmaToWebsiteFaqIntro,
  figmaToWebsiteFaqTitle,
  figmaToWebsiteFaqs,
  figmaToWebsiteHero,
  figmaToWebsiteImageAlt,
  figmaToWebsitePage,
  figmaToWebsitePrimaryEnquiry,
  freelanceContactHref,
  fullTimeContactHref,
} from "@/features/figma-to-website/data/figma-to-website"
import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"

export const metadata: Metadata = hirePageMetadata(figmaToWebsitePage, figmaToWebsiteImageAlt)

// Service page on the shared hire-page layout; the project enquiry leads in the hero and closing CTA.
export default function FigmaToWebsitePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(figmaToWebsitePage)) }}
      />
      <main id="main-content">
        <HireHero
          page={figmaToWebsitePage}
          hero={figmaToWebsiteHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          primary={figmaToWebsitePrimaryEnquiry}
        />
        <HirePageSectionsView sections={figmaToWebsiteContent} />
        <HirePageClosing
          faqs={figmaToWebsiteFaqs}
          faqId={figmaToWebsiteFaqId}
          faqTitle={figmaToWebsiteFaqTitle}
          faqIntro={figmaToWebsiteFaqIntro}
          closing={figmaToWebsiteClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={figmaToWebsiteHero.fullTimeLabel}
          freelanceLabel={figmaToWebsiteHero.freelanceLabel}
          primary={figmaToWebsitePrimaryEnquiry}
        />
      </main>
    </div>
  )
}
