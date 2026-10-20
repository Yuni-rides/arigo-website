/**
 * Public API of the drivers feature.
 * Routes import ONLY from here - never from internal paths.
 */
export { DriversView } from "./components/drivers-view";
export { driversMetadata } from "./drivers.metadata";
export { driverApplicationContent, driverApplicationFields } from "./content/driver-application.content";
export type { DriverApplicationField } from "./content/driver-application.content";
export { submitDriverApplication } from "./services/submit-driver-application";
