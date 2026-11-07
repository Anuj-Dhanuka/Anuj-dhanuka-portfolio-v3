import { site } from "@/config/site"
import type { MetadataRoute } from "next"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { ppcroyPage } from "@/features/experience/data/ppcroy"
import { thirdEyeLabPage } from "@/features/experience/data/third-eye-lab"
import { caseStudyProjects, projectPath } from "@/features/projects/project-details"

export default function sitemap(): MetadataRoute.Sitemap {
  // Explicit dates track meaningful page-specific changes, not build/request time.
  // September dates come from the page-content commit; October dates reflect
  // the reviewed homepage FAQ/schema, project schema and contact artwork updates.
  // October 3 adds Certifications, its homepage link and the shared certificate order on About.
  // Reviewed case studies and their links on Projects/Experience/Skills also ship October 3.
  // October 6 replaces the public mobile project, removes client-project exposure,
  // and deepens QuizWar with reviewed mobile engineering evidence. October 9 publishes
  // the reviewed Rekha Maa Ki Rasoi UI/UX and WordPress business-website case study.
  // November 2 publishes the Rama Technical College homepage case study and links its project cards.
  // November 3 publishes the ChefKart experience case study, linked from Home, Experience and Skills.
  // November 7 publishes the PPCROY and 3rd Eye Lab experience pages, linked from Experience, and records
  // the end of the ChefKart role (31 October 2026) on Home, About, Experience, ChefKart and Contact.
  return [
    { url: site.homeUrl, lastModified: "2026-11-07" },
    { url: `${site.url}/about`, lastModified: "2026-11-07" },
    { url: `${site.url}/experience`, lastModified: "2026-11-07" },
    { url: `${site.url}${chefkartPage.path}`, lastModified: chefkartPage.lastModified },
    { url: `${site.url}${ppcroyPage.path}`, lastModified: ppcroyPage.lastModified },
    { url: `${site.url}${thirdEyeLabPage.path}`, lastModified: thirdEyeLabPage.lastModified },
    { url: `${site.url}/skills`, lastModified: "2026-11-03" },
    { url: `${site.url}/projects`, lastModified: "2026-11-02" },
    { url: `${site.url}/certifications`, lastModified: "2026-10-03" },
    { url: `${site.url}/contact`, lastModified: "2026-11-07" },
    ...caseStudyProjects.map((project) => ({
      url: `${site.url}${projectPath(project)}`,
      lastModified: project.caseStudy.lastModified,
    })),
  ]
}
