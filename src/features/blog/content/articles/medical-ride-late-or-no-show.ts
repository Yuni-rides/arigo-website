import type { BlogArticle } from "../../types";

export const medicalRideLateOrNoShow: BlogArticle = {
  slug: "medical-ride-late-or-no-show",
  title: "What to do if your medical ride is late or never shows up",
  category: "Safety & Trust",
  date: "Oct 19, 2026",
  author: "Arigo",
  metaTitle: "What to Do If Your Medical Ride Is Late or Never Shows",
  metaDescription:
    "Your medical ride is late or never came. Here's what to do in the first 15 minutes, how to protect your appointment, and how to complain.",
  keywords: [
    "late medical transportation",
    "NEMT no-show",
    "missed ride to dialysis",
    "medical transportation complaint",
  ],
  banner: {
    src: "/images/medical-ride-late-or-no-show.png",
    alt: "A patient waiting outside with a phone, watching for a ride that has not arrived",
  },
  intro:
    "You're ready for your appointment, waiting for your ride. The pickup window ended ten minutes ago, and yet nobody has called to inform you about the delay.",
  introParagraphs: [
    "This situation can be frustrating for anyone, but for someone with dialysis at 8:00, or a chemo slot that took three weeks to get, it can be worse.",
  ],
  sections: [
    {
      id: "the-first-15-minutes",
      heading: "The first 15 minutes: make the call",
      paragraphs: [
        "Don't wait politely. Most pickup windows run something like 15 to 30 minutes either side of your booked time, so check what yours is. When it's gone, call.",
      ],
      bullets: [
        {
          label: "Booked directly with a transportation company:",
          text: "call their dispatch number. It's usually on your confirmation text or card.",
        },
        {
          label: "Booked through your Medicaid plan or its transportation broker:",
          text: "call the number on your member card or the broker's ride line. Don't start with the driver's company. The broker is the one who can reassign the trip.",
        },
      ],
    },
    {
      id: "protect-the-appointment",
      heading: "Protect the appointment",
      paragraphs: [
        "While you're on hold, or right after, call the clinic. Tell them the ride is late. They would much rather hear it now than see an empty chair at 8:15. Many clinics can move you later in the day, squeeze you in at the end, or tell you how much lateness they can absorb.",
        "Dialysis is where this matters most. If your ride falls through, call the clinic the same day and ask what they can do. Don't decide to wait until Thursday.",
      ],
    },
    {
      id: "keep-a-backup-in-your-phone",
      heading: "Keep a backup in your phone",
      paragraphs: [
        "The best fix is dull. Save the dispatch number, the clinic's number, and one person who could drive you or pay for a taxi in a pinch.",
        "If the only vehicle you can use is a wheelchair van, a regular rideshare won't save you. In that case, find a second wheelchair transportation company and keep their number too, before you need it.",
      ],
    },
    {
      id: "what-a-decent-company-says-back",
      heading: "What a decent company says back",
      paragraphs: [
        "An apology is the minimum. What you should also hear is an honest arrival time, an offer to send another vehicle or rebook, and a promise to tell the clinic if they can.",
      ],
    },
    {
      id: "if-it-keeps-happening",
      heading: "If it keeps happening, complain properly",
      lead: "One late ride, tell the company and ask what went wrong. The pattern is different. If the problem continues, escalate it through the appropriate channels:",
      ordered: true,
      bullets: [
        { text: "Ask your NEMT company for a manager and give dates and times." },
        {
          text: "Ask your broker or health plan, if one arranges your ride. They have a complaint process and missed trips matter to them.",
        },
        {
          text: "Ask your state Medicaid agency if you're a Medicaid member and nothing changes. Your plan's member handbook says how.",
        },
      ],
    },
    {
      id: "cut-the-odds-next-time",
      heading: "Cut the odds next time",
      bullets: [
        { text: "Confirm the ride the day before, by call or text." },
        { text: "Be ready at the door when the window opens." },
        {
          text: "Check that the company has the right address, including the gate code or which entrance to use.",
        },
        {
          text: "Ask whether recurring trips can be set as standing rides, so you aren't rebooking every week.",
        },
      ],
      outro: [
        "Every provider runs late sometimes. Traffic is traffic. What matters is whether someone picks up the phone and tells you the truth. A late ride and a company that goes silent are two different problems, and the second one is the reason to switch.",
      ],
    },
    {
      id: "ride-with-arigo",
      heading: "Ride with Arigo",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. If a late ride has you looking for another provider, request a trip and ask us anything on this list.",
      ],
      cta: { label: "Request a ride", href: "/#request" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently asked questions",
      faqs: [
        {
          question: "How long should I wait before calling about a late ride?",
          answer:
            "Check your pickup window first. Many run 15 to 30 minutes either side of the booked time. Call the moment the window ends. If your appointment is tight, call earlier.",
        },
        {
          question: "What if the driver never shows up at all?",
          answer:
            "Call dispatch, or the broker if your plan arranged the ride, and ask for a replacement. Then call the clinic. If no ride can be found in time, ask them about moving your appointment. Don't just sit and wait.",
        },
        {
          question: "Will I be charged for a ride that never arrived?",
          answer:
            "You shouldn't be. Some companies do charge a fee when the rider isn't ready or cancels late, so read the cancellation policy. If you were charged for a ride you never got, dispute it in writing.",
        },
        {
          question: "Can I complain to Medicaid about a missed ride?",
          answer:
            "Yes, if Medicaid arranged it. Start with the transportation broker or your health plan. If nothing changes, take it to your state Medicaid agency. Your member handbook lists the numbers.",
        },
      ],
    },
  ],
};
