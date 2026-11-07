"use client"

import { ArrowRight, Code, FileText, LayoutTemplate, ShoppingBag } from "lucide-react"
import { useRef, useState, type KeyboardEvent } from "react"

import { LinkButton } from "@/components/ui/link-button"
import { homeCard } from "@/features/experience/components/experience-card-styles"
import { ppcroyPlatforms } from "@/features/experience/data/ppcroy"
import { cn } from "@/lib/utils"

const icons = { react: Code, shopify: ShoppingBag, webflow: LayoutTemplate, wordpress: FileText }

// WAI-ARIA tabs: every panel is rendered (hidden when inactive) so all the copy stays in the HTML.
export function PlatformTabs() {
  const { items } = ppcroyPlatforms
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const select = (index: number) => {
    const next = (index + items.length) % items.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: items.length - 1,
    }
    if (event.key in moves) {
      event.preventDefault()
      select(moves[event.key])
    }
  }

  return (
    // One box around the whole tab view; tab cards on the left, the selected platform on the right.
    <div
      className={cn(
        "grid gap-8 p-4 sm:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16 lg:p-8",
        homeCard,
      )}
    >
      <div
        role="tablist"
        aria-label="Platforms"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4"
      >
        {items.map((item, index) => {
          const Icon = icons[item.icon]
          const selected = index === active
          return (
            <button
              key={item.name}
              ref={(node) => {
                tabs.current[index] = node
              }}
              id={`platform-tab-${item.icon}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`platform-panel-${item.icon}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                // Brand guidelines: 1px surface border, 2px only for the selected state, neutral card shadow,
                // and a visible 2px focus ring with offset.
                "flex items-center gap-3 rounded-lg border border-l-2 px-4 py-4 text-left shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 sm:px-6",
                selected
                  ? "border-brand-100 border-l-brand-600 bg-brand-50 text-brand-700 dark:border-brand-800/40 dark:border-l-brand-400 dark:bg-brand-950/40 dark:text-brand-200"
                  : "border-brand-100 bg-white copy-heading hover:border-brand-200 hover:bg-brand-50/50 dark:border-brand-800/40 dark:bg-gray-950/40 dark:hover:border-brand-700/60",
              )}
            >
              {/* Inline icons are 20px and inherit the tab's text colour. */}
              <Icon className="h-5 w-5 flex-none" aria-hidden="true" />
              <span className="type-body font-semibold">{item.name}</span>
            </button>
          )
        })}
      </div>

      {items.map((item, index) => {
        const Icon = icons[item.icon]
        return (
          <div
            key={item.name}
            id={`platform-panel-${item.icon}`}
            role="tabpanel"
            aria-labelledby={`platform-tab-${item.icon}`}
            hidden={index !== active}
            className="lg:py-2"
          >
            <div className="flex items-center gap-4 border-b border-brand-100 pb-6 dark:border-brand-800/40">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="type-card-large copy-heading">{item.name}</h3>
                <p className="type-small font-semibold text-brand-700 dark:text-brand-300">{item.summary}</p>
              </div>
            </div>
            <p className="type-body mt-6 copy-body">{item.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${item.name} skills`}>
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="type-caption rounded-full border border-brand-100 bg-white px-2.5 py-1 font-medium copy-body dark:border-brand-800/40 dark:bg-gray-950/40"
                >
                  {skill}
                </li>
              ))}
            </ul>
            {"caseStudy" in item && item.caseStudy && (
              <LinkButton
                href={item.caseStudy.href}
                variant="line"
                className="mt-6"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {item.caseStudy.label}
              </LinkButton>
            )}
          </div>
        )
      })}
    </div>
  )
}
