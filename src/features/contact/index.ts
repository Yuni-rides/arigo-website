/**
 * Public API of the contact feature.
 * Routes import ONLY from here - never from internal paths.
 */
export { ContactView } from "./components/contact-view";
export { contactMetadata } from "./contact.metadata";
export { contactSupportContent } from "./content/contact-support.content";
export { submitContact } from "./services/submit-contact";
export type { ContactField, ContactFieldType, ContactSupportContent } from "./types";
