import { analyticsEvents } from "@/config/analytics"

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents]
export type AnalyticsProperties = Record<string, string | number | boolean>

export function trackEvent(name: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "production") return

  window.gtag?.("event", name, properties)
  window._paq?.push(["trackEvent", "portfolio", name, JSON.stringify(properties)])
}
