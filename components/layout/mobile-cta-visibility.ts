import { hireHub, hirePages } from "@/config/hire-pages"
import { whatsappLink } from "@/lib/whatsapp"

// Pure display rules for the mobile bottom CTA bar, kept separate from the DOM wiring so they can be tested.

// Explicit, reusable boundaries. A page opts in by marking its opening section; anything inside a marked
// "hide" region (the shared contact form) suppresses the bar while it is on screen.
export const PAGE_HERO_ATTRIBUTE = "data-page-hero"
export const HIDE_REGION_ATTRIBUTE = "data-mobile-cta-hide"
// Set on <html> by the navbar while the mobile menu is open.
export const MOBILE_MENU_ATTRIBUTE = "data-mobile-menu"

export type MobileCtaState = {
  // The page has a marked opening section (404, error and other non-content routes do not).
  hasHero: boolean
  // The opening section has been scrolled fully above the viewport.
  pastHero: boolean
  menuOpen: boolean
  // A contact form region is on screen.
  hideRegionVisible: boolean
  // A text field, textarea or select has focus (typing, on-screen keyboard).
  editing: boolean
  // One of the bar's own links has keyboard focus.
  focusInBar: boolean
}

export function isMobileCtaVisible(state: MobileCtaState): boolean {
  if (!state.hasHero) return false
  // Never pull the bar away from under a focused link; it hides once focus leaves.
  if (state.focusInBar) return true
  return state.pastHero && !state.menuOpen && !state.hideRegionVisible && !state.editing
}

// The opening section counts as passed only when it is entirely above the viewport, so scrolling back
// into any part of it hides the bar again.
export function isPastHero(entry: { isIntersecting: boolean; boundingClientRect: { bottom: number } }) {
  return !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
}

export function isEditableElement(element: Element | null): boolean {
  if (!element) return false
  if (typeof HTMLElement !== "undefined" && element instanceof HTMLElement && element.isContentEditable)
    return true
  if (element.tagName === "TEXTAREA" || element.tagName === "SELECT") return true
  if (element.tagName !== "INPUT") return false
  const type = (element.getAttribute("type") ?? "text").toLowerCase()
  return ![
    "button",
    "submit",
    "reset",
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "hidden",
  ].includes(type)
}

// The eight hire pages (the /hire overview and every registry page) swap "View resume" for WhatsApp, so a
// prospective client can message instead of reading a CV; every other page keeps resume + call.
export function isHirePath(pathname: string | null): boolean {
  if (!pathname) return false
  return pathname === hireHub.href || hirePages.some((page) => page.href === pathname)
}

// The WhatsApp chat link for a hire page, with a message prefilled from the page the visitor is on, so they
// can send it as is or edit it first. Null on every other page (they keep "View resume").
export function hireWhatsappHref(pathname: string | null): string | null {
  if (!pathname || !isHirePath(pathname)) return null
  const page = hirePages.find((entry) => entry.href === pathname)
  const message = page
    ? `Hi Anuj, I found your ${page.label} page and would like to discuss working with you.`
    : "Hi Anuj, I found your Hire Me page and would like to discuss working with you."
  return whatsappLink(message)
}
