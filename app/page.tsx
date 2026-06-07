import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingWrapper } from "@/components/loading-wrapper"
import { SectionWrapper } from "@/components/section-wrapper"
import { StatsStrip } from "@/components/stats-strip"
import { TechStrip } from "@/components/tech-strip"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

// Below-the-fold sections — server-rendered for SEO, JS chunk loaded lazily.
const WhatIBring = dynamic(() =>
  import("@/components/what-i-bring").then((m) => ({ default: m.WhatIBring })),
)
const Experience = dynamic(() =>
  import("@/components/experience").then((m) => ({ default: m.Experience })),
)
const Projects = dynamic(() =>
  import("@/components/projects").then((m) => ({ default: m.Projects })),
)
const FeaturedProductWork = dynamic(() =>
  import("@/components/featured-product-work").then((m) => ({
    default: m.FeaturedProductWork,
  })),
)
const Skills = dynamic(() =>
  import("@/components/skills").then((m) => ({ default: m.Skills })),
)
const RecognitionCertifications = dynamic(() =>
  import("@/components/recognition-certifications").then((m) => ({
    default: m.RecognitionCertifications,
  })),
)
const Education = dynamic(() =>
  import("@/components/education").then((m) => ({ default: m.Education })),
)
const Mentor = dynamic(() =>
  import("@/components/mentor").then((m) => ({ default: m.Mentor })),
)
const CTA = dynamic(() => import("@/components/cta").then((m) => ({ default: m.CTA })))
const FAQ = dynamic(() => import("@/components/faq").then((m) => ({ default: m.FAQ })))
const Contact = dynamic(() =>
  import("@/components/contact").then((m) => ({ default: m.Contact })),
)
const BackToTop = dynamic(() =>
  import("@/components/back-to-top").then((m) => ({ default: m.BackToTop })),
)

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden"
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
    >
      <ScrollProgress />
      <Navbar />
      <LoadingWrapper>
        <main
          className="overflow-hidden bg-white dark:bg-gray-950"
          style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
        >
          <SectionWrapper id="home">
            <Hero />
          </SectionWrapper>
          <SectionWrapper>
            <StatsStrip />
          </SectionWrapper>
          <SectionWrapper>
            <TechStrip />
          </SectionWrapper>
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper>
            <WhatIBring />
          </SectionWrapper>
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <FeaturedProductWork />
          </SectionWrapper>
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
          <SectionWrapper id="recognition-learning">
            <RecognitionCertifications />
          </SectionWrapper>
          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>
          <SectionWrapper id="mentor">
            <Mentor />
          </SectionWrapper>
          <SectionWrapper>
            <CTA />
          </SectionWrapper>
          <SectionWrapper id="faq">
            <FAQ />
          </SectionWrapper>
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
        <Footer />
        <BackToTop />
      </LoadingWrapper>
    </div>
  )
}
