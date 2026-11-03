import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  CreditCard,
  Download,
  Globe,
  LayoutDashboard,
  RefreshCw,
  Route,
  Search,
  Smartphone,
  Users,
} from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { CenteredSectionHeader, SectionBackdrop } from "@/components/shared/centered-section-header"
import { chefkartPhotos, chefkartProducts, chefkartStory } from "@/features/experience/data/chefkart"
import {
  AccentBar,
  homeCard,
  homeCardLift,
  homeFeatureCard,
  homeIconTile,
} from "@/features/experience/components/chefkart/chefkart-styles"
import { cn } from "@/lib/utils"

const customerIcons = { search: Search, new: Download, returning: RefreshCw }
const entryIcons = [Globe, Smartphone]
// Same icon per product as the hero diagram, so the visual language carries through the page.
const productIcons = [Smartphone, Globe, CreditCard, LayoutDashboard]

// Phones: a stack of bordered rows (step cards). From sm up: arrow-linked chips that wrap.
// On the tinted feature card the chips turn white so they still stand out.
function StepChain({ steps, onTint = false }: { steps: readonly string[]; onTint?: boolean }) {
  return (
    <>
      <ol
        className={cn(
          "divide-y divide-purple-100 overflow-hidden rounded-lg border border-purple-100 dark:divide-purple-800/30 dark:border-purple-800/30 sm:hidden",
          onTint ? "bg-white/80 dark:bg-gray-950/45" : "bg-purple-50/55 dark:bg-purple-950/20",
        )}
      >
        {steps.map((step) => (
          <li key={step} className="type-small px-3 py-2.5 font-semibold copy-heading">
            {step}
          </li>
        ))}
      </ol>
      <ol className="hidden flex-wrap items-center gap-x-1.5 gap-y-2 sm:flex">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5">
            {index > 0 && <ArrowRight className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />}
            <span
              className={cn(
                "type-small rounded-lg border px-2.5 py-1.5 font-semibold copy-heading",
                onTint
                  ? "border-purple-100 bg-white/80 dark:border-purple-800/40 dark:bg-gray-950/45"
                  : "border-brand-100 bg-brand-50/70 dark:border-brand-900/50 dark:bg-brand-950/30",
              )}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </>
  )
}

// Step count beside a lane name; only shown with the phone step cards.
function StepCount({ count }: { count: number }) {
  return (
    <span className="type-caption ml-auto flex-none whitespace-nowrap copy-body sm:hidden">
      {count} steps
    </span>
  )
}

