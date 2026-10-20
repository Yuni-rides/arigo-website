import { DriverApplicationSection } from "./driver-application-section";
import { DriverToolsSection } from "./driver-tools-section";
import { DriversCareCta } from "./drivers-care-cta";
import { DriversExperienceSection } from "./drivers-experience-section";
import { DriversHero } from "./drivers-hero";
import { DriversTestimonials } from "./drivers-testimonials";

export function DriversView() {
  return (
    <>
      <DriversHero />
      <DriverToolsSection />
      <DriversExperienceSection />
      <DriversTestimonials />
      <DriversCareCta />
      <DriverApplicationSection />
    </>
  );
}
