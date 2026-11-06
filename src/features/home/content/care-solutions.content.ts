import type { CareSolutionsContent } from "../types";

export const careSolutionsContent: CareSolutionsContent = {
  title: "Care Solutions for Every Need",
  description:
    "Arigo delivers safe, reliable and people-centered transportation for the organization and families who keep our communities moving forward.",
  solutions: [
    {
      id: "nemt",
      title: "Non-Emergency Medical Transportation",
      description: "Safe, comfortable rides to appointments, dialysis, therapy and post-surgery visits.",
      features: [
        "Ambulatory, wheelchair and stretcher options",
        "Thoughtful ride planning",
        "Compassionate, trained drivers",
      ],
      accent: "primary",
      cta: { label: "Learn more", href: "/services" },
      image: {
        src: "/images/arigo-medical-transportation-services.png",
        alt: "An Arigo driver helping a passenger in a wheelchair onto the vehicle lift",
      },
    },
    {
      id: "medical-delivery",
      title: "Medical Delivery",
      description: "Prescription and medical-related medicine delivered with care.",
      features: [
        "Ambulatory, wheelchair and stretcher options",
        "Thoughtful ride planning",
        "Compassionate, trained drivers",
      ],
      accent: "secondary",
      cta: { label: "Learn more", href: "/services" },
      image: {
        src: "/images/arigo-transport-and-medical-delivery.png",
        alt: "An Arigo courier handing a medication package to a customer at her door",
      },
    },
    {
      id: "school-transportation",
      title: "School Transportation",
      description: "Dependable school runs for students who need a little more support.",
      features: [
        "Trained, background-checked drivers",
        "Standing schedules for the school term",
        "Door-to-door pickup and drop-off",
      ],
      accent: "primary",
      cta: { label: "Reserve a Ride", href: "/#request" },
      image: {
        src: "/images/driverBanner2.png",
        alt: "An Arigo driver helping a student with her backpack into the car",
      },
    },
  ],
};
