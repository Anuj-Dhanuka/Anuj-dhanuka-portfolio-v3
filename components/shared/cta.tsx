import Link from "next/link"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

// Shared closing-CTA buttons, exported so pages passing custom `actions` match exactly. Both are 44px
// (brand touch-target size) with a white focus ring that shows on the gradient. The secondary is a frosted
// "glass" button (translucent white fill, white outline) so it reads as secondary to the solid white primary
// instead of a dark block; white text stays >= 5.3:1 on every part of the gradient and stays white on hover.
const ctaButtonBase =
  "h-11 rounded-lg px-5 py-2 text-base transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900"

export const ctaPrimaryButtonClass = `${ctaButtonBase} bg-white text-purple-900 shadow-lg hover:bg-gray-100 hover:shadow-xl`

export const ctaSecondaryButtonClass = `${ctaButtonBase} border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/15 hover:text-white focus-visible:text-white`

type CTAProps = {
  title?: string
  description?: string | readonly string[]
  contactLabel?: string
  contactHref?: string
  resumeLabel?: string
  resumeHref?: string
  // Replaces the default contact and resume buttons.
  actions?: ReactNode
  children?: ReactNode
}

export function CTA({
  title = "Looking for a Dedicated Developer to Join Your Team?",
  description = "I'm available to join immediately and open to frontend roles across India. With experience in React, React Native and Next.js, I'm ready to contribute to your team from day one.",
  contactLabel = "Contact Me",
  contactHref = "/contact",
  resumeLabel = "Download Resume",
  resumeHref = "/ANUJ_DHANUKA_RESUME.pdf",
  actions,
  children,
}: CTAProps = {}) {
  const paragraphs = typeof description === "string" ? [description] : description

  return (
    <section aria-labelledby="shared-cta-heading" className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-purple-950 to-pink-950"
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
          <div className="mx-auto mb-8 max-w-3xl space-y-4 md:mb-10">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-cta-body text-white/90">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {actions ?? (
              <>
                <Button asChild size="lg" className={ctaPrimaryButtonClass}>
                  <Link href={contactHref} data-cta="contact" data-cta-section="closing_cta">
                    <Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {contactLabel}
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className={ctaSecondaryButtonClass}>
                  <a
                    href={resumeHref}
                    data-cta="resume_download"
                    data-cta-section="closing_cta"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" /> {resumeLabel}
                  </a>
                </Button>
              </>
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}
