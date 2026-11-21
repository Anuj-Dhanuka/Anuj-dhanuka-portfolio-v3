import type { Metadata } from "next"

import { site } from "@/config/site"
import type { HirePageMeta } from "@/features/hire-pages/types"

export const hirePageUrl = (page: HirePageMeta) => `${site.url}${page.path}`

// The root layout sets no title template, so the page title is used as written and the name appears once.
// Canonical without a trailing slash, and the route's own generated social image.
export function hirePageMetadata(page: HirePageMeta, imageAlt: string): Metadata {
  const { title, description } = page
  const url = hirePageUrl(page)
  const image = { url: `${page.path}/opengraph-image`, width: 1200, height: 630, alt: imageAlt }
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  }
}

// WebPage about the site-wide Person, plus breadcrumbs. No JobPosting, Offer, review, rating or FAQ markup.
export function hirePageJsonLd(page: HirePageMeta) {
  const url = hirePageUrl(page)
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#person` },
        mainEntity: { "@id": `${site.url}/#person` },
        breadcrumb: { "@id": `${url}/#breadcrumb` },
        datePublished: page.published,
        dateModified: page.lastModified,
        inLanguage: site.locale,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.homeUrl },
          { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
        ],
      },
    ],
  }
}

// Same escaping as the site's other inline JSON-LD: "<" cannot close the script element.
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c")
