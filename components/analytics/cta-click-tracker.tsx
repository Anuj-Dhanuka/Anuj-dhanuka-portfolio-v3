"use client"

import { useEffect } from "react"

import { analyticsEvents } from "@/config/analytics"
import { site } from "@/config/site"
import { trackEvent, type AnalyticsProperties } from "@/lib/analytics"

type CtaLink = Pick<HTMLElement, "dataset" | "getAttribute" | "closest">

// Contact links are recognised by their address, wherever they appear (header, contact cards, form,
// FAQ, footer), so new ones are tracked without tagging.
function contactCta(href: string): string | undefined {
  if (href.startsWith("mailto:")) return "email"
  if (href.startsWith("tel:")) return "phone"
  if (href.replace(/\/$/, "") === site.linkedIn) return "linkedin"
  if (href.replace(/\/$/, "") === site.github) return "github"
  return undefined
}

// The section a link sits in: an explicit data-cta-section, else the nearest section id,
// else the header or footer.
function ctaSection(link: CtaLink): string {
  if (link.dataset.ctaSection) return link.dataset.ctaSection
  const section = link.closest("section[id], header[id]")
  if (section?.id) return section.id
  if (link.closest("footer")) return "footer"
  if (link.closest("header, nav")) return "header"
  return ""
}

// What a CTA click reports, or null for links that are not CTAs (plain navigation, in-page jumps).
export function ctaEventProperties(link: CtaLink, pathname: string): AnalyticsProperties | null {
  const href = link.getAttribute("href") ?? ""
  const cta = link.dataset.cta || contactCta(href)
  if (!cta) return null
  return { cta, section: ctaSection(link), page: pathname, destination: href }
}

// One delegated listener for the whole site. Links marked data-cta (LinkButtons mark themselves) and
// contact links send cta_clicked; trackEvent already reports only in production.
export function CtaClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]")
      const properties = link && ctaEventProperties(link, window.location.pathname)
      if (properties) trackEvent(analyticsEvents.ctaClicked, properties)
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}
