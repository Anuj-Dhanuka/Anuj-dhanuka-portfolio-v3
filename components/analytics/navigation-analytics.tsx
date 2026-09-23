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

export function NavigationAnalytics({
  googleMeasurementId,
  matomoEnabled,
}: {
  googleMeasurementId: string | null
  matomoEnabled: boolean
}) {
  const pathname = usePathname()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    if (googleMeasurementId && window.gtag) {
      window.gtag("config", googleMeasurementId, { page_path: pathname })
    }

    if (matomoEnabled && window._paq) {
      window._paq.push(["setCustomUrl", window.location.href])
      window._paq.push(["setDocumentTitle", document.title])
      window._paq.push(["trackPageView"])
    }
  }, [googleMeasurementId, matomoEnabled, pathname])

  return null
}
