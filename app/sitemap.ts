import { site } from "@/config/site"
import type { MetadataRoute } from "next"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { ppcroyPage } from "@/features/experience/data/ppcroy"
import { thirdEyeLabPage } from "@/features/experience/data/third-eye-lab"
import { frontendDeveloperPage } from "@/features/frontend-developer/data/frontend-developer"
import { reactDeveloperPage } from "@/features/react-developer/data/react-developer"
import { reactNativeDeveloperPage } from "@/features/react-native-developer/data/react-native-developer"
import { shopifyDeveloperPage } from "@/features/shopify-developer/data/shopify-developer"
import { hirePage } from "@/features/hire/data/hire"
import { figmaToWebsitePage } from "@/features/figma-to-website/data/figma-to-website"
import { landingPageDevelopmentPage } from "@/features/landing-page-development/data/landing-page-development"
import { wordpressDeveloperPage } from "@/features/wordpress-developer/data/wordpress-developer"
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
  // November 10 server-renders the homepage's inactive tab panels, moves About and Experience copy to the
  // past tense, aligns the internship duration, and labels Mopedo a frontend demo.
  // November 11 redesigns the 3rd Eye Lab page and removes an unsupported internship claim from About and Experience.
  // November 20 publishes the React developer hire page, links it from Skills and Experience, and adds an
  // enquiry-type selector to the Contact page.
  // November 21 redesigns the React developer page section by section and adds five documented technologies,
  // and publishes the React Native developer hire page, linked from the footer, Skills and Experience.
  // The Frontend developer hire page (implemented 21 November 2026) follows the same linking; its date is
  // the page's own `lastModified` and should move to the actual release day if it ships later. The Shopify
  // developer hire page (implemented 21 November 2026) works the same way. The same day adds the owner-confirmed
  // Shopify theme and store-setup skills to the shared skill groups shown on the homepage and Skills page.
  // The WordPress developer hire page (implemented 21 November 2026) follows the same pattern, as does the
  // landing-page development service page (same day) and the Figma-to-website service page. The central
  // Hire Me overview (/hire, implemented the same day) links to all seven and uses its own content date.
  return [
    { url: site.homeUrl, lastModified: "2026-11-21" },
    { url: `${site.url}/about`, lastModified: "2026-11-11" },
    { url: `${site.url}/experience`, lastModified: "2026-11-20" },
    { url: `${site.url}${chefkartPage.path}`, lastModified: chefkartPage.lastModified },
    { url: `${site.url}${ppcroyPage.path}`, lastModified: ppcroyPage.lastModified },
    { url: `${site.url}${thirdEyeLabPage.path}`, lastModified: thirdEyeLabPage.lastModified },
    { url: `${site.url}/skills`, lastModified: "2026-11-21" },
    { url: `${site.url}/projects`, lastModified: "2026-11-02" },
    { url: `${site.url}/certifications`, lastModified: "2026-10-03" },
    { url: `${site.url}/contact`, lastModified: "2026-11-20" },
    { url: `${site.url}${hirePage.path}`, lastModified: hirePage.lastModified },
    { url: `${site.url}${reactDeveloperPage.path}`, lastModified: reactDeveloperPage.lastModified },
    {
      url: `${site.url}${reactNativeDeveloperPage.path}`,
      lastModified: reactNativeDeveloperPage.lastModified,
    },
    { url: `${site.url}${frontendDeveloperPage.path}`, lastModified: frontendDeveloperPage.lastModified },
    { url: `${site.url}${shopifyDeveloperPage.path}`, lastModified: shopifyDeveloperPage.lastModified },
    { url: `${site.url}${wordpressDeveloperPage.path}`, lastModified: wordpressDeveloperPage.lastModified },
    {
      url: `${site.url}${landingPageDevelopmentPage.path}`,
      lastModified: landingPageDevelopmentPage.lastModified,
    },
    { url: `${site.url}${figmaToWebsitePage.path}`, lastModified: figmaToWebsitePage.lastModified },
    ...caseStudyProjects.map((project) => ({
      url: `${site.url}${projectPath(project)}`,
      lastModified: project.caseStudy.lastModified,
    })),
  ]
}
