import { AboutHero } from "./about-hero";
import { CoreValuesSection } from "./core-values-section";
import { FaqsSection } from "./faqs-section";
import { WelcomeSection } from "./welcome-section";
import { WhyTrustedSection } from "./why-trusted-section";

export function AboutView() {
  return (
    <>
      <AboutHero />
      <WhyTrustedSection />
      <CoreValuesSection />
      <WelcomeSection />
      <FaqsSection />
    </>
  );
}
