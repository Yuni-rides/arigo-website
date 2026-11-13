import type { BlogArticle } from "../../types";

export const whatADriverShouldKnowBeforePickingUpAChildWithSpecialNeeds: BlogArticle = {
  slug: "what-a-driver-should-know-before-picking-up-a-child-with-special-needs",
  title: "What a driver should know before picking up a child with special needs",
  category: "School Transportation",
  date: "Nov 14, 2026",
  author: "Arigo",
  metaTitle: "What a Driver Should Know Before Picking Up a Child With Special Needs",
  metaDescription:
    "A good driver for a child with special needs isn't just careful. They know the routine, the cues and when to say nothing. Here is what that preparation looks like.",
  keywords: [
    "special needs school transportation",
    "special needs driver training",
    "school transportation for children with autism",
  ],
  banner: {
    src: "/images/what-a-driver-should-know-before-picking-up-a-child-with-special-needs.png",
    alt: "A driver kneeling to greet a boy wearing ear defenders and holding a picture card beside the van door, with his mother alongside",
  },
  intro: "Most drivers can drive. That's not the question.",
  introParagraphs: [
    "The question is whether the person at the wheel knows what to do when a nine-year-old who uses a communication device refuses to get in the van, or when a boy with sensory sensitivities covers his ears because the heater fan is loud.",
  ],
  sections: [
    {
      id: "start-with-the-child-not-the-vehicle",
      heading: "Start with the child, not the vehicle",
      lead: "Before a first pickup, a driver should know a few things about the child. Not a medical file. Just what makes the ride go well.",
      bullets: [
        { text: "How does the child communicate? Words, a device, gestures, a picture card?" },
        { text: "What does a rough morning look like, and what helps?" },
        { text: "Are there sensory triggers: loud music, strong smells, bright sun through a window?" },
        { text: "Does the child need a harness, a booster or a specific seat?" },
        { text: "Who is allowed to hand the child over, and who isn't?" },
      ],
      outro: [
        "For a child in foster care, add one more: what should the driver not ask about? A friendly “How was your weekend at home?” can land badly. Drivers need to know which topics are off the table.",
      ],
    },
    {
      id: "routine-is-a-form-of-safety",
      heading: "Routine is a form of safety",
      paragraphs: [
        "Many children with autism, ADHD or anxiety rely on predictability. The same driver. The same greeting. The same route. If the route must change for road work, a good driver says so before the van turns, not after.",
        "Small habits do a lot. Saying “Hi, Marcus, it's me, we're going to school now” in the same voice every day. Keeping the radio low or off. Leaving the child's usual seat open.",
      ],
    },
    {
      id: "what-good-training-covers",
      heading: "What good training covers",
      lead: "Look for a provider that teaches drivers more than seat-belt rules. Useful training includes:",
      bullets: [
        { text: "Recognizing signs of distress or a meltdown and responding calmly" },
        { text: "Basic de-escalation, including when to pull over and wait" },
        { text: "How to secure a child safely, including with specialized restraints or equipment" },
        { text: "First aid and what to do in a medical emergency" },
        {
          text: "Boundaries and safeguarding: never being alone with a child outside the agreed process, and how to report concerns",
        },
      ],
      outro: [
        "Ask the provider what their drivers actually complete, and how often it's refreshed. A vague answer is an answer.",
      ],
    },
    {
      id: "communication-with-the-adults-around-the-child",
      heading: "Communication with the adults around the child",
      paragraphs: [
        "A driver sees the child at the start and end of the school day, which are the two hardest transitions. What happens in the van is useful information.",
        "A good provider has a simple way for drivers to pass it on. “Rough pickup today, he was upset about something at home.” “She was singing the whole way, great day.” Teachers and foster parents can use that.",
        "Confidentiality matters here. Drivers should share what the child's team needs, and nothing else.",
      ],
    },
    {
      id: "questions-to-ask-any-provider",
      heading: "Questions to ask any provider",
      ordered: true,
      bullets: [
        { text: "Will my child have a regular driver?" },
        { text: "What happens if that driver is unavailable?" },
        { text: "How are drivers screened and trained?" },
        { text: "How do you handle a child who won't get in the vehicle?" },
        { text: "How will I know the child arrived safely?" },
      ],
      outro: [
        "A provider who has thought about this will answer quickly. One who hasn't will change the subject.",
        "If you're looking for school transportation for a child with special needs, Arigo can walk you through how rides are set up and what we'll need to know about your child beforehand.",
      ],
      cta: { label: "Contact Arigo", href: "/contact-us" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can my child have the same driver every day?",
          answer:
            "Ask the provider. A regular driver is the better setup for most children with special needs, and a good provider will tell you plainly what they can and can't promise.",
        },
        {
          question: "What if my child refuses to get in the vehicle?",
          answer:
            "A trained driver stays calm, gives the child time, and doesn't force it. They then tell you what happened so the team can adjust the routine.",
        },
        {
          question: "Should I tell the driver about my child's diagnosis?",
          answer:
            "Share what affects the ride: how your child communicates, what upsets them, and what helps. You don't have to share a full history.",
        },
      ],
    },
  ],
};
