import type { ProjectNavItem } from "@/components/layout/projects-nav"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { ppcroyPage } from "@/features/experience/data/ppcroy"

// Header Experience dropdown, newest role first. Built on the server and passed to the client navbar so
// only these few fields are serialised.
export const experienceNavItems: ProjectNavItem[] = [
  { id: "chefkart", title: "ChefKart", href: chefkartPage.path },
  { id: "ppcroy", title: "PPCROY", href: ppcroyPage.path },
]
