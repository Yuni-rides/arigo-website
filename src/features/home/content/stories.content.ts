import type { StoriesContent } from "../types";

/** All stories share story1.png until the remaining assets arrive. */
const image = {
  src: "/images/story1.png",
  alt: "A grandmother and granddaughter smiling in front of an Arigo bus",
};

export const storiesContent: StoriesContent = {
  eyebrow: "Our Story",
  watchLabel: "Watch Our Story",
  stories: [
    {
      id: "real-people",
      lines: ["Real People.", "Real Journeys.", "That\u2019s Arigo."],
      image,
      videoUrl: "https://youtube.com/@arigo",
    },
    {
      id: "families",
      lines: ["Every Family.", "Every Morning.", "Cared For."],
      image,
      videoUrl: "https://youtube.com/@arigo",
    },
    {
      id: "drivers",
      lines: ["Our Drivers.", "Our Heroes.", "Every Mile."],
      image,
      videoUrl: "https://youtube.com/@arigo",
    },
  ],
};
