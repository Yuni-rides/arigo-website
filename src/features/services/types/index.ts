import type { PageHeroProps } from "@/components/sections/page-hero";

export type ServicesHeroContent = PageHeroProps;

export type SafetyFeature = {
  icon: string;
  label: string;
};

export type SafetyService = {
  id: string;
  title: string;
  features: SafetyFeature[];
  image: { src: string; alt: string };
};

export type SafetySectionContent = {
  title: string;
  highlight: string;
  description: string;
  slideDuration: number;
  services: SafetyService[];
};