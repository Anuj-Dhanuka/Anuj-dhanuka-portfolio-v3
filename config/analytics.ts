export const analytics = {
  googleMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  matomoUrl: process.env.NEXT_PUBLIC_MATOMO_URL?.trim().replace(/\/?$/, "/") || null,
  matomoSiteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID?.trim() || null,
} as const

export const analyticsEvents = {
  contactSubmitted: "contact_submitted",
  projectViewed: "project_viewed",
} as const
