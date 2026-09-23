import { Code2, Link2, Mail, MapPin, Phone } from "lucide-react"

import { site } from "@/config/site"

const contactDetails = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "Phone", value: site.phoneDisplay, href: site.phoneHref, Icon: Phone },
  { label: "Location", value: site.location, Icon: MapPin },
]

const socialLinks = [
  { label: "LinkedIn", href: site.linkedIn, Icon: Link2 },
  { label: "GitHub", href: site.github, Icon: Code2 },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
]

export function ContactDetails() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-purple-100 bg-white/90 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur dark:border-purple-800/35 dark:bg-gray-950/55 sm:p-6">
      <span
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-500/10 to-accent1-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="type-label font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
          Contact details
        </p>
        <h3 className="type-card-large mt-3 copy-heading">Open to meaningful product work.</h3>
        <p className="type-small mt-3 copy-body">
          Share a role, project, collaboration or product requirement. I&apos;ll reply with the next practical
          step.
        </p>
      </div>

      <div className="relative mt-5 grid gap-3">
        {contactDetails.map(({ label, value, href, Icon }) => {
          const content = (
            <>
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-accent1-50 text-brand-600 dark:from-brand-900/30 dark:to-accent1-900/20 dark:text-brand-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold copy-heading">{label}</span>
                <span className="mt-1 block text-sm font-medium text-gray-600 transition-colors group-hover:text-brand-700 dark:text-gray-300 dark:group-hover:text-brand-300">
                  {value}
                </span>
              </span>
            </>
          )

          return href ? (
            <a
              key={label}
              href={href}
              className="group flex items-start gap-3 rounded-lg border border-purple-100 bg-purple-50/50 p-3.5 transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-[0_14px_35px_rgba(124,58,237,0.08)] dark:border-purple-800/35 dark:bg-purple-900/15 dark:hover:bg-gray-950/60"
            >
              {content}
            </a>
          ) : (
            <div
              key={label}
              className="group flex items-start gap-3 rounded-lg border border-purple-100 bg-purple-50/50 p-3.5 dark:border-purple-800/35 dark:bg-purple-900/15"
            >
              {content}
            </div>
          )
        })}
      </div>

      <div className="relative mt-5 border-t border-purple-100 pt-5 dark:border-purple-800/35">
        <p className="type-label font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
          Social links
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-purple-100 bg-white px-4 text-sm font-bold text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 dark:border-purple-800/40 dark:bg-gray-950/55 dark:text-brand-300 dark:hover:bg-brand-900/20"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
