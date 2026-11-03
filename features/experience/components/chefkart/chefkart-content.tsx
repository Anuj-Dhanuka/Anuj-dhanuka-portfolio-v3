import { ArrowDown } from "lucide-react"

import { FaqSection } from "@/components/shared/faq-section"
import { StatsStrip } from "@/components/shared/stats-strip"
import { ChefkartBring } from "@/features/experience/components/chefkart/chefkart-bring"
import { ChefkartBreadth } from "@/features/experience/components/chefkart/chefkart-breadth"
import { CaseStudy } from "@/features/experience/components/chefkart/chefkart-case-study"
import { ChefkartContribution } from "@/features/experience/components/chefkart/chefkart-contribution"
import { ChefkartPrinciples } from "@/features/experience/components/chefkart/chefkart-principles"
import { ChefkartRole } from "@/features/experience/components/chefkart/chefkart-role"
import {
  ChefkartJourney,
  ChefkartProducts,
  ChefkartStory,
} from "@/features/experience/components/chefkart/chefkart-story"
import {
  chefkartCaseStudies,
  chefkartFaq,
  chefkartFaqHeader,
  chefkartProof,
  chefkartProofNote,
} from "@/features/experience/data/chefkart"

export function ChefkartContent() {
  return (
    <>
      <StatsStrip
        stats={chefkartProof}
        size="compact"
        ariaLabel="Verified contribution at ChefKart"
        footnote={
          <p className="type-caption copy-body">
            {chefkartProofNote}.{" "}
            <a
              href="#contribution"
              className="inline-flex items-center gap-1 font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300"
            >
              See the full evidence
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        }
      />

      <ChefkartStory />
      <ChefkartJourney />
      <ChefkartProducts />

      <ChefkartRole />

      {chefkartCaseStudies.map((study, index) => (
        <CaseStudy key={study.id} study={study} index={index} />
      ))}

      <ChefkartBreadth />

      <ChefkartPrinciples />

      <ChefkartContribution />

      <ChefkartBring />

      <FaqSection
        items={chefkartFaq}
        eyebrow={chefkartFaqHeader.label}
        title={chefkartFaqHeader.title}
        description={chefkartFaqHeader.intro}
      />
    </>
  )
}
