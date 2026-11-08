"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    _paq?: unknown[][]
  }
}

// GA4 records client-side navigations itself (enhanced measurement: page changes based on browser
// history events), so only Matomo needs a page view sent here. Sending one to GA4 as well counted
// every in-site navigation twice.
export function NavigationAnalytics({ matomoEnabled }: { matomoEnabled: boolean }) {
  const pathname = usePathname()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    if (matomoEnabled && window._paq) {
      window._paq.push(["setCustomUrl", window.location.href])
      // Same "domain/title" form as the first page view in the Matomo snippet (app/layout.tsx), so a
      // page reached by a link and by a full load is reported under one title.
      window._paq.push(["setDocumentTitle", `${document.domain}/${document.title}`])
      window._paq.push(["trackPageView"])
    }
  }, [matomoEnabled, pathname])

  return null
}
