import Link from "next/link"
import { Briefcase, Code2 } from "lucide-react"

import { CTA, ctaPrimaryButtonClass, ctaSecondaryButtonClass } from "@/components/shared/cta"
import { FaqSection, type FaqItem } from "@/components/shared/faq-section"
import { Button } from "@/components/ui/button"
import { hireEnquiryActions } from "@/features/hire-pages/enquiry-actions"
import type { HireEnquiryType, InlineLinkText } from "@/features/hire-pages/types"

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
  // Optional sentence under the buttons with one inline link, e.g. to a related service page.
  closing: { title: string; description: string; note?: InlineLinkText }
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
      >
        {closing.note && <ClosingNote note={closing.note} />}
      </CTA>
    </>
  )
}

// White text and a white underline that read on the CTA gradient; the link phrase is ordinary crawlable text.
function ClosingNote({ note }: { note: InlineLinkText }) {
  const [before, after] = note.text.split(note.link.text)
  return (
    <p className="type-body mx-auto mt-8 max-w-3xl text-white/90">
      {before}
      <Link
        href={note.link.href}
        className="font-semibold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {note.link.text}
      </Link>
      {after}
    </p>
  )
}
