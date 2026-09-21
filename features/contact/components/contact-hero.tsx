import Link from "next/link"
import { ArrowDown, Check, Mail, MapPin, MessageSquareText } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { LinkButton } from "@/components/ui/link-button"
import { site } from "@/config/site"
import { contactFocusAreas } from "@/features/contact/data/contact"

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:min-h-[680px] lg:pb-20 lg:pt-28 xl:min-h-[720px]"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-brand-200/80">
          <ol className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-white">
              Contact
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-950/70 px-3 py-1 font-medium text-brand-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
              Contact Anuj Dhanuka
            </p>

            <h1 id="contact-hero-heading" className="type-hero mt-5 max-w-3xl text-white">
              Let&apos;s discuss the role, product or{" "}
              <span className="hero-gradient-text">challenge ahead.</span>
            </h1>

            <p className="type-lead mt-6 max-w-2xl copy-inverse-body">
              Reach out about frontend and software engineering opportunities, React or Next.js products,
              React Native applications and selected web or mobile collaborations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#contact"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Send a message
              </LinkButton>
              <LinkButton
                href={"mailto:" + site.email}
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<Mail className="h-4 w-4" />}
              >
                Email me directly
              </LinkButton>
            </div>

            <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-brand-100">
              <MapPin className="h-4 w-4 flex-none text-accent1-300" aria-hidden="true" />
              Based in {site.location}
            </div>
          </div>

          <aside aria-labelledby="contact-focus-heading" className="relative mx-auto w-full max-w-[440px]">
            <div
              className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-brand-500/30 to-accent1-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/35 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="type-caption uppercase tracking-[0.14em] text-brand-200">Open to</p>
                  <h2 id="contact-focus-heading" className="mt-1 text-lg font-bold text-white">
                    Professional conversations
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                  <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {contactFocusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-200"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>

              <p className="type-caption mt-5 text-gray-300">
                A short message with the goal and relevant context is enough to begin.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
