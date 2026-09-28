import { DriverToolsSection } from "./driver-tools-section";
import { DriversHero } from "./drivers-hero";

/** Composes the /drivers page. Add further sections below the hero as they are designed. */
export function DriversView() {
  return (
    <>
      <DriversHero />
      <DriverToolsSection />
    </>
  );
}
