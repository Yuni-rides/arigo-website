import { Gauge, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import type { CtaContent, FeatureItem, HeroContent, StatItem } from "../types";

const defaultCtas = {
  primaryCta: { label: "Become A Driver", href: "/#drivers" },
  secondaryCta: { label: "Request A Ride", href: "/#request" },
};

export const heroContent: HeroContent = {
  slideDuration: 5,
  slides: [
    {
      id: "safety",
      tab: "Safety",
      image: {
        src: "/images/homeBanner1.png",
        alt: "A smiling child wearing a seat belt in the back seat of an Arigo ride",
      },
      title: "Every Ride, With",
      highlight: "Gratitude.",
      description: "Technology-driven, caring transportation service trusted by families across the U.S.",
      ...defaultCtas,
    },
    {
      id: "ride",
      tab: "Ride",
      image: { src: "/images/homeBanner2.png", alt: "An Arigo passenger enjoying a comfortable ride" },
      title: "Comfort In",
      highlight: "Every Mile.",
      description: "Book a ride in seconds and travel with drivers who put your care first.",
      ...defaultCtas,
    },
    {
      id: "heroes",
      tab: "Our Heros",
      image: { src: "/images/homeBanner3.png", alt: "An Arigo driver welcoming a passenger" },
      title: "Drivers Who",
      highlight: "Care.",
      description: "Vetted, trained, and trusted - the people behind every safe Arigo journey.",
      ...defaultCtas,
    },
    {
      id: "community",
      tab: "Arigo Community",
      image: { src: "/images/homeBanner4.png", alt: "Families across the U.S. riding with Arigo" },
      title: "Stronger",
      highlight: "Together.",
      description: "Join a growing community of riders and drivers building safer roads for everyone.",
      ...defaultCtas,
    },
  ],
};

export const featureItems: FeatureItem[] = [
  {
    id: "design",
    icon: Sparkles,
    title: "Design-led",
    description: "Every decision starts with the user. Pixel-perfect execution from Figma to production.",
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Built for speed",
    description: "Server components, edge delivery, and optimised assets keep Core Web Vitals green.",
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Seamless workflow",
    description: "Feature-based architecture that lets your team ship in parallel without stepping on toes.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Secure by default",
    description: "Hardened headers, strict types, and audited dependencies from day one.",
  },
];

export const statItems: StatItem[] = [
  { id: "projects", value: 120, suffix: "+", label: "Projects shipped" },
  { id: "clients", value: 98, suffix: "%", label: "Client satisfaction" },
  { id: "countries", value: 14, label: "Countries served" },
];

export const ctaContent: CtaContent = {
  title: "Ready to build something great?",
  description: "Tell us about your project and we will get back to you within one business day.",
  cta: { label: "Talk to us", href: "mailto:hello@arigo.com" },
};
