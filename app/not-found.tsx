import type { Metadata } from "next"
import { RouteMessage } from "@/components/shared/route-message"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <RouteMessage
      eyebrow="404"
      title="That page does not exist."
      description="The link may be outdated, or the page may have moved. Return to the portfolio to continue browsing."
      actionLabel="Return home"
      actionHref="/"
    />
  )
}
