import type { SafetyFeature, SafetySectionContent } from "../types";

// Icons ka folder agar alag ho to sirf yahan badalna
const ICON_DIR = "/images";

const icons = {
  transportation: `${ICON_DIR}/transportaionIcon.png`,
  privacy: `${ICON_DIR}/privacyIcon.png`,
  flexible: `${ICON_DIR}/FlexibleIcon.png`,
  trauma: `${ICON_DIR}/traumaIcon.png`,
};

// Figma mein har service ke 4 rows mein yahi 4 icons usi order mein hain
const withIcons = (labels: [string, string, string, string]): SafetyFeature[] => [
  { icon: icons.transportation, label: labels[0] },
  { icon: icons.privacy, label: labels[1] },
  { icon: icons.flexible, label: labels[2] },
  { icon: icons.trauma, label: labels[3] },
];

export const safetySectionContent: SafetySectionContent = {
  title: "Safety is Our",
  highlight: "Highest Priority",
  description: "Safe hands. Safe rides. Peace of mind for patients and families.",
  slideDuration: 5,
  services: [
    {
      id: "ambulatory",
      title: "Ambulatory Rides",
      features: withIcons([
        "For patients who can walk with or without support",
        "Door-to-door assistance",
        "Patient, unhurried drivers",
        "Comfortable, clean vehicles",
      ]),
      image: {
        src: "/images/arigo-ambulatory-ride-service.png",
        alt: "Driver assisting an elderly patient into the vehicle",
      },
    },
    {
      id: "wheelchair",
      title: "Wheelchair Secure Rides",
      features: withIcons([
        "For patients who use a wheelchair",
        "Secure wheelchair locking system",
        "Ramp and lift equipped vehicles",
        "Trained and caring drivers",
      ]),
      image: {
        src: "/images/arigo-wheelchair-secure-ride.png",
        alt: "Patient being assisted into a wheelchair accessible vehicle",
      },
    },
    {
      id: "stretcher",
      title: "Stretcher Transport Service",
      features: withIcons([
        "For patients who cannot sit upright",
        "Safe and secure stretcher fitting",
        "Trained medical-aware staff",
        "Smooth and comfortable ride",
      ]),
      image: {
        src: "/images/arigo-stretcher-transport-service.png",
        alt: "Stretcher transport vehicle with attendants",
      },
    },
    {
      id: "dialysis",
      title: "Dialysis Boarding Assistance",
      features: withIcons([
        "Reliable rides for recurring dialysis sessions",
        "Boarding and drop-off assistance",
        "Consistent, familiar drivers",
        "On-time pickups, every session",
      ]),
      image: {
        src: "/images/arigo-dialysis-boarding-assistance.png",
        alt: "Driver helping a dialysis patient board the vehicle",
      },
    },
  ],
};