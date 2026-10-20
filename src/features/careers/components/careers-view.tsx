import { DriverApplicationSection } from "@/features/drivers/components/driver-application-section";
import { CareersHero } from "./careers-hero";
import { CareersBenefitsSection } from "./careers-benefits-section";
import { CareersJobList } from "./careers-job-list";

/** Composes the /careers page. Add open positions / benefits sections below the hero as they are designed. */
export function CareersView() {
  return (
    <>
      <CareersHero />
      <CareersJobList />
      <CareersBenefitsSection />
      <DriverApplicationSection />
    </>
  );
}
