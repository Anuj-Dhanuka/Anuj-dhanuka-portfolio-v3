"use client"

import { useEffect } from "react"
import { RouteMessage } from "@/components/shared/route-message"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Route rendering failed", {
      name: error.name,
      message: error.message,
      digest: error.digest,
    })
  }, [error])

  return (
    <RouteMessage
      eyebrow="Something went wrong"
      title="This page could not be loaded."
      description="The problem may be temporary. Try loading the page again."
      actionLabel="Try again"
      onAction={reset}
    />
  )
}
