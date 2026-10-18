export interface DriverExperience {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  points: {
    title: string;
    description: string;
  }[];
}

export const driversExperienceIntro = {
  title: "About the Arigo",
  subtitle: "experience",
  highlight: "for drivers",
  description: "The principles that guide every journey, every patient and every family we serve.",
};

export const driversExperienceContent: DriverExperience[] = [
  {
    id: "ride-delivery",
    title: "Streamline end-to-end ride delivery",
    image: {
      src: "/images/arigo-driver-experience-1.png",
      alt: "Driver behind the wheel with a navigation device",
    },
    points: [
      {
        title: "Prepare for your journey",
        description:
          "Review your assigned trip, pickup details and passenger instructions before setting off.",
      },
      {
        title: "Stay connected with dispatch",
        description: "Keep dispatch informed about arrivals, delays and changes throughout your journey.",
      },
      {
        title: "Navigate with confidence",
        description: "Check your route before departure and follow navigation safely while on the road.",
      },
    ],
  },
  {
    id: "care",
    title: "Safe, supported care on every ride",
    image: {
      src: "/images/arigo-driver-experience-2.png",
      alt: "Arigo driver experience — passenger care and safety",
    },
    points: [
      {
        title: "Rider needs, upfront",
        description:
          "See the rider’s pickup details, mobility needs and any notes before you start, so you arrive prepared.",
      },
      {
        title: "Safety checklist",
        description:
          "A quick pre-ride checklist covers your vehicle, ramp or lift and securement before every trip.",
      },
      {
        title: "Help when you need it",
        description: "Reach dispatch from the app anytime during a trip.",
      },
    ],
  },
  {
    id: "earnings",
    title: "Earn on your own terms",
    image: {
      src: "/images/arigo-driver-experience-3.png",
      alt: "Arigo driver experience — flexible work and earnings",
    },
    points: [
      {
        title: "Flexible schedule",
        description: "Go online when it suits you and accept the trips that fit your day.",
      },
      {
        title: "Clear earnings",
        description: "Track what you earn for every ride in your earnings screen, with no guesswork.",
      },
      {
        title: "Regular payouts",
        description: "Get paid on a regular schedule, straight to your bank account.",
      },
    ],
  },
];
