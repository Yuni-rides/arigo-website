import type { BlogArticle } from "../../types";

export const ridesToChemotherapyAndRadiation: BlogArticle = {
  slug: "rides-to-chemotherapy-and-radiation",
  title: "Rides to chemotherapy and radiation",
  category: "Patients & Families",
  date: "Oct 23, 2026",
  author: "Arigo",
  metaTitle: "Rides to Chemotherapy and Radiation: Options That Work",
  metaDescription:
    "Finding a ride to chemotherapy or radiation? Here are your options, what to ask, and how to plan for treatment days when you're worn out.",
  keywords: [
    "transportation to chemotherapy",
    "cancer treatment transportation",
    "rides to radiation treatment",
  ],
  banner: {
    src: "/images/rides-to-chemotherapy-and-radiation.png",
    alt: "A patient arriving for a treatment appointment with a driver helping at the vehicle door",
  },
  intro:
    "Nobody thinks about the ride when the treatment schedule lands in their hands. There's the diagnosis to take in, the side effects to read about, the insurance calls to make. The ride comes up later, usually around week two, when somebody says “wait, who's driving you Thursday?”",
  introParagraphs: [
    "And there are a lot of Thursdays. Radiation can mean a short visit every weekday for weeks. Chemo means a chair for hours and a rough evening after.",
  ],
  sections: [
    {
      id: "some-days-you-cant-drive",
      heading: "Some days you can't drive. Some days you shouldn't.",
      paragraphs: [
        "Plenty of people feel okay after chemo. Others get hit with nausea, exhaustion and a brain fog that makes a car feel like a bad idea. Some are told flat out by their team not to drive at all. Radiation tends to creep up on you. Week one, you're fine. Week four, the drive wipes you out. And if your immune system is low, your oncologist may want you off crowded buses.",
        "So the ride isn't only a money question. You need a plan that still works on your worst day.",
      ],
    },
    {
      id: "start-with-the-cancer-center",
      heading: "Start with the cancer center",
      paragraphs: [
        "Call them first. Most have a social worker or patient navigator, and they've heard “I can't get to treatment” plenty of times. They'll know if the hospital runs a shuttle, whether a local nonprofit helps with rides or gas money, and which options people at your clinic actually use.",
      ],
    },
    {
      id: "if-you-have-medicaid",
      heading: "If you have Medicaid",
      paragraphs: [
        "Rides to medical care are part of the deal, cancer treatment included. Your state runs a transportation program for it. Ring the member services number on your card, ask for non-emergency medical transportation, and ask if you can book every treatment in one go instead of calling each week.",
      ],
    },
    {
      id: "friends-and-family",
      heading: "Friends and family",
      paragraphs: [
        "Say yes when people offer. Just spend them wisely. The first infusion, the scan, the appointment where you get your results: those are days you'll want someone next to you. For the routine ones, a standing ride is easier on everybody.",
      ],
    },
    {
      id: "hiring-a-private-ride",
      heading: "Hiring a private ride",
      lead: "You get a driver who learns your routine and a vehicle where you can lean back and close your eyes. Before you commit, ask:",
      bullets: [
        { text: "Can the whole treatment schedule be booked at once?" },
        { text: "Will the driver wait for a short appointment, or does the ride home count as a new pickup?" },
        { text: "Can someone ride with you?" },
        { text: "What happens when your infusion runs long?" },
      ],
      outro: [
        "That last one matters more than it looks. Radiation is predictable. Chemo isn't. One late lab result pushes everything back an hour, and your driver may have another pickup at noon. You want a company that shrugs and adjusts, not one that makes you feel guilty about it.",
      ],
    },
    {
      id: "map-out-the-whole-calendar",
      heading: "Map out the whole calendar",
      paragraphs: [
        "Get the full schedule from the center and put every date on one page. Then book all of it, or set up a standing ride. When your oncologist moves something (they will), you'll know exactly who to call. And if you've got chemo and a scan on the same day, ask whether the two can sit back to back. One trip beats two.",
      ],
    },
    {
      id: "a-few-small-things",
      heading: "A few small things",
      paragraphs: [
        "Pack a blanket. Infusion rooms and vans both run cold. Bring water and a small snack, and a bag in case your stomach turns. Wear clothes you can get out of easily, especially if you have a port. And if something sudden and severe happens in the car, like trouble breathing or chest pain, call 911 first and sort out the ride later.",
      ],
    },
    {
      id: "when-the-ride-falls-through",
      heading: "When the ride falls through",
      paragraphs: [
        "Tell your care team the moment you know. Don't stay home feeling bad about it. They'd much rather shuffle your slot than lose it, and they can often rebook, point you to another option, or connect you with a program that helps.",
      ],
    },
    {
      id: "rides-to-treatment-with-arigo",
      heading: "Rides to treatment with Arigo",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. Send us your treatment schedule when you request a trip, and we'll confirm what we can do in your state.",
      ],
      cta: { label: "Request a ride", href: "/#request" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently asked questions",
      faqs: [
        {
          question: "Can I drive myself home after chemo?",
          answer:
            "Maybe. Some people can, and some are told not to. Ask your care team before your first session, and line up another ride for that day regardless.",
        },
        {
          question: "Does Medicaid cover rides to cancer treatment?",
          answer:
            "Generally, yes, for covered care. Call the member services number on your card and ask for non-emergency medical transportation. How much notice you need depends on your state.",
        },
        {
          question: "Can a family member ride with me?",
          answer:
            "Often. Policies vary, so ask when you book, especially if the person will be helping you get around.",
        },
        {
          question: "What if I feel sick during the ride?",
          answer:
            "Tell the driver straight away. For nausea, a bag and a cracked window go a long way. For sudden severe symptoms like trouble breathing or chest pain, call 911.",
        },
      ],
    },
  ],
};
