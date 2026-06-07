"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, Mail } from "lucide-react"
import { LuLinkedin } from "react-icons/lu"
import Link from "next/link"

const faqs = [
  {
    question: "What roles are you currently open to?",
    answer:
      "I'm open to Software Engineer, Frontend Developer, React Developer, React Native Developer and Full-Stack Developer opportunities.\n\nMy strongest experience is in frontend and mobile development, and I'm also open to full-stack roles where I can contribute across the product while continuing to strengthen my backend expertise.",
  },
  {
    question: "What are your strongest technical skills?",
    answer:
      "My core strengths are React Native, React.js, JavaScript, responsive frontend development and converting Figma designs into polished, production-ready interfaces.\n\nI also have experience with API integration, Firebase, WordPress, Shopify and Webflow.",
  },
  {
    question: "What professional and production experience do you have?",
    answer:
      "My experience spans mobile application development, client project delivery and live product development.\n\nAt ChefKart, I contribute across the customer mobile application, internal dashboard and website. Previously, I delivered 20+ client projects at PPCROY TECH SOLUTIONS and developed the Levels App during my internship at 3rd Eye Lab.",
  },
  {
    question: "How do you approach development requirements?",
    answer:
      "I begin by understanding the user journey, business goal and expected behaviour.\n\nI then plan the component structure, identify important states and edge cases, coordinate around API requirements and test the experience across relevant devices before considering the feature complete.",
  },
  {
    question: "How do you collaborate with product and engineering teams?",
    answer:
      "I work with product managers, designers and backend developers to clarify requirements, understand user flows, coordinate API behaviour and refine features based on testing and feedback.\n\nI value clear communication, practical problem-solving and shared responsibility for product quality.",
  },
  {
    question: "How can we discuss an opportunity?",
    answer:
      "You can contact me through email or LinkedIn with the role, company details and a brief overview of the opportunity.\n\nI respond to professional enquiries within an hour.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/\n\n/g, " "),
    },
  })),
}

export function FAQ() {
  return (
    <section id="faq" className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            Recruitment Information
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            Key information for recruiters, hiring managers and technology leaders evaluating my experience and
            suitability for frontend, mobile and full-stack development roles.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-purple-100 bg-white/90 shadow-[0_20px_60px_rgba(124,58,237,0.10)] backdrop-blur dark:border-purple-800/40 dark:bg-gray-950/60 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-purple-100/70 last:border-b-0 dark:border-purple-800/30"
                >
                  <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-gray-900 hover:no-underline hover:text-brand-700 dark:text-white dark:hover:text-brand-300 sm:px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 sm:px-6">
                    <div className="space-y-3 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
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

        <motion.div
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <Button
            asChild
            className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
          >
            <Link href="#contact">
              <Mail className="h-4 w-4" />
              Discuss an Opportunity
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-lg border-brand-200 bg-white px-5 text-brand-700 hover:bg-brand-50 hover:text-brand-800 dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300 dark:hover:bg-brand-900/30"
          >
            <Link href="https://www.linkedin.com/in/anuj-dhanuka/" target="_blank" rel="noopener noreferrer">
              <LuLinkedin className="h-4 w-4" />
              Connect on LinkedIn
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
