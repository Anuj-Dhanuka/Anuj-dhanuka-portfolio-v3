import dynamic from "next/dynamic"
import { Hero } from "@/features/home/components/hero"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StatsStrip } from "@/features/portfolio/components/stats-strip"
import { TechStrip } from "@/features/portfolio/components/tech-strip"
import { About } from "@/features/portfolio/components/about"
import { site } from "@/config/site"

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.homeUrl,
  name: site.title,
  description: site.description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#person` },
  mainEntity: { "@id": `${site.url}/#person` },
  inLanguage: site.locale,
}

// Below-the-fold sections — server-rendered for SEO, JS chunk loaded lazily.
const WhatIBring = dynamic(() =>
  import("@/features/portfolio/components/what-i-bring").then((m) => ({ default: m.WhatIBring })),
)
const Experience = dynamic(() =>
  import("@/features/portfolio/components/experience").then((m) => ({ default: m.Experience })),
)
const Projects = dynamic(() =>
  import("@/features/projects/components/projects").then((m) => ({ default: m.Projects })),
)
const FeaturedProductWork = dynamic(() =>
  import("@/features/portfolio/components/featured-product-work").then((m) => ({
    default: m.FeaturedProductWork,
  })),
)
const Skills = dynamic(() =>
  import("@/features/skills/components/skills-overview").then((m) => ({ default: m.SkillsOverview })),
)
const RecognitionCertifications = dynamic(() =>
  import("@/features/portfolio/components/recognition-certifications").then((m) => ({
    default: m.RecognitionCertifications,
  })),
)
const Education = dynamic(() =>
  import("@/features/portfolio/components/education").then((m) => ({ default: m.Education })),
)
const Mentor = dynamic(() =>
  import("@/features/portfolio/components/mentor").then((m) => ({ default: m.Mentor })),
)
const CTA = dynamic(() => import("@/components/shared/cta").then((m) => ({ default: m.CTA })))
const FAQ = dynamic(() => import("@/features/portfolio/components/faq").then((m) => ({ default: m.FAQ })))
const Contact = dynamic(() =>
  import("@/features/contact/components/contact-section").then((m) => ({ default: m.ContactSection })),
)
const BackToTop = dynamic(() =>
  import("@/components/layout/back-to-top").then((m) => ({ default: m.BackToTop })),
)

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden"
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c") }}
      />
      <main
        id="main-content"
        className="overflow-hidden bg-white dark:bg-gray-950"
        style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
      >
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <SectionWrapper>
          <StatsStrip />
        </SectionWrapper>
        <SectionWrapper>
          <TechStrip />
        </SectionWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <WhatIBring />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <FeaturedProductWork />
        </SectionWrapper>
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <RecognitionCertifications />
        </SectionWrapper>
        <SectionWrapper>
          <Education />
        </SectionWrapper>
        <SectionWrapper>
          <Mentor />
        </SectionWrapper>
        <SectionWrapper>
          <CTA />
        </SectionWrapper>
        <SectionWrapper>
          <FAQ />
        </SectionWrapper>
        <SectionWrapper>
          <Contact deferForm />
        </SectionWrapper>
      </main>
      <BackToTop />
    </div>
  )
}
