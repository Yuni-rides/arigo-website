import { CoreValuesSection } from "./core-values-section";
import { CtaSection } from "./cta-section";
import { FeaturesSection } from "./features-section";
import { HeroSection } from "./hero-section";
import { StatsSection } from "./stats-section";

export function HomeView() {
  return (
    <>
      <HeroSection />
      <CoreValuesSection />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
