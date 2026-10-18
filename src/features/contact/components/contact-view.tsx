import { ContactHero } from "./contact-hero";
import { ContactSupportSection } from "./contact-support-section";

/** Composes the /contact-us page. Add the form / details sections below the hero as they are designed. */
export function ContactView() {
  return (
    <>
      <ContactHero />
      <ContactSupportSection />
    </>
  );
}
