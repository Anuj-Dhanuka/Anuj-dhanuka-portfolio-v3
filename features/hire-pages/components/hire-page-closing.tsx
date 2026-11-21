import Link from "next/link"
import { Briefcase, Code2 } from "lucide-react"

import { CTA, ctaPrimaryButtonClass, ctaSecondaryButtonClass } from "@/components/shared/cta"
import { FaqSection, type FaqItem } from "@/components/shared/faq-section"
import { Button } from "@/components/ui/button"
import { hireEnquiryActions } from "@/features/hire-pages/enquiry-actions"
import type { HireEnquiryType } from "@/features/hire-pages/types"

// FAQ (visible from the start, no grid background, no FAQPage markup) followed by the shared closing CTA
// with both enquiry paths as 44px buttons.
export function HirePageClosing({
  faqs,
  faqIntro,
  faqTitle = "Questions about working together",
  faqId,
  closing,
  fullTimeHref,
  freelanceHref,
  fullTimeLabel,
  freelanceLabel,
  primary = "full-time",
}: {
  faqs: readonly FaqItem[]
  faqIntro: string
  faqTitle?: string
  // In-page anchor for the FAQ section (FaqSection's default is "faq").
  faqId?: string
  closing: { title: string; description: string }
  fullTimeHref: string
  freelanceHref: string
  fullTimeLabel: string
  freelanceLabel: string
  // Same option as HireHero: which enquiry leads. Each button keeps its own destination and analytics id.
  primary?: HireEnquiryType
}) {
  const [first, second] = hireEnquiryActions({
    fullTimeHref,
    freelanceHref,
    fullTimeLabel,
    freelanceLabel,
    primary,
  })
  const icons = { "full-time": Briefcase, freelance: Code2 } as const
  const FirstIcon = icons[first.type]
  const SecondIcon = icons[second.type]
  return (
    <>
      <FaqSection
        id={faqId}
        items={faqs}
        title={faqTitle}
        description={faqIntro}
        eyebrow="Questions"
        reveal={false}
        grid={false}
      />
      <CTA
        title={closing.title}
        description={closing.description}
        actions={
          <>
            <Button asChild size="lg" className={ctaPrimaryButtonClass}>
              <Link href={first.href} data-cta={first.cta} data-cta-section="closing_cta">
                <FirstIcon className="mr-2 h-5 w-5" aria-hidden="true" /> {first.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className={ctaSecondaryButtonClass}>
              <Link href={second.href} data-cta={second.cta} data-cta-section="closing_cta">
                <SecondIcon className="mr-2 h-5 w-5" aria-hidden="true" /> {second.label}
              </Link>
            </Button>
          </>
        }
      />
    </>
  )
}
