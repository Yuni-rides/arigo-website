import { CareServicesSection } from "./care-services-section";
import { SafetySection } from "./safety-section";
import { ServicesHero } from "./services-hero";

export function ServicesView() {
  return (
    <>
      <ServicesHero />
      <CareServicesSection />
      <SafetySection />
    </>
  );
}
