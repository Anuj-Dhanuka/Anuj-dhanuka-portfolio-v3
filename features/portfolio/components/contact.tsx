"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code2, Link2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { contactFormSchema, emptyContactForm, type ContactFormData } from "@/features/contact/schema"
import { submitContactForm } from "@/features/contact/submit-contact"
import { analyticsEvents } from "@/config/analytics"
import { site } from "@/config/site"
import { trackEvent } from "@/lib/analytics"

const contactDetails = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: site.phoneHref,
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Gurugram, Haryana, India",
    Icon: MapPin,
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: site.linkedIn,
    Icon: Link2,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: Code2,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    Icon: Mail,
  },
]

type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
      {message}
    </p>
  )
}

export function Contact() {
  const [formState, setFormState] = useState<ContactFormData>(emptyContactForm)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (successTimer.current) clearTimeout(successTimer.current)
    },
    [],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof ContactFormData; value: string }
    setFormState((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((previous) => ({ ...previous, [name]: undefined }))
    setSubmitError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitSuccess(false)

    const validation = contactFormSchema.safeParse(formState)
    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors
      setFieldErrors(
        Object.fromEntries(
          Object.entries(errors).map(([field, messages]) => [field, messages?.[0]]),
        ) as ContactFieldErrors,
      )
      return
    }

    setFieldErrors({})
    setIsSubmitting(true)

    const result = await submitContactForm(validation.data)
    setIsSubmitting(false)

    if (!result.success) {
      setSubmitError(result.error)
      if (result.fieldErrors) {
        setFieldErrors(
          Object.fromEntries(
            Object.entries(result.fieldErrors).map(([field, messages]) => [field, messages?.[0]]),
          ) as ContactFieldErrors,
        )
      }
      return
    }

    setSubmitSuccess(true)
    trackEvent(analyticsEvents.contactSubmitted)
    setFormState(emptyContactForm)
    successTimer.current = setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-16 dark:bg-gray-900 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(219,39,119,0.07),transparent_34%),linear-gradient(180deg,#ffffff_0%,#faf7ff_52%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(236,72,153,0.12),transparent_34%),linear-gradient(180deg,#111827_0%,#0f172a_52%,#111827_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-9 max-w-3xl text-center md:mb-11"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur dark:border-brand-800/50 dark:bg-gray-950/40 dark:text-brand-300">
            <Sparkles className="h-3.5 w-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="type-section copy-heading">Let&apos;s Build Something Meaningful</h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 to-accent1-600 dark:from-brand-500 dark:to-accent1-500" />
          <p className="type-body mx-auto mt-6 max-w-2xl copy-body">
            For frontend, React Native or software development opportunities, feel free to reach out through
            email or LinkedIn.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch xl:gap-8">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-full overflow-hidden rounded-lg border border-purple-100 bg-white/90 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_18px_50px_rgba(124,58,237,0.08)] backdrop-blur dark:border-purple-800/35 dark:bg-gray-950/55 sm:p-6">
              <span
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent1-600"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-500/10 to-accent1-500/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="type-label font-bold uppercase tracking-[0.16em] text-accent1-600 dark:text-accent1-300">
                  Contact Details
                </p>
                <h3 className="type-card-large mt-3 copy-heading">Open to meaningful product work.</h3>
                <p className="type-small mt-3 copy-body">
                  Share a role, project, collaboration or product requirement. I&apos;ll reply with the next
                  practical step.
                </p>
              </div>

              <div className="relative mt-5 grid gap-3">
                {contactDetails.map(({ label, value, href, Icon }) => {
                  const content = (
                    <>
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-accent1-50 text-brand-600 dark:from-brand-900/30 dark:to-accent1-900/20 dark:text-brand-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold copy-heading">{label}</span>
                        <span className="mt-1 block text-sm font-medium text-gray-600 transition-colors group-hover:text-brand-700 dark:text-gray-300 dark:group-hover:text-brand-300">
                          {value}
                        </span>
                      </span>
                    </>
                  )

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-3 rounded-lg border border-purple-100 bg-purple-50/50 p-3.5 transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-[0_14px_35px_rgba(124,58,237,0.08)] dark:border-purple-800/35 dark:bg-purple-900/15 dark:hover:bg-gray-950/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="group flex items-start gap-3 rounded-lg border border-purple-100 bg-purple-50/50 p-3.5 dark:border-purple-800/35 dark:bg-purple-900/15"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className="relative mt-5 border-t border-purple-100 pt-5 dark:border-purple-800/35">
                <p className="type-label font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
                  Social Links
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="inline-flex h-11 items-center gap-2 rounded-lg border border-purple-100 bg-white px-4 text-sm font-bold text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 dark:border-purple-800/40 dark:bg-gray-950/55 dark:text-brand-300 dark:hover:bg-brand-900/20"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto h-full"
          >
            <form
              className="interactive-high relative z-10 flex h-full flex-col space-y-4 rounded-lg border border-purple-100 bg-white/92 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.12)] backdrop-blur dark:border-purple-800/35 dark:bg-gray-950/65 sm:space-y-5 sm:p-6"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  value={formState.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <h3 className="type-card-large copy-heading">Let&apos;s Connect</h3>
                <p className="type-small mt-2 copy-body">
                  Tell me what you&apos;re building or hiring for, and I&apos;ll get back with a clear
                  response.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
                    maxLength={80}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    required
                  />
                  <FieldError id="name-error" message={fieldErrors.name} />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email address"
                    className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
                    maxLength={254}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    required
                  />
                  <FieldError id="email-error" message={fieldErrors.email} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Optional"
                    className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
                    maxLength={30}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                  />
                  <FieldError id="phone-error" message={fieldErrors.phone} />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Opportunity or project"
                    className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
                    maxLength={120}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                    required
                  />
                  <FieldError id="subject-error" message={fieldErrors.subject} />
                </div>
              </div>

              <div className="flex-1 space-y-1 sm:space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project"
                  className="interactive pointer-events-auto min-h-[130px] border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50 lg:min-h-[150px]"
                  maxLength={3000}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  required
                />
                <FieldError id="message-error" message={fieldErrors.message} />
              </div>

              <Button
                type="submit"
                className="group relative h-11 w-full overflow-hidden rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-4 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send
                    className={`ml-2 h-4 w-4 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"}`}
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
              </Button>

              {submitSuccess && (
                <motion.div
                  className="text-center text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-md"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Message sent successfully! I’ll get back to you soon.
                </motion.div>
              )}

              {submitError && (
                <p
                  className="rounded-md bg-red-50 p-3 text-center text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300"
                  role="alert"
                >
                  {submitError}
                </p>
              )}

              <p className="type-caption text-center text-gray-500 dark:text-gray-400">
                I respond to professional enquiries within an hour.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
