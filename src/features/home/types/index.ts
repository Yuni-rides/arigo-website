import type { LucideIcon } from "lucide-react";

export interface HeroSlide {
  id: string;
  /** Tab label shown in the slider strip */
  tab: string;
  image: { src: string; alt: string };
  title: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface HeroContent {
  /** Seconds each slide stays before auto-advancing */
  slideDuration: number;
  slides: HeroSlide[];
}

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface CtaContent {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export interface CoreValue {
  id: string;
  /** e.g. "Safety" + highlight "First" renders "Safety First" with the highlight in brand colour */
  title: string;
  highlight: string;
  description: string;
  image: { src: string; alt: string };
  cta: { label: string; href: string };
}

export interface WhyChoosingContent {
  title: string;
  highlight: string;
  /** Paragraph parts; `{brand}` is replaced by the brand name in accent colour. */
  paragraphs: string[];
  images: { front: { src: string; alt: string }; back: { src: string; alt: string } };
}

export interface AppStep {
  title: string;
  description: string;
}

export interface AppShowcase {
  id: string;
  /** e.g. "Arigo Driver app" - rendered in brand colour after "Download" */
  name: string;
  steps: AppStep[];
  image: { src: string; alt: string };
  /** URL encoded in the QR code (usually a smart link that picks the right store). */
  downloadUrl: string;
  stores: { googlePlay: string; appStore: string };
}

export interface DownloadAppContent {
  titlePrefix: string;
  downloadHeading: string;
  downloadText: string;
  apps: AppShowcase[];
}

export interface AudienceItem {
  id: string;
  title: string;
  /** Use `{brand}` for the accent-coloured brand name. */
  description: string;
  image: { src: string; alt: string };
  /** Optional closing prompt + CTA (Figma shows it on the last row only). */
  cta?: { prompt: string; label: string; href: string };
}

export interface Story {
  id: string;
  /** Headline lines, rendered one per line. */
  lines: string[];
  image: { src: string; alt: string };
  videoUrl: string;
}

export interface StoriesContent {
  eyebrow: string;
  watchLabel: string;
  stories: Story[];
}

export interface TrustedPartner {
  id: string;
  name: string;
  logo: { src: string; width: number; height: number };
}

export interface TrustedContent {
  /** Use `{highlight}` for the accent-coloured word. */
  heading: string;
  highlight: string;
  partners: TrustedPartner[];
}

export interface ServiceArea {
  id: string;
  state: string;
  cities: string[];
  href: string;
  /** White-on-transparent state silhouette; recoloured via CSS mask. */
  map: { src: string; width: number; height: number };
}

export interface AreasContent {
  title: string;
  /** Portion of the title that carries the underline. */
  titleUnderlined: string;
  description: string;
  moreLabel: string;
  moreHref: string;
  areas: ServiceArea[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  /** 1-5 */
  rating: number;
}

export interface TestimonialsContent {
  title: string;
  items: Testimonial[];
}
