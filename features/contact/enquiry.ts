// Enquiry context carried from a call to action into the contact form. Both values are allowlisted:
// they describe the button a visitor used, not trusted attribution, and never hold free text or URLs.
export const enquiryTypes = ["general", "full-time", "freelance"] as const
export type EnquiryType = (typeof enquiryTypes)[number]

export const enquiryTypeLabels: Record<EnquiryType, string> = {
  general: "General enquiry",
  "full-time": "Full-time role",
  freelance: "Freelance project",
}

export const enquirySources = [
  "direct",
  "react-developer",
  "react-native-developer",
  "frontend-developer",
  "shopify-developer",
  "wordpress-developer",
] as const
export type EnquirySource = (typeof enquirySources)[number]

export const enquiryTypeParam = "enquiry"
export const enquirySourceParam = "source"

function pick<T extends string>(allowed: readonly T[], values: readonly string[]): T | undefined {
  // A repeated parameter is ambiguous, so it is ignored rather than guessed.
  if (values.length !== 1) return undefined
  return allowed.find((value) => value === values[0])
}

// Resolves the complete enquiry context from a contact URL. Unknown, empty or repeated values fall back
// to the neutral defaults, so moving from /contact?enquiry=freelance to plain /contact clears the context.
export function readEnquiryParams(params: Pick<URLSearchParams, "getAll">): {
  enquiryType: EnquiryType
  source: EnquirySource
} {
  return {
    enquiryType: pick(enquiryTypes, params.getAll(enquiryTypeParam)) ?? "general",
    source: pick(enquirySources, params.getAll(enquirySourceParam)) ?? "direct",
  }
}

// Identifies the enquiry-related part of a query string, ignoring unrelated keys, so the form re-applies
// context only when these parameters actually change.
export function enquiryParamsKey(params: Pick<URLSearchParams, "getAll">) {
  return JSON.stringify([params.getAll(enquiryTypeParam), params.getAll(enquirySourceParam)])
}

export function contactHref(enquiryType: EnquiryType, source: EnquirySource) {
  const params = new URLSearchParams({ [enquiryTypeParam]: enquiryType, [enquirySourceParam]: source })
  return `/contact?${params.toString()}`
}
