import { ArrowUpRight, Award } from "lucide-react"

import { LinkButton } from "@/components/ui/link-button"
import type { certificates } from "@/features/certifications/data/certifications"

type CertificateCardProps = {
  certificate: (typeof certificates)[number]
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { title, issuer, href, description } = certificate
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/55 p-6 shadow-sm transition-[translate,border-color,box-shadow] duration-200 motion-safe:hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 motion-safe:focus-within:-translate-y-1 focus-within:border-brand-300 focus-within:shadow-xl focus-within:shadow-brand-500/10 motion-reduce:transition-none dark:border-brand-900/50 dark:from-gray-900 dark:to-brand-950/20 dark:hover:border-brand-600 dark:focus-within:border-brand-600">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
        <Award className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="type-label mt-5 text-brand-700 dark:text-brand-300">{issuer}</p>
      <h3 className="type-card mt-3 copy-heading">{title}</h3>
      <p className="type-small mt-3 copy-body">{description}</p>
      <div className="mt-auto pt-6">
        <LinkButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="min-h-11"
          aria-label={`View ${title} certificate from ${issuer} (opens in a new tab)`}
          icon={<ArrowUpRight className="h-4 w-4" />}
        >
          View certificate
        </LinkButton>
      </div>
    </article>
  )
}