// Two entry lanes converge on one shared service journey; operations run underneath every booking.
function JourneyDiagram() {
  const [booking, ...afterBooking] = chefkartStory.shared.steps

  return (
    <figure
      aria-label="Customers start on the website or in the app, then every booking follows the same steps, with an operations team behind each one"
      className="mt-10"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.5fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6">
        <div className="min-w-0 space-y-4">
          {chefkartStory.entryPaths.map((path, index) => {
            const Icon = entryIcons[index]
            return (
              <div key={path.name} className={cn("p-4 sm:p-5", homeCard)}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 dark:border-brand-800/50 dark:bg-brand-900/25 dark:text-brand-300">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <p className="type-small font-semibold copy-heading">{path.name}</p>
                  <StepCount count={path.steps.length} />
                </div>
                <div className="mt-3">
                  <StepChain steps={path.steps} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center" aria-hidden="true">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-sm dark:border-brand-800 dark:bg-gray-950 dark:text-brand-300">
            <ArrowDown className="h-5 w-5 lg:hidden" />
            <ArrowRight className="hidden h-5 w-5 lg:block" />
          </span>
        </div>

        <div className="min-w-0 rounded-lg border border-brand-200 bg-white/90 p-4 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_45px_rgba(124,58,237,0.07)] backdrop-blur-sm dark:border-brand-800/60 dark:bg-gray-950/55 dark:shadow-none sm:p-5">
          <div className="flex items-center gap-3">
            <p className="type-small font-semibold copy-heading">{chefkartStory.shared.name}</p>
            <StepCount count={chefkartStory.shared.steps.length} />
          </div>
          {/* Phones get the same step cards as the lanes; larger screens keep the vertical timeline. */}
          <div className="mt-3 sm:hidden">
            <StepChain steps={chefkartStory.shared.steps} />
          </div>
          <ol className="relative mt-4 hidden space-y-2.5 sm:block">
            <span
              className="absolute bottom-3 left-[11px] top-3 w-px bg-brand-300 dark:bg-brand-700"
              aria-hidden="true"
            />
            <li className="relative flex items-center gap-3">
              <span className="relative z-10 h-6 w-6 flex-none rounded-full bg-brand-600 ring-4 ring-white dark:bg-brand-400 dark:ring-gray-900" />
              <span className="type-small font-semibold text-brand-700 dark:text-brand-300">{booking}</span>
            </li>
            {afterBooking.map((step) => (
              <li key={step} className="relative flex items-center gap-3">
                <span className="relative z-10 h-6 w-6 flex-none rounded-full border-2 border-brand-300 bg-white dark:border-brand-700 dark:bg-gray-900" />
                <span className="type-small font-semibold copy-heading">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:justify-end lg:pr-[18%]" aria-hidden="true">
        <span className="h-8 w-px border-l-2 border-dashed border-brand-300 dark:border-brand-700" />
      </div>

      {/* Operations run underneath every booking: the homepage featured card, not a dark block. */}
      <div className={cn("p-4 sm:p-5", homeFeatureCard)}>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent1-600 text-white shadow-lg shadow-purple-500/20">
            <LayoutDashboard className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <p className="type-small font-semibold copy-heading">
            {chefkartStory.operations.name}
            <span className="ml-2 type-caption font-normal copy-body">Operations dashboard</span>
          </p>
          <StepCount count={chefkartStory.operations.steps.length} />
        </div>
        <p className="type-small mt-3 max-w-3xl copy-body">{chefkartStory.operations.body}</p>
        <div className="mt-4">
          <StepChain steps={chefkartStory.operations.steps} onTint />
        </div>
      </div>
    </figure>
  )
}

export function ChefkartStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-y border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
    >
      {/* Same header and backdrop as the homepage technology stack section. */}
      <SectionBackdrop watermark="JOURNEY" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="story-heading"
          icon={Users}
          label={chefkartStory.label}
          title={chefkartStory.title}
          intro={chefkartStory.intro}
        />

        {/* The service every path leads to, beside the three ways customers arrive. */}
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border border-purple-100 shadow-[0_18px_45px_rgba(124,58,237,0.1)] dark:border-purple-800/30 sm:aspect-[16/9] lg:aspect-auto">
              <Image
                src={chefkartPhotos.chef.src}
                alt={chefkartPhotos.chef.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover object-[60%_20%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-white">
                <span className="type-small block font-semibold">{chefkartPhotos.chef.caption}</span>
              </figcaption>
            </figure>
            <ul className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {chefkartStory.customers.map((customer) => {
                const Icon = customerIcons[customer.kind as keyof typeof customerIcons]
                return (
                  <li
                    key={customer.title}
                    // Icon beside the text on phones to save height; stacked once the cards sit in a row.
                    className={cn(
                      "relative flex gap-4 overflow-hidden p-5 sm:p-6 md:block lg:flex",
                      homeCardLift,
                    )}
                  >
                    <AccentBar />
                    <span className={homeIconTile}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="type-card copy-heading md:mt-4 lg:mt-0">{customer.title}</h3>
                      <p className="type-small mt-2 copy-body">{customer.body}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ChefkartJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 py-16 dark:border-purple-800/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="journey-heading"
          icon={Route}
          label={chefkartStory.journey.label}
          title={chefkartStory.journey.title}
          intro={chefkartStory.journey.intro}
        />

        <Reveal delay={0.05}>
          <JourneyDiagram />
        </Reveal>
      </div>
    </section>
  )
}

export function ChefkartProducts() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-purple-100/70 bg-white py-16 dark:border-purple-800/30 dark:bg-gray-900 md:py-24"
    >
      {/* Same soft glow as the homepage What I Bring section. */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredSectionHeader
          id="products-heading"
          icon={Boxes}
          label={chefkartStory.productsHeader.label}
          title={chefkartStory.productsHeader.title}
          intro={chefkartStory.productsHeader.intro}
        />
        <Reveal delay={0.05}>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chefkartProducts.map((product, index) => {
              const Icon = productIcons[index]
              return (
                <li
                  key={product.name}
                  className={cn("relative flex gap-4 overflow-hidden p-5 sm:p-6 lg:block", homeCardLift)}
                >
                  <AccentBar />
                  <span className={homeIconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="type-card copy-heading lg:mt-4">{product.name}</h3>
                    <p className="type-small mt-2 copy-body">{product.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
