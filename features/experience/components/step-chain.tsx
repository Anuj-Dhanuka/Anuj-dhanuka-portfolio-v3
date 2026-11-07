import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

// Phones: a stack of bordered rows (step cards). From sm up: arrow-linked chips that wrap.
// On the tinted feature card the chips turn white so they still stand out; inverse suits dark sections.
export function StepChain({
  steps,
  onTint = false,
  inverse = false,
}: {
  steps: readonly string[]
  onTint?: boolean
  inverse?: boolean
}) {
  return (
    <>
      <ol
        className={cn(
          "divide-y overflow-hidden rounded-lg border sm:hidden",
          inverse
            ? "divide-white/10 border-white/15 bg-white/5"
            : "divide-purple-100 border-purple-100 dark:divide-purple-800/30 dark:border-purple-800/30",
          !inverse && (onTint ? "bg-white/80 dark:bg-gray-950/45" : "bg-purple-50/55 dark:bg-purple-950/20"),
        )}
      >
        {steps.map((step) => (
          <li
            key={step}
            className={cn("type-small px-3 py-2.5 font-semibold", inverse ? "text-white" : "copy-heading")}
          >
            {step}
          </li>
        ))}
      </ol>
      <ol className="hidden flex-wrap items-center gap-x-1.5 gap-y-2 sm:flex">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-1.5">
            {index > 0 && (
              <ArrowRight
                className={cn("h-3.5 w-3.5", inverse ? "text-brand-300" : "text-brand-500")}
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                "type-small rounded-lg border px-2.5 py-1.5 font-semibold",
                inverse
                  ? "border-white/15 bg-white/5 text-white"
                  : onTint
                    ? "border-purple-100 bg-white/80 copy-heading dark:border-purple-800/40 dark:bg-gray-950/45"
                    : "border-brand-100 bg-brand-50/70 copy-heading dark:border-brand-900/50 dark:bg-brand-950/30",
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
