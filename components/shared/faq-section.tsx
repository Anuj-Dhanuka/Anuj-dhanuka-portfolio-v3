"use client"

import { motion, useReducedMotion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useRef, type ReactNode } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type FaqItem = { question: string; answer: string }

type FaqSectionProps = {
  items: readonly FaqItem[]
  title: string
  description: string
  eyebrow?: string
  id?: string
  // Emit FAQPage structured data; only one page should publish a given set of answers.
  jsonLd?: boolean
  // Optional buttons under the accordion.
  actions?: ReactNode
  // Optional content below everything else, such as a footnote.
  children?: ReactNode
}

// Matches the accordion's collapse transition (duration-300).
const COLLAPSE_MS = 300

// Shared FAQ layout: centred header, a single bordered accordion card, optional actions.
// Answers are force-mounted so they stay in the server HTML for search engines and find-in-page.
export function FaqSection({
  items,
  title,
  description,
  eyebrow = "Recruitment Information",
  id = "faq",
  jsonLd = false,
  actions,
  children,
}: FaqSectionProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Opening an answer collapses the one above it, which can carry the tapped question under the
  // fixed header on phones. Once the panels settle, bring that question back into view.
  const keepOpenedQuestionVisible = (value: string) => {
    if (!value) return
    window.setTimeout(
      () => {
        const item = listRef.current?.querySelector<HTMLElement>(`[data-faq-value="${value}"]`)
        if (!item) return
        const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0
        if (item.getBoundingClientRect().top < headerBottom) {
          item.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" })
        }
      },
      reduceMotion ? 0 : COLLAPSE_MS,
    )
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer.replace(/\n\n/g, " ") },
    })),
  }

  return (
    <section
      id={id}
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_86%_70%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_16%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_86%_70%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <HelpCircle className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h2 id={`${id}-heading`} className="type-section copy-heading">
            {title}
          </h2>
          <p className="type-body mt-4 copy-body">{description}</p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-purple-100 bg-white/90 shadow-[0_20px_60px_rgba(124,58,237,0.10)] backdrop-blur dark:border-purple-800/40 dark:bg-gray-950/60 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <Accordion
              ref={listRef}
              type="single"
              collapsible
              className="w-full"
              onValueChange={keepOpenedQuestionVisible}
            >
              {items.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  data-faq-value={`item-${index}`}
                  className="scroll-mt-24 border-purple-100/70 last:border-b-0 dark:border-purple-800/30"
                >
                  <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-gray-900 hover:no-underline hover:text-brand-700 dark:text-white dark:hover:text-brand-300 sm:px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent forceMount className="px-5 pb-5 sm:px-6">
                    <div className="space-y-3 text-[15px] leading-7 copy-body">
                      {faq.answer.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {actions && (
          <motion.div
            className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            {actions}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  )
}
