import type { Metadata } from "next"

import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { HirePageSectionsView } from "@/features/hire-pages/components/hire-page-sections"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"
import {
  freelanceContactHref,
  fullTimeContactHref,
  shopifyDeveloperClosing,
  shopifyDeveloperContent,
  shopifyDeveloperFaqIntro,
  shopifyDeveloperFaqTitle,
  shopifyDeveloperFaqs,
  shopifyDeveloperHero,
  shopifyDeveloperImageAlt,
  shopifyDeveloperPage,
} from "@/features/shopify-developer/data/shopify-developer"

export const metadata: Metadata = hirePageMetadata(shopifyDeveloperPage, shopifyDeveloperImageAlt)

export default function ShopifyDeveloperPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(shopifyDeveloperPage)) }}
      />
      <main id="main-content">
        <HireHero
          page={shopifyDeveloperPage}
          hero={shopifyDeveloperHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
        />
        <HirePageSectionsView sections={shopifyDeveloperContent} />
        <HirePageClosing
          faqs={shopifyDeveloperFaqs}
          faqTitle={shopifyDeveloperFaqTitle}
          faqIntro={shopifyDeveloperFaqIntro}
          closing={shopifyDeveloperClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={shopifyDeveloperHero.fullTimeLabel}
          freelanceLabel={shopifyDeveloperHero.freelanceLabel}
        />
      </main>
    </div>
  )
}
