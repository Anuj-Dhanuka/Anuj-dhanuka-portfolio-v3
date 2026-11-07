import type { ProjectNavItem } from "@/components/layout/projects-nav"
import { chefkartPage } from "@/features/experience/data/chefkart"
import { ppcroyPage } from "@/features/experience/data/ppcroy"
import { thirdEyeLabPage } from "@/features/experience/data/third-eye-lab"

// Header Experience dropdown, newest role first. Built on the server and passed to the client navbar so
// only these few fields are serialised.
export const experienceNavItems: ProjectNavItem[] = [
  { id: "chefkart", title: "ChefKart", href: chefkartPage.path },
  { id: "ppcroy", title: "PPCROY", href: ppcroyPage.path },
  { id: "third-eye-lab", title: "3rd Eye Lab", href: thirdEyeLabPage.path },
]
