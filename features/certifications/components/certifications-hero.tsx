import { ArrowDown, ArrowUpRight, Award } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { CertificationsArtwork } from "@/features/certifications/components/certifications-artwork"

export function CertificationsHero() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:flex lg:min-h-[640px] lg:items-center lg:pb-12 lg:pt-32 xl:min-h-[680px]"
    >
      <HeroBackground />
      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="min-w-0">
            <HeroBreadcrumb current="Certifications" />
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200">
              <Award className="h-4 w-4" aria-hidden="true" /> Anuj Dhanuka · Certifications
            </p>
            <h1 id="certifications-heading" className="type-hero mt-5 max-w-2xl text-white">
              Certifications for <span className="hero-gradient-text">web and mobile development.</span>
            </h1>
            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">
              React and React Native training, supported by JavaScript, responsive design, Node.js and
              database foundations. Explore my course certificates and how I apply that learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#certificates"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore certificates
              </LinkButton>
              <LinkButton
                href="/projects"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                See learning in practice
              </LinkButton>
            </div>
          </div>
          <CertificationsArtwork />
        </div>
      </div>
    </section>
  )
}
