import { Bot, Code2, GitBranch, MonitorSmartphone, PenTool, ShoppingBag } from "lucide-react"

import type { SkillIconKey } from "@/features/skills/data/skills"

export const skillIcons = {
  frontend: Code2,
  mobile: MonitorSmartphone,
  design: PenTool,
  platform: ShoppingBag,
  quality: GitBranch,
  ai: Bot,
} satisfies Record<SkillIconKey, typeof Code2>
