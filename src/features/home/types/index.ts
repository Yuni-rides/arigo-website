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
