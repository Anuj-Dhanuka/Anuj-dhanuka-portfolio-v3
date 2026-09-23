"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { analyticsEvents } from "@/config/analytics"
import { site } from "@/config/site"
import { contactFormSchema, emptyContactForm, type ContactFormData } from "@/features/contact/schema"
import { submitContactForm } from "@/features/contact/submit-contact"
import { trackEvent } from "@/lib/analytics"

type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormData>(emptyContactForm)
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const focusFirstInvalidField = () => {
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus()
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as { name: keyof ContactFormData; value: string }
    setFormState((previous) => ({ ...previous, [name]: value }))
    setFieldErrors((previous) => ({ ...previous, [name]: undefined }))
    setSubmitError("")
    setSubmitSuccess(false)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
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
      focusFirstInvalidField()
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
        focusFirstInvalidField()
      }
      return
    }

    setSubmitSuccess(true)
    trackEvent(analyticsEvents.contactSubmitted)
    setFormState(emptyContactForm)
  }

  return (
    <form
      ref={formRef}
      className="interactive-high pointer-events-auto relative z-10 flex h-full flex-col space-y-4 rounded-lg border border-purple-100 bg-white/92 p-5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_70px_rgba(124,58,237,0.12)] backdrop-blur dark:border-purple-800/35 dark:bg-gray-950/65 sm:space-y-5 sm:p-6"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
      aria-describedby="contact-form-instructions"
      aria-busy={isSubmitting}
    >
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="form-check">Leave this field blank</label>
        <input
          id="form-check"
          name="formCheck"
          value={formState.formCheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <h3 id="contact-form-heading" className="type-card-large copy-heading">
          Let&apos;s Connect
        </h3>
        <p id="contact-form-instructions" className="type-small mt-2 copy-body">
          Tell me what you&apos;re building or hiring for, and I&apos;ll get back with a clear response. All
          fields are required.
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
            autoComplete="name"
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
            autoComplete="email"
            className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
            maxLength={254}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            required
          />
          <FieldError id="email-error" message={fieldErrors.email} />
        </div>
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
          placeholder="Opportunity, project or collaboration"
          autoComplete="off"
          className="interactive pointer-events-auto border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50"
          maxLength={120}
          aria-invalid={Boolean(fieldErrors.subject)}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          required
        />
        <FieldError id="subject-error" message={fieldErrors.subject} />
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
          autoComplete="off"
          className="interactive pointer-events-auto min-h-[130px] border-purple-100 bg-white focus:border-brand-500 focus:ring-brand-500 dark:border-purple-800/45 dark:bg-gray-950/50 lg:min-h-[150px]"
          maxLength={3000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error message-count" : "message-count"}
          required
        />
        <FieldError id="message-error" message={fieldErrors.message} />
        <p id="message-count" className="type-caption text-right text-gray-500 dark:text-gray-400">
          {formState.message.length} / 3000 characters
        </p>
      </div>

      <Button
        type="submit"
        className="group relative h-11 w-full overflow-hidden rounded-lg bg-gradient-to-r from-brand-600 to-accent1-600 px-4 text-white shadow-lg shadow-purple-500/20 hover:from-brand-700 hover:to-accent1-700"
        disabled={isSubmitting}
      >
        <span className="relative z-10 flex items-center">
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send
            className={`ml-2 h-4 w-4 ${isSubmitting ? "animate-pulse" : "transition-transform group-hover:translate-x-1"}`}
            aria-hidden="true"
          />
        </span>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Button>

      {submitSuccess && (
        <motion.div
          className="rounded-md bg-green-50 p-2 text-center text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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
        Prefer email? Write directly to{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-brand-700 underline-offset-4 hover:underline dark:text-brand-300"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  )
}
