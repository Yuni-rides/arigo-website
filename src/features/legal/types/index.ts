export interface LegalBullet {
  /** Bold lead-in before the detail. */
  label?: string;
  text: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: LegalBullet[];
}

export interface LegalContent {
  /** Banner headline, and the page title. */
  title: string;
  /** Banner sub-line under the headline. */
  description: string;
  tocTitle: string;
  banner: { src: string; alt: string };
  sections: LegalSection[];
  cta: { title: string; description: string; label: string; href: string };
}
