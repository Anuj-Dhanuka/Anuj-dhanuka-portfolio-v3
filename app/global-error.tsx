"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application rendering failed", {
      name: error.name,
      message: error.message,
      digest: error.digest,
    })
  }, [error])

  return (
    <html lang="en-IN">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "2rem",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ maxWidth: "36rem", textAlign: "center" }}>
            <h1>Something went wrong.</h1>
            <p>Please try loading the portfolio again.</p>
            <button
              type="button"
              onClick={reset}
              style={{ marginTop: "1rem", padding: "0.75rem 1.25rem", cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
