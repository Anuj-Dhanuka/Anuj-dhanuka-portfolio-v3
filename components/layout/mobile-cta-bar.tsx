"use client"

import { FileText, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { linkButtonVariants } from "@/components/ui/link-button"
import { site } from "@/config/site"
import {
  HIDE_REGION_ATTRIBUTE,
  MOBILE_MENU_ATTRIBUTE,
  PAGE_HERO_ATTRIBUTE,
  isEditableElement,
  isMobileCtaVisible,
  isPastHero,
} from "@/components/layout/mobile-cta-visibility"
import { cn } from "@/lib/utils"

// Global mobile bottom bar (below 768px): "View resume" and "Call Anuj". It appears once the page's marked
// opening section is scrolled past and hides for the mobile menu, a visible contact form and text entry.
// Rules live in mobile-cta-visibility.ts; this component only wires them to observers.
export function MobileCtaBar() {
  const pathname = usePathname()
  const barRef = useRef<HTMLDivElement>(null)
  // Observer results are tagged with the route they were measured on, so a new route starts hidden
  // until its own observers report (no stale values from the previous page, no reset in the effect).
  const [hero, setHero] = useState<{ path: string; pastHero: boolean } | null>(null)
  const [hideRegion, setHideRegion] = useState<{ path: string; visible: boolean } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [focusInBar, setFocusInBar] = useState(false)

  const hasHero = hero?.path === pathname
  const pastHero = hasHero && hero.pastHero
  const hideRegionVisible = hideRegion?.path === pathname && hideRegion.visible

  // Per route: observe the marked opening section and any contact-form regions. Re-runs on client-side
  // navigation and Back/Forward because the pathname changes.
  useEffect(() => {
    // Pages without a marked opening section (404, error and non-content routes) never report, so the
    // bar stays hidden there.
    const heroElement = document.querySelector(`[${PAGE_HERO_ATTRIBUTE}]`)
    if (!heroElement) return

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry) setHero({ path: pathname, pastHero: isPastHero(entry) })
    })
    heroObserver.observe(heroElement)

    const visibleRegions = new Set<Element>()
    const regionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleRegions.add(entry.target)
        else visibleRegions.delete(entry.target)
      }
      setHideRegion({ path: pathname, visible: visibleRegions.size > 0 })
    })
    document
      .querySelectorAll(`[${HIDE_REGION_ATTRIBUTE}]`)
      .forEach((region) => regionObserver.observe(region))

    return () => {
      heroObserver.disconnect()
      regionObserver.disconnect()
    }
  }, [pathname])

  // Mobile menu state, shared by the navbar through an attribute on <html>.
  useEffect(() => {
    const root = document.documentElement
    const update = () => setMenuOpen(root.getAttribute(MOBILE_MENU_ATTRIBUTE) === "open")
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: [MOBILE_MENU_ATTRIBUTE] })
    return () => observer.disconnect()
  }, [])

  // Text entry anywhere (including the homepage contact form) hides the bar while the keyboard is up.
  useEffect(() => {
    const update = () => setEditing(isEditableElement(document.activeElement))
    document.addEventListener("focusin", update)
    document.addEventListener("focusout", update)
    return () => {
      document.removeEventListener("focusin", update)
      document.removeEventListener("focusout", update)
    }
  }, [])

  // Reserve space for the bar (padding under the footer and scroll padding for focused controls) on pages
  // that use it, sized to the bar's real height so enlarged text is never covered.
  useEffect(() => {
    const root = document.documentElement
    const bar = barRef.current
    if (!hasHero || !bar) {
      root.removeAttribute("data-mobile-cta")
      return
    }
    root.setAttribute("data-mobile-cta", "on")
    const resize = new ResizeObserver(() => {
      root.style.setProperty("--mobile-cta-space", `${Math.ceil(bar.getBoundingClientRect().height)}px`)
    })
    resize.observe(bar)
    return () => {
      resize.disconnect()
      root.removeAttribute("data-mobile-cta")
      root.style.removeProperty("--mobile-cta-space")
    }
  }, [hasHero])

  const visible = isMobileCtaVisible({ hasHero, pastHero, menuOpen, hideRegionVisible, editing, focusInBar })

  // While the bar is showing, other floating controls (the homepage Back to top button) move above it.
  useEffect(() => {
    if (!hasHero) return
    document.documentElement.setAttribute("data-mobile-cta", visible ? "visible" : "on")
  }, [hasHero, visible])

  return (
    <div
      ref={barRef}
      // inert while hidden so its links cannot receive focus or be read out.
      inert={!visible}
      onFocus={() => setFocusInBar(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusInBar(false)
      }}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-purple-100 bg-white/95 px-4 pt-3 shadow-[0_-8px_24px_rgba(76,29,149,0.08)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none dark:border-purple-800/40 dark:bg-gray-950/95 dark:shadow-[0_-8px_24px_rgba(0,0,0,0.4)] md:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      {/* Two columns at normal text size (8rem fits twice at 320px); enlarged text grows the rem minimum,
          so the buttons stack instead of clipping their labels. */}
      <nav aria-label="Quick contact" className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-3">
        <a
          href={site.resumeHref}
          data-cta="view_resume"
          data-cta-section="mobile_sticky"
          className={cn(
            linkButtonVariants({ variant: "outline" }),
            "h-auto min-h-12 whitespace-normal px-3 text-center leading-tight",
          )}
        >
          <FileText className="h-4 w-4 flex-none" aria-hidden="true" />
          <span>
            View resume<span className="sr-only"> of Anuj Dhanuka (PDF)</span>
          </span>
        </a>
        <a
          href={site.phoneHref}
          data-cta="call_anuj"
          data-cta-section="mobile_sticky"
          className={cn(
            linkButtonVariants({ variant: "primary" }),
            "h-auto min-h-12 whitespace-normal px-3 text-center leading-tight",
          )}
        >
          <Phone className="h-4 w-4 flex-none" aria-hidden="true" />
          <span>
            Call Anuj<span className="sr-only"> Dhanuka</span>
          </span>
        </a>
      </nav>
    </div>
  )
}
