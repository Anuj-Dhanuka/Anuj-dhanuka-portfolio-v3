import type { Metadata } from "next"

import { PageSectionNav } from "@/components/shared/page-section-nav"
import { ExpertiseSection } from "@/features/hire/components/hire-sections"
import {
  approach,
  engagement,
  expertise,
  freelanceContactHref,
  fullTimeContactHref,
  hireClosing,
  hireFaqId,
  hireFaqIntro,
  hireFaqTitle,
  hireFaqs,
  hireHero,
  hireImageAlt,
  hirePage,
  hirePrimaryEnquiry,
  hireSectionNav,
  selectedWork,
} from "@/features/hire/data/hire"
import { HireHero } from "@/features/hire-pages/components/hire-hero"
import { HirePageClosing } from "@/features/hire-pages/components/hire-page-closing"
import { Approach, WorkWithMe } from "@/features/hire-pages/components/hire-page-sections"
import { MoreProjects } from "@/features/projects/components/more-projects"
import { hirePageJsonLd, hirePageMetadata, serializeJsonLd } from "@/features/hire-pages/seo"

export const metadata: Metadata = hirePageMetadata(hirePage, hireImageAlt)

// The central Hire Me overview: choose a specialist page or enquire directly. It reuses the shared hire
// hero, engagement, process and closing pieces, with its own compact service and proof sections.
export default function HirePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(hirePageJsonLd(hirePage)) }}
      />
      <main id="main-content">
        <HireHero
          page={hirePage}
          hero={hireHero}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          primary={hirePrimaryEnquiry}
        />
        {/* Hidden on phones, where the page reads straight down; shown from sm up. */}
        <div className="hidden sm:block">
          <PageSectionNav items={hireSectionNav} ariaLabel="Hire Me page sections" />
        </div>
        <ExpertiseSection expertise={expertise} freelanceHref={freelanceContactHref} />
        {/* The case studies' "Continue exploring" section with this page's wording. */}
        <MoreProjects
          id={selectedWork.id}
          label={selectedWork.label}
          title={selectedWork.title}
          description={selectedWork.description}
          items={selectedWork.items}
          note={selectedWork.note}
          link={selectedWork.link}
          linkCta="view_shopify_work"
          scrollMarginClass="scroll-mt-24"
        />
        <WorkWithMe engagement={engagement} />
        <Approach approach={approach} freelanceContactHref={freelanceContactHref} />
        <HirePageClosing
          faqs={hireFaqs}
          faqId={hireFaqId}
          faqTitle={hireFaqTitle}
          faqIntro={hireFaqIntro}
          closing={hireClosing}
          fullTimeHref={fullTimeContactHref}
          freelanceHref={freelanceContactHref}
          fullTimeLabel={hireHero.fullTimeLabel}
          freelanceLabel={hireHero.freelanceLabel}
          primary={hirePrimaryEnquiry}
        />
      </main>
    </div>
  )
}
