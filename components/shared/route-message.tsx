"use client"

import Link from "next/link"

type RouteMessageProps = {
  eyebrow: string
  title: string
  description: string
  actionLabel: string
  actionHref?: string
  onAction?: () => void
}

export function RouteMessage({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: RouteMessageProps) {
  const actionClass =
    "inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"

  return (
    <main
      id="main-content"
      className="grid min-h-[72vh] place-items-center bg-white px-4 pb-20 pt-32 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="type-eyebrow text-brand-700 dark:text-brand-300">{eyebrow}</p>
        <h1 className="type-page mt-4 copy-heading">{title}</h1>
        <p className="type-lead mx-auto mt-5 max-w-xl copy-body">{description}</p>
        <div className="mt-8">
          {actionHref ? (
            <Link href={actionHref} className={actionClass}>
              {actionLabel}
            </Link>
          ) : (
            <button type="button" onClick={onAction} className={actionClass}>
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
