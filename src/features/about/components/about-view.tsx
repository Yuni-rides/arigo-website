import { AboutHero } from "./about-hero";
import { FaqsSection } from "./faqs-section";
import { WelcomeSection } from "./welcome-section";
import { WhatToExpectSection } from "./what-to-expect-section";
import { WhyTrustedSection } from "./why-trusted-section";

export function AboutView() {
  return (
    <>
      <AboutHero />
      <WhyTrustedSection />
      <WhatToExpectSection />
      <WelcomeSection />
      <FaqsSection />
    </>
  );
}
