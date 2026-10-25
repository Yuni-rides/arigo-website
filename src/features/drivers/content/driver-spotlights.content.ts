export interface DriverSpotlight {
  id: string;
  quote: string;
  author: string;
  date: string;
  image: { src: string; alt: string };
}

export const driverSpotlightsContent = {
  title: "Meet the drivers",
  /** Prefix on the meta line, before the date. */
  label: "Driver Spotlight",
  /** Seconds each slide stays before the track moves on. */
  slideDuration: 5,
  spotlights: [
    {
      id: "marcus-reyes",
      quote: "I love knowing I helped someone get to their appointment safely",
      author: "Marcus Reyes",
      date: "April 20, 2026",
      image: { src: "/images/arigo-professional-driver.png", alt: "Marcus Reyes" },
    },
    {
      id: "sarah-m",
      quote: "Small kindnesses make the biggest difference on a ride",
      author: "Sarah M.",
      date: "April 18, 2026",
      image: { src: "/images/arigo-driver-experience-2.png", alt: "Sarah M." },
    },
    {
      id: "antoine-baptiste",
      quote: "Every patient has a story and I am honored to be part of their day",
      author: "Antoine Baptiste",
      date: "April 15, 2026",
      image: { src: "/images/arigo-driver-experience-3.png", alt: "Antoine Baptiste" },
    },
    {
      id: "dana-whitfield",
      quote: "The schedule works around my family instead of against it",
      author: "Dana Whitfield",
      date: "April 11, 2026",
      image: { src: "/images/arigo-driver-experience-1.png", alt: "Dana Whitfield" },
    },
    {
      id: "luis-ferreira",
      quote: "Dispatch always has my back when a pickup runs long",
      author: "Luis Ferreira",
      date: "April 8, 2026",
      image: { src: "/images/arigo-nemt-driver-service.png", alt: "Luis Ferreira" },
    },
    {
      id: "priya-raman",
      quote: "Regular riders start to feel like neighbours",
      author: "Priya Raman",
      date: "April 4, 2026",
      image: { src: "/images/arigo-trusted-driver-and-patient.png", alt: "Priya Raman" },
    },
  ] satisfies DriverSpotlight[],
};
