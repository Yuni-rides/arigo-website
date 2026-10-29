import type { BlogArticle } from "../../types";

export const homeOxygenDeliveryWhatFamiliesShouldKnow: BlogArticle = {
  slug: "home-oxygen-delivery-what-families-should-know",
  title: "Home Oxygen Delivery: What Families Should Know",
  category: "Medication Delivery",
  date: "Oct 30, 2026",
  author: "Arigo",
  metaTitle: "Home Oxygen Delivery: What Families Should Know",
  metaDescription:
    "Home oxygen delivery explained: how an oxygen delivery service works, equipment types, portable oxygen refill, who pays, and what to ask before delivery.",
  keywords: ["home oxygen delivery", "oxygen delivery service", "portable oxygen refill"],
  banner: {
    src: "/images/home-oxygen-delivery-what-families-should-know.png",
    alt: "A family member checking a home oxygen concentrator beside an older patient",
  },
  intro:
    "Nobody plans for the oxygen conversation. A parent comes home from the hospital with a new prescription and a stack of instructions, and by dinnertime you're asking questions you didn't know existed. Who brings the equipment? What happens when the tank runs low on a Sunday? And what do you do if the power cuts out at 2 a.m.? Here's what to sort out before the first delivery.",
  sections: [
    {
      id: "who-provides-home-oxygen",
      heading: "Who provides home oxygen?",
      paragraphs: [
        "Usually, a licensed home medical equipment supplier, working from a doctor's prescription. The supplier delivers and sets up the equipment, shows the family how to use it, and handles refills and servicing. Which one you can use often depends on your insurance.",
      ],
    },
    {
      id: "how-an-oxygen-delivery-service-works",
      heading: "How an oxygen delivery service works",
      paragraphs: [
        "The doctor writes the order: how much oxygen, and for how many hours a day. Often a case manager or discharge planner contacts a supplier before the patient leaves the hospital. The supplier brings the equipment, sets it up, and walks the family through it.",
        "After that, the supplier looks after servicing and refills. Put their number and the after-hours line where everyone in the house can see it.",
      ],
    },
    {
      id: "choosing-an-oxygen-supply",
      heading: "Choosing an oxygen supply for home use",
      lead: "What type is best for you depends on how much oxygen is prescribed and how often the patient leaves the house.",
      table: {
        headers: ["Type", "Needs power", "Needs refills", "Usually used for"],
        rows: [
          ["Stationary concentrator", "Yes", "No", "The main unit at home"],
          ["Portable concentrator", "Battery or plug", "No", "Trips out"],
          ["Compressed gas cylinder", "No", "Yes", "Backup and short outings"],
          ["Liquid oxygen", "No", "Yes", "Mobile use, where offered"],
        ],
      },
      outro: [
        "Not every supplier carries every type. Ask what's available and ask the doctor which one suits the prescription.",
      ],
    },
    {
      id: "portable-oxygen-refill",
      heading: "Portable oxygen refill",
      paragraphs: [
        "If your setup uses cylinders or liquid oxygen, refills are the part that catches families out. Ask how often deliveries come, how much notice a refill needs, and what happens if you run low between visits. A portable concentrator avoids refills altogether, but it still needs charged batteries, and those wear out.",
      ],
    },
    {
      id: "who-pays",
      heading: "Who pays",
      paragraphs: [
        "Medicare Part B can cover home oxygen equipment when the need is documented, and the supplier is enrolled. Medicaid and private plans vary, sometimes a lot. Before you agree to a supplier, ask if they're in your plan's network and what you'll owe each month.",
      ],
    },
    {
      id: "safety-at-home",
      heading: "Safety at home",
      paragraphs: [
        "Oxygen makes fire burn faster, so the rules are strict and worth repeating to visitors. No smoking, no candles, no open flames in the room. Keep equipment away from heaters and gas stoves. Stand cylinders upright and secure them so they can't fall. Keep tubing out of walkways, since tripping on it is a common hazard.",
        "Ask your utility whether it keeps a medical priority list for outages. Some do. And tell the local fire department about the oxygen before there's an emergency, not during one.",
      ],
    },
    {
      id: "where-arigo-fits",
      heading: "Where Arigo fits",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. We provide rides. We don't supply oxygen. If a rider brings a portable unit to an appointment, let us know when you request the trip, and we'll say whether we can accommodate it.",
      ],
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Does insurance cover home oxygen delivery?",
          answer:
            "Often, with conditions. Medicare Part B can cover it when the need is documented. Medicaid and private plans vary, so ask your plan and the supplier.",
        },
        {
          question: "Can I get an urgent portable oxygen refill?",
          answer:
            "It depends on the supplier and your prescription. Ask about urgent delivery before you need it.",
        },
        {
          question: "Is it safe to travel in a car with oxygen?",
          answer:
            "It can be, if the equipment is secured and the car is ventilated. Check your setup with your doctor and supplier before the first trip.",
        },
        {
          question: "What if the power goes out?",
          answer:
            "Switch to your backup cylinder and call your supplier. If someone is struggling to breathe, call 911.",
        },
      ],
    },
    {
      id: "need-a-ride-to-an-appointment",
      heading: "Need a ride to an appointment?",
      paragraphs: [
        "Sort out the supplier and the backup plan before discharge day, not after. And if you need a ride to a doctor's visit with a portable unit, say so when you book.",
        "Let us know what you need, and we'll confirm what we can offer.",
      ],
      cta: { label: "Request a Ride", href: "/#request" },
    },
  ],
};
