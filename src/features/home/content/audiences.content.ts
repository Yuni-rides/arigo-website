import type { AudienceItem } from "../types";

export const audiences: AudienceItem[] = [
  {
    id: "school-districts",
    title: "School Districts",
    description:
      "School districts trust {brand} for consistent, dependable transportation solutions that put student safety and well-being first. Our streamlined operations, transparent reporting, and strong commitment to inclusive and special-needs transportation powered by innovative technology make us a trusted partner in supporting student success.",
    image: {
      src: "/images/school_districts.png",
      alt: "An Arigo driver helping a student in a wheelchair outside a school",
    },
  },
  {
    id: "healthcare",
    title: "Hospitals & Healthcare Facilities",
    description:
      "Hospitals and healthcare facilities trust {brand} to provide safe, reliable, and compassionate transportation for patients and families. We support medical appointments, therapy sessions, and specialised care needs with professional drivers, strict safety standards, and technology-enabled coordination ensuring every journey is timely, secure, and stress-free for both patients and care teams.",
    image: {
      src: "/images/health_care.png",
      alt: "An Arigo driver assisting an elderly patient into a vehicle",
    },
  },
  {
    id: "guardians",
    title: "Parents, Students & Guardians.",
    description:
      "{brand} gives parents and guardians confidence through safe, transparent, and child-focused transportation every ride, every day.",
    image: { src: "/images/guardians_care.png", alt: "A mother and daughter greeting an Arigo driver" },
    cta: { prompt: "What are you thinking of?", label: "Become a Driver", href: "/#drivers" },
  },
];
