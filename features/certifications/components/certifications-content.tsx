import { ArrowUpRight } from "lucide-react"

import { LinkButton } from "@/components/ui/link-button"
import { CertificateCard } from "@/features/certifications/components/certificate-card"
import { certificates } from "@/features/certifications/data/certifications"

export function CertificationsContent() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="scroll-mt-24 bg-white py-16 dark:bg-gray-950 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="type-label text-brand-700 dark:text-brand-300">
              Certifications &amp; continuous learning
            </p>
            <h2 id="certificates-heading" className="type-section mt-3 copy-heading">
              The foundations behind my development work.
            </h2>
            <p className="type-body mt-4 copy-body">
              React and React Native are central to my frontend and mobile work. These courses helped build
              the foundation I continue to develop through projects and product delivery.
            </p>
          </div>
          <p className="type-small max-w-xs copy-body">
            {certificates.length} course certificates. Links open the original issuer pages in a new tab.
          </p>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <li key={certificate.href}>
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 dark:border-brand-900/50 dark:bg-brand-950/20 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="type-label text-brand-700 dark:text-brand-300">From learning to delivery</p>
            <h2 className="type-card mt-3 copy-heading">See how I put these skills to work.</h2>
            <p className="type-small mt-3 copy-body">
              I joined NxtWave’s CCBP program in October 2020, applied the coursework through web projects and
              later completed React Native training in September 2024 after my mobile development internship.
            </p>
          </div>
          <LinkButton
            href="/projects"
            variant="outline"
            className="shrink-0"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            Explore my projects
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
