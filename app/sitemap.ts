import { site } from "@/config/site"
import type { MetadataRoute } from "next"

const SITE_URL = site.url

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
  ]
}
