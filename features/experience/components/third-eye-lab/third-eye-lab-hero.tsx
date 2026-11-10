import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"

import { HeroBackground } from "@/components/shared/hero-background"
import { HeroBreadcrumb } from "@/components/shared/hero-breadcrumb"
import { LinkButton } from "@/components/ui/link-button"
import { thirdEyeLabHero } from "@/features/experience/data/third-eye-lab"

// No frame: the image's near-black backdrop blends into the hero background (lighten), as the PPCROY hero fades.
function InternshipVisual() {
  const { image } = thirdEyeLabHero

  return (
    <figure className="relative">
      <div
        className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-br from-brand-500/25 to-accent1-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/3] mix-blend-lighten [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent),linear-gradient(to_bottom,transparent,black_7%,black_90%,transparent)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <Image
        src="/logos/3rd-eye-lab-logo.png"
        alt="3rd Eye Lab"
        width={2560}
        height={861}
        sizes="120px"
        className="relative mx-auto mt-2 h-7 w-auto brightness-0 invert"
      />
      <figcaption className="type-caption relative mt-3 text-center text-gray-400">
        Illustrations of the assignment&apos;s flow, not product screenshots.
      </figcaption>
    </figure>
  )
}

export function ThirdEyeLabHero() {
  return (
    <header className="relative isolate overflow-hidden pb-12 pt-24 text-white md:pb-16 md:pt-32">
      <HeroBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBreadcrumb current="3rd Eye Lab" parents={[{ label: "Experience", href: "/experience" }]} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="type-small inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-950/60 px-3 py-1 font-medium text-brand-200">
              <span className="h-2 w-2 rounded-full bg-accent1-400" aria-hidden="true" />
              {thirdEyeLabHero.eyebrow}
            </p>
            <h1 className="type-hero mt-5 max-w-3xl text-white">
              {thirdEyeLabHero.title}{" "}
              <span className="hero-gradient-text">{thirdEyeLabHero.titleAccent}</span>
            </h1>
            {thirdEyeLabHero.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`type-lead max-w-2xl copy-inverse-body ${index === 0 ? "mt-6" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href="#beginning"
                data-cta="explore_work"
                data-cta-section="hero"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore the story
              </LinkButton>
              <LinkButton
                href="/contact"
                data-cta="talk_to_me"
                data-cta-section="hero"
                variant="outlineInverse"
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Talk to me
              </LinkButton>
            </div>
          </div>

          <InternshipVisual />
        </div>
      </div>
    </header>
  )
}
