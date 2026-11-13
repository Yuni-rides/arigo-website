import type { BlogArticle } from "../../types";

export const whenAFosterPlacementChangesMidYear: BlogArticle = {
  slug: "when-a-foster-placement-changes-mid-year",
  title: "When a foster placement changes mid-year",
  category: "School Transportation",
  date: "Nov 14, 2026",
  author: "Arigo",
  metaTitle: "When a Foster Placement Changes Mid-Year | Keeping School Steady",
  metaDescription:
    "A move to a new foster home can mean a new school, new friends, and a new bus. Here is how to keep a child's school life steady while everything else shifts.",
  keywords: [
    "foster care school transportation",
    "school of origin foster care",
    "foster placement change school",
  ],
  banner: {
    src: "/images/when-a-foster-placement-changes-mid-year.png",
    alt: "A caregiver walking a young girl with a backpack to a waiting van outside her school",
  },
  intro:
    "A caseworker called on Tuesday. A seven-year-old needs a new home by Friday. The new home is across the county, 40 minutes from the school she has attended since September.",
  introParagraphs: [
    "You can see the problem in that one sentence. She has a teacher who knows how she likes to start her mornings. She has a friend she sits with at lunch. She might have an aide, a reading group, a routine that took months to build. And now, on top of a new bedroom and new adults, she's about to lose her school too.",
  ],
  sections: [
    {
      id: "why-school-is-the-one-thing-that-stays",
      heading: "Why school is often the one thing that stays",
      paragraphs: [
        "For many children in foster care, school is the most predictable part of the week. Home may change. Caseworkers have changed. The bell schedule doesn't. Staff who already know a child's triggers and strengths are hard to replace.",
        "Federal education law recognizes this. Under the Every Student Succeeds Act, children in foster care are generally entitled to stay in their school of origin when that is in their best interest, and the child welfare agency and school district are expected to work out how the child gets there. The details, including who pays, vary by state and district, so ask early.",
      ],
    },
    {
      id: "why-the-ride-is-where-it-falls-apart",
      heading: "Why the ride is where it falls apart",
      paragraphs: [
        "The law says the child can stay. It doesn't put a driver at the curb at 7:15 a.m. That part is logistics, and logistics is where plans quietly fail. The bus route doesn't reach the new address. The district's van is full. A foster parent works shifts and can't drive 80 miles a day.",
        "When that happens, the school-of-origin decision gets reversed by default. Nobody chooses it. The child just stops being able to get there.",
      ],
    },
    {
      id: "what-a-workable-ride-looks-like",
      heading: "What a workable ride looks like",
      lead: "For a child moving between homes, a ride has to be built differently than a normal route.",
      bullets: [
        {
          text: "It starts at the address where the child is sleeping that week, not the one on last month's file.",
        },
        {
          text: "It has a backup. If the driver is sick, the child still gets to school.",
        },
        {
          text: "The same driver whenever possible. Familiarity matters more to a child in transition than speed.",
        },
        {
          text: "Clear handoffs. Whoever is at the door, whether foster parent or respite caregiver, is confirmed before pickup.",
        },
      ],
    },
    {
      id: "what-to-ask-for",
      heading: "What to ask for",
      lead: "If you're a caseworker or foster parent, ask these on the first call:",
      ordered: true,
      bullets: [
        { text: "Can the child stay at their current school, and who has made that decision?" },
        { text: "Who arranges and pays for transportation: the district, the agency, or both?" },
        { text: "How early can the ride start? A delay of two weeks is two weeks of missed lessons." },
        { text: "Who do we call if the driver doesn't show?" },
      ],
      outro: ["Get the answers in writing. People change jobs. Emails don't."],
    },
    {
      id: "a-small-thing-that-helps",
      heading: "A small thing that helps more than you'd think",
      paragraphs: [
        "Tell the driver the child's first name and one thing that makes the morning easier. Maybe she likes the radio off. Maybe he needs to know the route before the van moves. That tiny briefing turns a stranger into someone the child can tolerate on a hard day.",
        "Arigo arranges school rides for children with special needs, including children in foster care. If a placement change is coming and you need the school ride sorted before it happens, get in touch and we'll go through it with you.",
      ],
      cta: { label: "Contact Arigo", href: "/contact-us" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can a child in foster care stay at their old school after a move?",
          answer:
            "Often, yes. Federal law generally lets a child stay in their school of origin when that's in their best interest. The decision is made case by case, and it usually involves the school district and the child welfare agency.",
        },
        {
          question: "Who pays for the ride?",
          answer:
            "It depends on your state and district. The agency and the school district are expected to agree on it, so ask both on your first call.",
        },
        {
          question: "What if the new home is very far from the school?",
          answer:
            "Distance is one factor in the best-interest decision. A long ride can still work with the right driver, a backup plan, and a ride length the child can handle.",
        },
      ],
    },
  ],
};
