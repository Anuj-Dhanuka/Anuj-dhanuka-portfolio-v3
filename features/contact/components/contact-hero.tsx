import Image from "next/image"
import { ArrowDown, Mail, MapPin } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { site } from "@/config/site"

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden pb-14 pt-20 text-white md:pb-16 md:pt-24 lg:flex lg:min-h-[680px] lg:items-center lg:pb-12 lg:pt-32 xl:min-h-[720px]"
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div className="min-w-0">
            <HeroBreadcrumb current="Contact" />

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

          <div className="mx-auto hidden w-full max-w-[420px] lg:block xl:max-w-[440px]">
            <Image
              src="/contact-conversation-v1.webp"
              alt="Two people starting a conversation"
              width={560}
              height={463}
              sizes="(min-width: 1280px) 440px, 420px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
