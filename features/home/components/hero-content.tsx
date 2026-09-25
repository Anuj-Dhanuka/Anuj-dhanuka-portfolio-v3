import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { site } from "@/config/site"

export function HeroContent() {
  return (
    <div className="flex-1 space-y-6 text-left md:mt-0">
      <div className="inline-block rounded-full bg-purple-900/80 px-3 py-1 text-sm font-medium text-purple-200">
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
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link href="#projects" aria-label="Navigate to projects section" className="w-full sm:w-auto">
            <Button className="group relative h-10 w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg sm:h-12 sm:w-auto sm:px-6 sm:text-base">
              <span className="relative z-10 flex items-center">
                View My Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </Link>

          <Button
            asChild
            variant="outline"
            className="group h-10 w-full rounded-lg border-2 border-purple-300 bg-purple-900/30 px-4 py-2 text-sm font-medium !text-white transition-all duration-300 hover:scale-105 hover:border-purple-300 hover:bg-purple-700 hover:!text-white hover:shadow-lg focus-visible:!text-white sm:h-12 sm:w-auto sm:px-6 sm:text-base"
          >
            <a
              href="/ANUJ_DHANUKA_RESUME.pdf"
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
