import { ImageResponse } from "next/og"

export const alt = "About Anuj Dhanuka, Frontend and React Native Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function AboutImage() {
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "100%",
          right: -120,
          top: -190,
          background: "radial-gradient(circle, rgba(192,132,252,0.48), rgba(192,132,252,0))",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 430,
          height: 430,
          borderRadius: "100%",
          left: -170,
          bottom: -220,
          background: "radial-gradient(circle, rgba(244,114,182,0.38), rgba(244,114,182,0))",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 22,
          letterSpacing: 5,
          color: "#e9d5ff",
        }}
      >
        <span
          style={{
            display: "flex",
            width: 11,
            height: 11,
            borderRadius: "100%",
            background: "linear-gradient(90deg, #c084fc, #f472b6)",
          }}
        />
        ABOUT ANUJ DHANUKA
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 1000 }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -3 }}>
          Shaped by ownership and product thinking.
        </div>
        <div style={{ display: "flex", fontSize: 31, lineHeight: 1.3, color: "#f5d0fe" }}>
          Software Engineer · React.js · React Native
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#e9d5ff" }}>
        <span>Anuj Dhanuka</span>
        <span>anujdhanuka.com/about</span>
      </div>
    </div>,
    size,
  )
}
