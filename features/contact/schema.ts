import { z } from "zod"

const requiredText = (label: string, maxLength: number) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .max(maxLength, `${label} must be ${maxLength} characters or fewer.`)

export const contactFormSchema = z.object({
  name: requiredText("Name", 80),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .refine((value) => !value || /^[+\d().\-\s]+$/.test(value), "Enter a valid phone number."),
  subject: requiredText("Subject", 120).refine(
    (value) => !/[\r\n]/.test(value),
    "Subject must be a single line.",
  ),
  message: requiredText("Message", 3000),
  formCheck: z.string().max(200).default(""),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export type ContactApiResponse =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Partial<Record<keyof ContactFormData, string[]>> }

export const emptyContactForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  formCheck: "",
}
