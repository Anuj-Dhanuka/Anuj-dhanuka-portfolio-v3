import { ImageResponse } from "next/og"

export const alt = "Web and mobile projects by Anuj Dhanuka"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function ProjectsImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        background: "linear-gradient(135deg, #201039, #4c1d95 65%, #831843)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, color: "#e9d5ff" }}>
        SELECTED WEB & MOBILE WORK
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1 }}>Built with purpose.</div>
        <div style={{ fontSize: 36, color: "#f5d0fe" }}>Web & mobile development projects</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
        <span>Anuj Dhanuka</span>
        <span style={{ color: "#e9d5ff" }}>anujdhanuka.com/projects</span>
      </div>
    </div>,
    size,
  )
}
