import type { BlogArticle } from "../../types";

import { becomeAMedicalTransportationDriver } from "./become-a-medical-transportation-driver";
import { bookMedicalTransportationElderlyParent } from "./book-medical-transportation-elderly-parent";
import { dayInTheLifeMedicalTransportationDriver } from "./day-in-the-life-medical-transportation-driver";
import { doesMedicaidCoverRidesToDoctor } from "./does-medicaid-cover-rides-to-doctor";
import { gettingToDialysisWithoutACar } from "./getting-to-dialysis-without-a-car";
import { homeOxygenDeliveryWhatFamiliesShouldKnow } from "./home-oxygen-delivery-what-families-should-know";
import { howToCheckMedicalTransportationCompanyLicense } from "./how-to-check-medical-transportation-company-license";
import { medicalRideLateOrNoShow } from "./medical-ride-late-or-no-show";
import { nonEmergencyFacilityToFacilityTransfers } from "./non-emergency-facility-to-facility-transfers";
import { questionsDialysisCentersAskTransportationPartner } from "./questions-dialysis-centers-ask-transportation-partner";
import { ridesToChemotherapyAndRadiation } from "./rides-to-chemotherapy-and-radiation";

/**
 * Posts that ship with their own copy, newest first. The detail route serves these
 * bodies, and the listing builds one card per article.
 */
export const articles: BlogArticle[] = [
  doesMedicaidCoverRidesToDoctor,
  homeOxygenDeliveryWhatFamiliesShouldKnow,
  nonEmergencyFacilityToFacilityTransfers,
  questionsDialysisCentersAskTransportationPartner,
  bookMedicalTransportationElderlyParent,
  dayInTheLifeMedicalTransportationDriver,
  becomeAMedicalTransportationDriver,
  gettingToDialysisWithoutACar,
  howToCheckMedicalTransportationCompanyLicense,
  medicalRideLateOrNoShow,
  ridesToChemotherapyAndRadiation,
];
