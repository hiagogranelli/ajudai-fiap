import { HeroSlider } from "@/components/hero-slider"
import { StatsSection } from "@/components/stats-section"
import { DonationPoints } from "@/components/donation-points"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <StatsSection />
      <DonationPoints />
    </main>
  )
}

