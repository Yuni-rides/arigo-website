import type { BlogArticle } from "../../types";

export const nonEmergencyFacilityToFacilityTransfers: BlogArticle = {
  slug: "non-emergency-facility-to-facility-transfers",
  title: "Facility-to-Facility Transfers That Aren't Emergencies",
  category: "Healthcare Partners",
  date: "Oct 30, 2026",
  author: "Arigo",
  metaTitle: "Non-Emergency Patient Transfers Between Facilities",
  metaDescription:
    "How non-emergency patient transfer and interfacility transport work, from nursing home to hospital, plus which vehicle fits and what to have ready.",
  keywords: [
    "non-emergency patient transfer",
    "interfacility transport",
    "nursing home to hospital transport",
  ],
  banner: {
    src: "/images/non-emergency-facility-to-facility-transfers.png",
    alt: "An attendant moving a patient on a stretcher between a facility entrance and a transport vehicle",
  },
  intro:
    "Think of a scenario that it's Friday afternoon. A patient at a skilled nursing facility has a scheduled procedure at the hospital on Monday morning, and nobody in the family can drive. Transfers like this fill a discharge planner's week, and they often get a plan about an hour before they're needed. Here's how a non-emergency patient transfer works, which patients need which kind of vehicle, and what to have ready when you book.",
  sections: [
    {
      id: "what-is-a-non-emergency-transfer",
      heading: "What is a non-emergency patient transfer?",
      paragraphs: [
        "A scheduled move of a stable patient from one care setting to another, such as a nursing home to a hospital for a procedure, or a hospital to a rehab facility. It's planned, unlike an ambulance call.",
      ],
    },
    {
      id: "what-counts-as-interfacility-transport",
      heading: "What counts as an interfacility transport?",
      paragraphs: [
        "Common examples: a nursing home or assisted living resident going to the hospital for a procedure or appointment, a hospital patient moving to skilled nursing or rehab at discharge, and a patient moving from one care facility to another. Planned, stable, not an emergency. Interfacility transport covers all of these.",
      ],
    },
    {
      id: "matching-the-vehicle",
      heading: "Matching the vehicle to the patient",
      table: {
        headers: ["Level", "Patient", "Notes"],
        rows: [
          ["Ambulatory", "Walks, maybe with help", "Car or van"],
          ["Wheelchair", "Stays in the chair", "Accessible vehicle with lift or ramp"],
          ["Stretcher", "Can't sit upright", "Stretcher-capable vehicle"],
          ["Non-emergency ambulance", "Needs monitoring or equipment", "Medical crew on board"],
        ],
      },
      outro: [
        "This is a clinical decision. A medical transportation driver isn't clinical staff, so a patient who needs monitoring or equipment on the trip needs a medical ambulance service, not a standard ride. If you're unsure, ask the physician or nurse before you book.",
      ],
    },
    {
      id: "what-to-have-ready",
      heading: "What to have ready when you book",
      paragraphs: [
        "For nursing home to hospital transport, or any transfer, have these ready: pickup and drop-off locations with a contact at each end, the date and appointment time, how the patient moves and what equipment goes with them, payer and authorization details if required, and whether a staff or family member is riding along.",
        "Share what the transport team needs and no more, and follow your facility's privacy policy. The transfer form, orders, and medication list should travel with the patient in a labeled folder.",
      ],
    },
    {
      id: "where-transfers-go-wrong",
      heading: "Where do transfers go wrong",
      paragraphs: [
        "A late pickup. A wheelchair patient and a van with no lift. A receiving unit that didn't know anyone was coming. These are some of the most common instances.",
        "One call the day before fixes most of it. Confirm the time with the receiving unit, check the paperwork, and make sure the vehicle matches the patient.",
      ],
    },
    {
      id: "choosing-a-transportation-partner",
      heading: "Choosing a transportation partner",
      paragraphs: [
        "Ask about licensing in your state and about insurance. Ask how drivers are screened and trained, what happens when a pickup runs late, and who your contact is when it does. Ask how billing and authorization work.",
      ],
    },
    {
      id: "working-with-arigo",
      heading: "Working with Arigo",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. For stable patients, tell us what your facility needs, and we'll confirm what we can cover. If a patient needs clinical care en route, a medical ambulance service is the right call.",
      ],
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Is a non-emergency transfer the same as an ambulance ride?",
          answer:
            "No. Transfers are scheduled and involve stable patients. A medical ambulance has a clinical crew on board and is used when a patient needs monitoring.",
        },
        {
          question: "Who decides what level of transport a patient needs?",
          answer:
            "The sending facility's clinical team, usually the physician or nurse. Transportation staff can help, but the call is clinical.",
        },
        {
          question: "How far ahead should a facility book?",
          answer: "As early as you know the date. Lead times differ by provider, so ask.",
        },
        {
          question: "Who pays for a facility transfer?",
          answer:
            "It depends on the patient's coverage and the type of transfer. Some payers cover it, some facilities absorb the cost, and some are paid privately. Confirm before you book.",
        },
      ],
    },
    {
      id: "looking-for-a-transfer-partner",
      heading: "Looking for a transportation partner for patient transfers?",
      paragraphs: [
        "A good transfer is a quiet one: the patient arrives on time, the paperwork is there, and nobody on the receiving unit is surprised. That usually comes from a plan made a day early.",
        "Tell us what your facility needs.",
      ],
      cta: { label: "Partner With Arigo", href: "/contact-us" },
    },
  ],
};
