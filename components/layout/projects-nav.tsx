"use client"

import { useEffect, useId, useRef, useState, type MouseEvent } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

// Slim, serialisable project data for the header. The layout builds it on the server so the full
// case-study content never ships in the navbar's client bundle.
export type ProjectNavItem = {
  id: string
  title: string
  href: string
}

// Hover intent: a short open delay avoids flicker when the pointer crosses the nav; the longer close
// delay lets the pointer travel diagonally into the panel without it collapsing.
const OPEN_DELAY = 120
const CLOSE_DELAY = 250

export function DesktopProjectsMenu({
  items,
  pathname,
  linkClassName,
  isActive,
  onNavigate,
}: {
  items: ProjectNavItem[]
  pathname: string
  linkClassName: string
  isActive: boolean
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const panelId = useId()

  const schedule = (next: boolean, delay: number) => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(next), delay)
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // Opened by click or keyboard, the panel closes on an outside press like any disclosure.
  useEffect(() => {
    if (!open) return
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", closeOutside)
    return () => document.removeEventListener("pointerdown", closeOutside)
  }, [open])

  const navigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    window.clearTimeout(timer.current)
    setOpen(false)
    onNavigate(event, href)
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      // Touch and pen taps should follow the link, not open the panel on emulated hover.
      onPointerEnter={(event) => event.pointerType === "mouse" && schedule(true, OPEN_DELAY)}
      onPointerLeave={(event) => event.pointerType === "mouse" && schedule(false, CLOSE_DELAY)}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false)
          buttonRef.current?.focus()
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <Link
        href="/projects"
        onClick={(event) => navigate(event, "/projects")}
        className={cn(linkClassName, "pr-1.5 xl:pr-2")}
        aria-current={pathname === "/projects" ? "page" : undefined}
      >
        Projects
      </Link>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          window.clearTimeout(timer.current)
          setOpen((value) => !value)
        }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Hide projects" : "Show projects"}
        className={cn(
          "ml-0.5 flex h-8 w-6 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
          isActive || open ? "text-current" : "text-current opacity-80 hover:opacity-100",
        )}
      >
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        // The top padding bridges the gap under the header so the pointer can reach the panel.
        // A plain list of names, one per line; the current page is brand-coloured, never filled.
        <div id={panelId} className="absolute left-1/2 top-full z-50 w-max min-w-56 -translate-x-1/2 pt-3">
          <ul className="overflow-hidden rounded-lg border border-purple-100 bg-white py-2 text-left shadow-[0_18px_45px_rgba(76,29,149,0.14)] animate-in fade-in-0 slide-in-from-top-1 duration-200 motion-reduce:animate-none dark:border-purple-800/40 dark:bg-gray-950">
            {items.map((item) => {
              const current = pathname === item.href
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(event) => navigate(event, item.href)}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block whitespace-nowrap px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-500",
                      current
                        ? "font-semibold text-brand-700 dark:text-brand-300"
                        : "copy-heading hover:text-brand-700 dark:hover:text-brand-300",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
            {/* Last row, under a rule: the full Projects page. */}
            <li className="mt-2 border-t border-purple-100 pt-2 dark:border-purple-800/40">
              <Link
                href="/projects"
                onClick={(event) => navigate(event, "/projects")}
                aria-current={pathname === "/projects" ? "page" : undefined}
                className="group flex items-center gap-1.5 whitespace-nowrap px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:text-accent1-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-500 dark:text-brand-300 dark:hover:text-accent1-300"
              >
                View all projects
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export function MobileProjectsMenu({
  items,
  pathname,
  onNavigate,
  linkClassName,
}: {
  items: ProjectNavItem[]
  pathname: string
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
  linkClassName: string
}) {
  // Collapsed by default so the rest of the menu stays visible without scrolling.
  const [open, setOpen] = useState(false)
  const listId = useId()

  return (
    <div>
      {/* The label navigates and the chevron only toggles, so a tap never does both. */}
      <div className="flex items-center">
        <Link
          href="/projects"
          onClick={(event) => onNavigate(event, "/projects")}
          className={linkClassName}
          aria-current={pathname === "/projects" ? "page" : undefined}
        >
          Projects
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={listId}
          aria-label={open ? "Hide projects" : "Show projects"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-gray-400"
        >
          <ChevronDown
            className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      {open && (
        <ul id={listId} className="pb-3 pl-4">
          {items.map((item) => {
            const current = pathname === item.href
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(event) => onNavigate(event, item.href)}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500",
                    current
                      ? "font-medium text-brand-700 dark:text-brand-300"
                      : "text-gray-600 hover:text-brand-700 dark:text-gray-400 dark:hover:text-brand-300",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
