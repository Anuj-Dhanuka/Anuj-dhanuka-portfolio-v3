import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { notFound } from "next/navigation"
import { site } from "@/config/site"
import { caseStudyProjects, getCaseStudyProject } from "@/features/projects/project-details"

export const alt = "Project case study by Anuj Dhanuka"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.caseStudy.slug }))
}

export default async function ProjectImage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getCaseStudyProject((await params).slug)
  if (!project) notFound()
  const rekhaImage =
    project.caseStudy.slug === "rekha-maa-ki-rasoi"
      ? `data:image/jpeg;base64,${(
          await readFile(join(process.cwd(), "public/project-case-studies/rekha/og-food-2026.jpg"))
        ).toString("base64")}`
      : undefined
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
        PROJECT CASE STUDY
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08 }}>{project.title}</div>
          <div style={{ fontSize: 30, color: "#f5d0fe" }}>{project.role}</div>
        </div>
        {rekhaImage && (
          <div
            style={{
              display: "flex",
              width: 420,
              height: 265,
              overflow: "hidden",
              border: "8px solid rgba(255,255,255,0.16)",
              borderRadius: 24,
              boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
            }}
          >
            <img
              src={rekhaImage}
              alt=""
              width="420"
              height="265"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
        <span>{site.author}</span>
        <span style={{ color: "#e9d5ff" }}>{new URL(site.url).hostname}</span>
      </div>
    </div>,
    size,
  )
}
