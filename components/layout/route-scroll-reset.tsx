"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

// Next.js scrolls to the top on a route change, but a smooth scroll still running at that moment (a
// #section jump, Back to top, keyboard or animated wheel scrolling) applies one more step afterwards
// and leaves the new page part-way down. Re-check once that step has landed. Back/forward navigations
// keep the browser's restored position, and #hash targets are left to Next.js.
export function RouteScrollReset() {
  const pathname = usePathname()
  const isInitialRender = useRef(true)
  const isHistoryNavigation = useRef(false)

  useEffect(() => {
    const onPopState = () => {
      isHistoryNavigation.current = true
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false
      return
    }
    if (window.location.hash) return

    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "instant" })
      })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
