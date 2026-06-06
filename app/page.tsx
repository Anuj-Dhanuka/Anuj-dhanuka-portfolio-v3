import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Mentor } from "@/components/mentor"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingWrapper } from "@/components/loading-wrapper"
import { SectionWrapper } from "@/components/section-wrapper"
import { StatsStrip } from "@/components/stats-strip"
import { TechStrip } from "@/components/tech-strip"
import { WhatIBring } from "@/components/what-i-bring"
import { FeaturedProductWork } from "@/components/featured-product-work"
import { RecognitionCertifications } from "@/components/recognition-certifications"

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
