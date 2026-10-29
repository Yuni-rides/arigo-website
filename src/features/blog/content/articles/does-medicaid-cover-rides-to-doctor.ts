import type { BlogArticle } from "../../types";

export const doesMedicaidCoverRidesToDoctor: BlogArticle = {
  slug: "does-medicaid-cover-rides-to-doctor",
  title: "Does Medicaid Cover Rides to the Doctor?",
  category: "Patients & Families",
  date: "Oct 30, 2026",
  author: "Arigo",
  metaTitle: "Does Medicaid Cover Rides to the Doctor? | What to Know in CA & WA",
  metaDescription:
    "Medicaid may cover rides to medical appointments, but the rules vary by state and plan. Here is how NEMT works in California and Washington, and how to book your ride.",
  keywords: [
    "does Medicaid cover rides to the doctor",
    "Medi-Cal transportation",
    "Apple Health NEMT Washington",
  ],
  banner: {
    src: "/images/does-medicaid-cover-rides-to-doctor.png",
    alt: "A patient checking their insurance card before a medical appointment",
  },
  intro:
    "You wake up. Appointment at 2 p.m. Car's in the shop, or maybe you don't have one, and the bus doesn't go anywhere near that clinic. So you're sitting there wondering: Will Medicaid pay for this? Or am I shelling out forty bucks I don't have?",
  introParagraphs: [
    "Yes, but how you get that ride, who books it, and what kind of vehicle shows up depends entirely on where you live and which program of Medicaid you're enrolled in. Let me break down what I learned digging into this for California and Washington.",
  ],
  sections: [
    {
      id: "california-two-kinds-of-rides",
      heading: "California: Two Different Kinds of Rides",
      paragraphs: [
        "If you're on Medi-Cal, you've got two possible transportation benefits. Most people don't know they're separate, and that confusion costs people their appointments.",
        "Non-Medical Transportation (NMT) is the basic one. You can't get to the doctor, so they arrange a ride—could be a car, a van, whatever gets you there. Standard stuff.",
        "Non-Emergency Medical Transportation (NEMT) is when you actually need special equipment. Wheelchair van. Stretcher. Ambulance because sitting upright in a car isn't happening. Here's the catch: you need a doctor to write a prescription saying you need it.",
      ],
    },
    {
      id: "washington-county-brokers",
      heading: "Washington: County Brokers Run the Show",
      paragraphs: [
        "Washington does this differently. Apple Health uses county transportation brokers to handle NEMT. Every county has one. You don't call Medicaid directly—you call the broker assigned to your county.",
      ],
    },
    {
      id: "what-appointments-count",
      heading: "What Appointments Actually Count?",
      paragraphs: [
        "In California, Medi-Cal covers medical, dental, mental health, substance use treatment, plus picking up prescriptions and medical supplies. In Washington, the appointment itself has to be covered by your Apple Health program. Going out of your area? That needs broker approval. Want to add a stop at the pharmacy on the way home? Ask first, because “surprise” stops aren't really a thing.",
      ],
    },
    {
      id: "how-to-book",
      heading: "How to Actually Book the Thing",
      bullets: [
        {
          label: "In California with managed care:",
          text: "Call your health plan. The number is on your card. Member services. Tell them you need a ride. They'll walk you through it.",
        },
        {
          label: "In California with fee-for-service:",
          text: "You go through DHCS directly. Their transportation page has the request process. And if you need NEMT? Talk to your doctor about that prescription.",
        },
        {
          label: "In Washington:",
          text: "Find your county broker on the HCA website. Call them. Not Medicaid. The broker.",
        },
      ],
      outro: [
        "Also tell them straight up: Do you use a wheelchair? Walker? Can you get into a standard car seat by yourself, or do you need a lift? And ask where the driver's help starts. Door-to-door means different things to different people.",
      ],
    },
    {
      id: "timing",
      heading: "Timing: The Earlier, the Better",
      paragraphs: [
        "California DHCS says ask five business days ahead. Washington HCA says 7 to 14 days. Less than two business days? Good luck. They might squeeze you in; they might not.",
        "If it's truly last-minute—like you just got a call that a specialist can see you tomorrow—explain the situation. Sometimes there's a cancellation list. Sometimes you're just out of luck. Doesn't hurt to ask.",
      ],
    },
    {
      id: "do-i-pay-anything",
      heading: "Do I Pay Anything?",
      paragraphs: [
        "Ask. Don't assume it's free. Some California NMT services have a monthly share of cost depending on your income. And if you book your own ride thinking Medicaid will pay you back later? Probably not happening. Get approval first.",
      ],
    },
    {
      id: "when-they-dont-show-up",
      heading: "When They Don't Show Up",
      paragraphs: [
        "It happens. The driver's late. Or the wrong vehicle shows up. Or they deny the ride entirely.",
        "If they're late, call the booking number first. Then call your doctor's office so they know. Keep that confirmation number handy.",
        "If they send a car and you needed a wheelchair van, don't just accept it. Demand the right vehicle. You told them what you needed. They need to accommodate it.",
        "Denied? Ask why. In writing. Ask how to appeal and what the deadline is. And if this keeps happening, ask how to file a complaint. Document everything. Dates, times, who you spoke to. It matters.",
      ],
    },
    {
      id: "can-someone-come-with-me",
      heading: "Can Someone Come with Me?",
      paragraphs: [
        "Usually, yes—but ask when you book. Medi-Cal typically allows one assistant or caregiver on NMT. But rules vary by program and by ride type. Don't wait until the driver is at your door to find out your daughter can't ride along.",
      ],
    },
    {
      id: "what-about-arigo",
      heading: "What About Arigo?",
      paragraphs: [
        "We're getting ready to offer rides in Washington and California. If you want to see whether we can help, give us a call.",
        "Contact Arigo and we'll help you figure out what questions to ask your plan.",
      ],
      cta: { label: "Contact Arigo", href: "/contact-us" },
    },
  ],
};
