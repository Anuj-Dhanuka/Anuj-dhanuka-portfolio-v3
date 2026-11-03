"use client"

import { FaqSection } from "@/components/shared/faq-section"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { LuLinkedin } from "react-icons/lu"
import Link from "next/link"
import { site } from "@/config/site"

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
      "My experience spans mobile application development, client project delivery and live product development.\n\nAt ChefKart, I contribute across the customer mobile application, internal dashboard and website. Previously, I delivered 20+ client projects at PPCROY TECH SOLUTIONS and worked with React Native during my internship at 3rd Eye Lab.",
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
      "You can use the contact page, email or LinkedIn to share the role, company details and a brief overview of the opportunity. A short message with the goal and relevant context is enough to begin.",
  },
]

export function FAQ() {
  return (
    <FaqSection
      items={faqs}
      title="Frequently Asked Questions"
      description="Key information for recruiters, hiring managers and technology leaders evaluating my experience and suitability for frontend, mobile and full-stack development roles."
      jsonLd
      actions={
        <>
          <Button
            asChild
            className="h-11 rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-5 text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
          >
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Discuss an Opportunity
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-lg border-brand-200 bg-white px-5 text-brand-700 hover:bg-brand-50 hover:text-brand-800 dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300 dark:hover:bg-brand-900/30"
          >
            <Link href={site.linkedIn} target="_blank" rel="noopener noreferrer">
              <LuLinkedin className="h-4 w-4" />
              Connect on LinkedIn
            </Link>
          </Button>
        </>
      }
    />
  )
}
