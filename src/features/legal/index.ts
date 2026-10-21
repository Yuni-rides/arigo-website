/**
 * Public API of the legal feature.
 * Routes import ONLY from here - never from internal paths.
 */
export { LegalView } from "./components/legal-view";
export { privacyContent } from "./content/privacy.content";
export { termsContent } from "./content/terms.content";
export { privacyMetadata, termsMetadata } from "./legal.metadata";
export type { LegalContent, LegalSection } from "./types";
