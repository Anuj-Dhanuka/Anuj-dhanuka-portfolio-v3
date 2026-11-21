import Link from "next/link"
import { Briefcase, Code2 } from "lucide-react"

import { CTA, ctaPrimaryButtonClass, ctaSecondaryButtonClass } from "@/components/shared/cta"
import { FaqSection, type FaqItem } from "@/components/shared/faq-section"
import { Button } from "@/components/ui/button"

// FAQ (visible from the start, no grid background, no FAQPage markup) followed by the shared closing CTA
// with both enquiry paths as 44px buttons.
export function HirePageClosing({
  faqs,
  faqIntro,
  faqTitle = "Questions about working together",
  closing,
  fullTimeHref,
  freelanceHref,
  fullTimeLabel,
  freelanceLabel,
}: {
  faqs: readonly FaqItem[]
  faqIntro: string
  faqTitle?: string
  closing: { title: string; description: string }
  fullTimeHref: string
  freelanceHref: string
  fullTimeLabel: string
  freelanceLabel: string
}) {
  return (
    <>
      <FaqSection
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
              <Link href={fullTimeHref} data-cta="discuss_full_time_role" data-cta-section="closing_cta">
                <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {fullTimeLabel}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className={ctaSecondaryButtonClass}>
              <Link href={freelanceHref} data-cta="discuss_freelance_project" data-cta-section="closing_cta">
                <Code2 className="mr-2 h-5 w-5" aria-hidden="true" /> {freelanceLabel}
              </Link>
            </Button>
          </>
        }
      />
    </>
  )
}
