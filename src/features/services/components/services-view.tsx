import { BookingSection } from "@/features/booking";
import { CareServicesSection } from "./care-services-section";
import { SafetySection } from "./safety-section";
import { ServicesHero } from "./services-hero";
import { FaqsSection } from "@/features/about/components/faqs-section";

export function ServicesView() {
  return (
    <>
      <ServicesHero />
      <CareServicesSection />
      <SafetySection />
      <BookingSection />
      <FaqsSection />
    </>
  );
}
