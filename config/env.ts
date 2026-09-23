import { z } from "zod"
import { site } from "@/config/site"

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().trim().min(1, "RESEND_API_KEY is required to send contact emails."),
  RESEND_FROM_EMAIL: z.string().trim().min(3).default("Portfolio Contact <onboarding@resend.dev>"),
  CONTACT_TO_EMAIL: z.string().trim().email().default(site.email),
})

export function getServerEnv() {
  return serverEnvSchema.parse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  })
}
