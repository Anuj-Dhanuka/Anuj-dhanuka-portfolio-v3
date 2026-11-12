import { ArrowRight, Download } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { site } from "@/config/site"

export function HeroContent() {
  return (
    <div className="flex-1 space-y-6 text-left md:mt-0">
      <div className="inline-block rounded-full bg-purple-900/80 px-3 py-1 type-badge font-medium tracking-[0.04em] text-purple-200">
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
        SOFTWARE ENGINEER · FRONTEND DEVELOPER
      </div>

      <h1 className="type-hero text-white">
        I turn product ideas and designs into{" "}
        <span className="hero-gradient-text">polished digital experiences</span>.
      </h1>

      <div className="type-lead copy-inverse-body max-w-2xl space-y-4">
        <p>
          I’m Anuj Dhanuka, a Software Engineer and Frontend Developer working with React.js and React Native
          to build responsive, intuitive and production-ready interfaces for web and mobile products.
        </p>
        <p>
          With experience delivering 20+ client projects and contributing across ChefKart’s customer mobile
          app, internal dashboard and website, I combine reliable frontend development with strong attention
          to visual quality, usability and product requirements.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        <p className="type-small inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white sm:rounded-full">
          <span className="h-2 w-2 flex-none rounded-full bg-success-400" aria-hidden="true" />
          <span className="font-semibold">{site.availability}</span>
          <span className="hidden text-white/50 sm:inline" aria-hidden="true">
            ·
          </span>
          {/* Phones: its own line, aligned under the text after the dot. */}
          <span className="basis-full pl-4 text-purple-100 sm:basis-auto sm:pl-0">{site.openTo}</span>
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button
            asChild
            className="group relative h-11 w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg sm:h-12 sm:w-auto sm:px-6 sm:text-base"
          >
            {/* Plain anchor: next/link does not re-scroll when the URL already ends in #projects. */}
            <a
              href="#projects"
              data-cta="view_work"
              data-cta-section="hero"
              aria-label="Navigate to projects section"
            >
              <span className="relative z-10 flex items-center">
                View My Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group h-11 w-full rounded-lg border-2 border-purple-300 bg-purple-900/30 px-4 py-2 text-sm font-medium !text-white transition-all duration-300 hover:scale-105 hover:border-purple-300 hover:bg-purple-700 hover:!text-white hover:shadow-lg focus-visible:!text-white sm:h-12 sm:w-auto sm:px-6 sm:text-base"
          >
            <a
              href="/ANUJ_DHANUKA_RESUME.pdf"
              data-cta="resume_download"
              data-cta-section="hero"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Download
              Resume
            </a>
          </Button>
        </div>

        <a
          href={site.linkedIn}
          data-cta="linkedin"
          data-cta-section="hero"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition-colors duration-300 hover:text-white"
          aria-label="Connect with Anuj Dhanuka on LinkedIn"
        >
          <FaLinkedinIn className="h-4 w-4" />
          Connect on LinkedIn
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}
