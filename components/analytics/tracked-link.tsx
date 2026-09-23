"use client"

import Link, { type LinkProps } from "next/link"
import type { AnchorHTMLAttributes } from "react"
import { trackEvent, type AnalyticsEventName, type AnalyticsProperties } from "@/lib/analytics"

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    eventName: AnalyticsEventName
    eventProperties?: AnalyticsProperties
  }

export function TrackedLink({ eventName, eventProperties, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventProperties)
        onClick?.(event)
      }}
    />
  )
}
