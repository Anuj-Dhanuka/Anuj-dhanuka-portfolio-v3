import type { MetadataRoute } from "next"

const SITE_URL = "https://anujdhanuka.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const sections = [
    "",
    "#about",
    "#experience",
    "#projects",
    "#skills",
    "#recognition-learning",
    "#education",
    "#mentor",
    "#faq",
    "#contact",
  ]

  return sections.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1 : 0.7,
  }))
}
