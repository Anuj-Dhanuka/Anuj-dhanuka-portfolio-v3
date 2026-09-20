import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkButtonVariants = cva(
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-600 to-accent1-600 text-white shadow-lg shadow-brand-500/15 hover:from-brand-700 hover:to-accent1-700",
        outline:
          "border-2 border-brand-300 bg-white text-brand-700 hover:border-brand-500 hover:bg-brand-50 dark:bg-gray-950 dark:text-brand-300",
        outlineInverse:
          "border-2 border-brand-300 bg-brand-950/30 text-white hover:bg-brand-700 focus-visible:ring-white focus-visible:ring-offset-black",
        line: "min-h-0 rounded-none border-b-2 border-brand-500 px-0 py-2 text-brand-700 hover:border-accent1-600 hover:text-accent1-700 dark:text-brand-300 dark:hover:border-accent1-400 dark:hover:text-accent1-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

type LinkButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  VariantProps<typeof linkButtonVariants> & {
    href: LinkProps["href"]
    icon?: React.ReactNode
  }

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, className, icon, variant, ...props }, ref) => (
    <Link ref={ref} className={cn(linkButtonVariants({ variant }), className)} {...props}>
      <span>{children}</span>
      {icon ? (
        <span className="flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </Link>
  ),
)

LinkButton.displayName = "LinkButton"

export { LinkButton, linkButtonVariants }
