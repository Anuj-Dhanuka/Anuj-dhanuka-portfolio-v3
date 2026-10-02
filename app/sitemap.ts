import { site } from "@/config/site"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Explicit dates track meaningful page-specific changes, not build/request time.
  // September dates come from the page-content commit; October dates reflect
  // the reviewed homepage FAQ/schema, project schema and contact artwork updates.
  return [
    { url: site.homeUrl, lastModified: "2026-10-02" },
    { url: `${site.url}/about`, lastModified: "2026-09-23" },
    { url: `${site.url}/experience`, lastModified: "2026-09-23" },
    { url: `${site.url}/skills`, lastModified: "2026-09-23" },
    { url: `${site.url}/projects`, lastModified: "2026-10-02" },
    { url: `${site.url}/contact`, lastModified: "2026-10-02" },
  ]
}
