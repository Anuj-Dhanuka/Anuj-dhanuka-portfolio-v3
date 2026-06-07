import { ImageResponse } from "next/og"

export const alt = "Anuj Dhanuka — Frontend & React Native Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F0F1E 0%, #1A1033 50%, #2A0F3F 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-220px",
            right: "-220px",
            width: "640px",
            height: "640px",
            borderRadius: "100%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "100%",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "6px",
            color: "#E9D5FF",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              display: "flex",
              width: "12px",
              height: "12px",
              borderRadius: "100%",
              backgroundColor: "#4ADE80",
              boxShadow: "0 0 16px rgba(74,222,128,0.7)",
            }}
          />
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
          }}
        >
          <div
            style={{
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-4px",
              color: "white",
              display: "flex",
            }}
          >
            Anuj Dhanuka
          </div>
          <div
            style={{
              fontSize: "46px",
              fontWeight: 500,
              lineHeight: 1.2,
              backgroundImage: "linear-gradient(90deg, #C084FC 0%, #F472B6 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Frontend & React Native Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            fontWeight: 600,
            color: "#D1D5DB",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                background: "linear-gradient(90deg, #A855F7, #EC4899)",
              }}
            />
            anujdhanuka.com
          </div>
          <div style={{ display: "flex", color: "#9CA3AF" }}>
            2+ years · 20+ client projects
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
