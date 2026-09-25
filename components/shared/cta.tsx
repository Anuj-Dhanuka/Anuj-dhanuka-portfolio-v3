import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

type CTAProps = {
  title?: string
  description?: string
  contactLabel?: string
  contactHref?: string
  resumeLabel?: string
  resumeHref?: string
}

export function CTA({
  title = "Looking for a Dedicated Developer to Join Your Team?",
  description = "I'm currently open to new opportunities where I can contribute my technical skills and problem-solving abilities. With experience in React, Next.js, and modern web technologies, I'm ready to make an impact on your team.",
  contactLabel = "Contact Me",
  contactHref = "/contact",
  resumeLabel = "Download Resume",
  resumeHref = "/ANUJ_DHANUKA_RESUME.pdf",
}: CTAProps = {}) {
  return (
    <section aria-labelledby="shared-cta-heading" className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="animate-float absolute left-10 top-20 h-64 w-64 rounded-full bg-purple-500 motion-reduce:animate-none" />
        <div className="animate-float absolute bottom-20 right-10 h-96 w-96 rounded-full bg-pink-500 motion-reduce:animate-none" />
        <div className="animate-float absolute left-1/2 top-1/2 h-80 w-80 rounded-full bg-purple-600 motion-reduce:animate-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="shared-cta-heading" className="type-cta mb-4 text-white md:mb-6">
            {title}
          </h2>
          <p className="type-cta-body mx-auto mb-8 max-w-3xl text-white/90 md:mb-10">{description}</p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-10 rounded-lg bg-white px-5 py-2 text-base text-purple-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              <Link href={contactHref}>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {contactLabel}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-10 rounded-lg border-white bg-purple-950/90 px-5 py-2 text-base text-white hover:bg-purple-900 hover:text-white"
            >
              <a href={resumeHref} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" aria-hidden="true" /> {resumeLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
