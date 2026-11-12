"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, forceMount, ...props }, ref) =>
  forceMount ? (
    // Force-mounted panels stay in the HTML, so they collapse with a grid-row transition instead of
    // display:none. Closing and opening panels then animate together rather than the closing one
    // vanishing in a single frame. The transition sits on the inner grid because Radix zeroes the
    // content node's own transition while it measures. Visibility flips only after collapsing, which
    // keeps closed answers out of the tab order and accessibility tree.
    <AccordionPrimitive.Content ref={ref} forceMount className="group/content text-sm" {...props}>
      <div className="invisible grid grid-rows-[0fr] transition-[grid-template-rows,visibility] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-data-[state=open]/content:visible group-data-[state=open]/content:grid-rows-[1fr] motion-reduce:transition-none">
        <div className="min-h-0 overflow-hidden">
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </div>
      </div>
    </AccordionPrimitive.Content>
  ) : (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  ),
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
