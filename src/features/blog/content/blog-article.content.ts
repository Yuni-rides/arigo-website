import type { BlogArticle } from "../types";

export const latestArticlesTitle = "Latest Articles";

/**
 * Placeholder article. Swap `banner` for the real artwork and move this to a CMS
 * when posts become real content.
 */
export const blogArticle: BlogArticle = {
  slug: "how-to-plan-an-nemt-ride",
  title: "How to Plan an NEMT Ride: What to Have Ready",
  category: "Patients & Families",
  date: "Sep 16, 2026",
  author: "Arigo",
  banner: {
    src: "/images/homeBanner2.png",
    alt: "A caregiver and an older woman looking at a phone together at a kitchen table",
  },
  intro:
    "Getting to a medical appointment should be the easy part. But for many patients and families, finding a safe, comfortable ride can feel like one more thing to worry about. The good news: a little preparation makes it simple. In this guide, we walk you through what to have ready before you book a non-emergency medical transportation (NEMT) ride with Arigo.",
  sections: [
    {
      id: "why-planning-ahead-helps",
      heading: "Why Planning Ahead Helps",
      paragraphs: [
        "According to the U.S. Bureau of Labour Statistics, 38.5 percent of employed Americans age 65 and older worked part time in 2024 - a significantly higher rate than younger workers. Among all adults 65 and older, about one in five participated in the labour force by working or looking for work. This isn't a new trend - it's accelerating.",
      ],
    },
    {
      id: "things-to-have-ready",
      heading: "The 3 Things to Have Ready",
      lead: "Before you message or call Arigo, keep these three details handy:",
      bullets: [
        {
          label: "Pickup location.",
          text: "The full address, plus any helpful notes (apartment number, gate code, which door to use).",
        },
        {
          label: "Appointment time.",
          text: "The date and time of the appointment, and the clinic or hospital address. If you need a return trip, let us know.",
        },
        {
          label: "Mobility needs.",
          text: "Whether the patient can walk with or without support, uses a wheelchair, or needs to travel lying down.",
        },
      ],
    },
    {
      id: "choosing-the-right-ride-type",
      heading: "Choosing the Right Ride Type",
      bullets: [
        { label: "Ambulatory.", text: "For patients who can walk, with or without a cane or walker." },
        {
          label: "Wheelchair.",
          text: "For patients who use a wheelchair and need a ramp or lift and secure tie-downs.",
        },
        { label: "Stretcher.", text: "For patients who must travel lying down." },
      ],
    },
    {
      id: "tips-for-a-smooth-pickup",
      heading: "Tips for a Smooth Pickup",
      bullets: [
        {
          label: "Be ready early.",
          text: "Aim to be at the pickup point ten minutes before the booked time.",
        },
        { label: "Keep your phone close.", text: "Your driver calls or messages when they are nearby." },
        {
          label: "Bring what you need.",
          text: "Paperwork, medication, and anything required at the appointment.",
        },
      ],
    },
    {
      id: "ready-to-book",
      heading: "Ready to Book?",
      paragraphs: [
        "Share the pickup, the appointment and the mobility needs, and our team confirms the ride - usually within minutes. You can request a ride online, in the Arigo app, or by calling our dispatch team.",
      ],
    },
  ],
};
