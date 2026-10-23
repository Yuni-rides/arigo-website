import type { BlogArticle } from "../../types";

import { gettingToDialysisWithoutACar } from "./getting-to-dialysis-without-a-car";
import { howToBecomeAMedicalTransportationDriver } from "./how-to-become-a-medical-transportation-driver";
import { howToCheckMedicalTransportationCompanyLicense } from "./how-to-check-medical-transportation-company-license";
import { medicalRideLateOrNoShow } from "./medical-ride-late-or-no-show";
import { ridesToChemotherapyAndRadiation } from "./rides-to-chemotherapy-and-radiation";

/**
 * Posts that ship with their own copy, newest first. They appear in the listing ahead
 * of the placeholders, and the detail route serves these bodies instead of the shared one.
 */
export const articles: BlogArticle[] = [
  howToBecomeAMedicalTransportationDriver,
  gettingToDialysisWithoutACar,
  howToCheckMedicalTransportationCompanyLicense,
  medicalRideLateOrNoShow,
  ridesToChemotherapyAndRadiation,
];
