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
      id: "partners",
      title: "Patients, Families & Healthcare Partners",
      description: "Prescription and medical-related medicine delivered with care.",
      features: [
        "Easy ride requests for patients and caregivers",
        "Reliable scheduling for clinics and hospitals",
        "Peace of mind for families",
      ],
      accent: "primary",
      cta: { label: "Reserve a Ride", href: "/#request" },
      image: {
        src: "/images/arigo-patient-care-solutions.png",
        alt: "A caregiver showing a phone to a smiling patient in a wheelchair",
      },
    },
  ],
};
