import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Reveal } from "@/components/shared/reveal"

// The homepage "PRODUCT EXPERIENCE" header pattern: an icon pill eyebrow, the section heading,
// a short brand→accent rule and a centred intro, fading up into view.
export function CenteredSectionHeader({
  id,
  label,
  title,
  intro,
  icon: Icon,
}: {
  id: string
  label: string
  title: ReactNode
  intro?: ReactNode
  icon: LucideIcon
}) {
  return (
    <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="type-section copy-heading">
        {title}
      </h2>
      <div
        className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500"
        aria-hidden="true"
      />
      {intro && <p className="type-body mt-6 copy-body">{intro}</p>}
    </Reveal>
  )
}

// The matching backdrop: soft brand glows, a fine grid and a faint watermark word.
export function SectionBackdrop({ watermark }: { watermark?: string }) {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.085),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(219,39,119,0.075),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_50%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_82%_60%,rgba(236,72,153,0.13),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_50%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.36] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      {watermark && (
        <div
          className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 select-none text-[22vw] font-black leading-none tracking-normal text-purple-900/[0.035] dark:text-white/[0.025]"
          aria-hidden="true"
        >
          {watermark}
        </div>
      )}
    </>
  )
}
