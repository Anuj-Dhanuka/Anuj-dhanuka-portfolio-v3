import { StatsStrip } from "@/components/shared/stats-strip"
import {
  PpcroyDesign,
  PpcroyPlatforms,
  PpcroyProcess,
  PpcroySeo,
} from "@/features/experience/components/ppcroy/ppcroy-craft"
import {
  PpcroyBalance,
  PpcroyBeginning,
  PpcroyClients,
  PpcroyLanding,
} from "@/features/experience/components/ppcroy/ppcroy-foundation"
import { PpcroyImpact, PpcroySelectedWork } from "@/features/experience/components/ppcroy/ppcroy-impact"
import { ppcroyProof } from "@/features/experience/data/ppcroy"

export function PpcroyContent() {
  return (
    <>
      <StatsStrip stats={ppcroyProof} size="compact" ariaLabel="My work at PPCROY at a glance" />

      <PpcroyBeginning />
      <PpcroyBalance />
      <PpcroyLanding />
      <PpcroyClients />
      <PpcroyDesign />
      <PpcroySeo />
      <PpcroyPlatforms />
      <PpcroyProcess />
      <PpcroySelectedWork />
      <PpcroyImpact />
    </>
  )
}
