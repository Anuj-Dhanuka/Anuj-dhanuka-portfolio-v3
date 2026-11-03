import { ImageResponse } from "next/og"

import { site } from "@/config/site"

export const alt = "ChefKart product engineering case study by Anuj Dhanuka"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Same palette and layout family as the Experience social image.
export default function ChefkartImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        background: "linear-gradient(135deg, #16091f 0%, #2e1065 62%, #500724 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 5, color: "#e9d5ff" }}>
        EXPERIENCE CASE STUDY
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          Multiple entry points, one service journey
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#f5d0fe" }}>
          ChefKart · React Native · Next.js · Payments · Operations
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
        <span>{site.author}</span>
        <span style={{ color: "#e9d5ff" }}>{new URL(site.url).hostname}</span>
      </div>
    </div>,
    size,
  )
}
