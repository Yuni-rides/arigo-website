import { footerContact } from "@/config/footer";

import type { LegalContent } from "../types";

/**
 * Placeholder policy copy written for the Arigo site, covering both services:
 * non-emergency medical transportation and medication delivery. It is not legal
 * advice and should be reviewed by counsel before launch.
 */
export const privacyContent: LegalContent = {
  title: "Privacy Policy",
  description: "How Arigo collects, uses, and protects your information.",
  tocTitle: "On this Page",
  banner: {
    src: "/images/policyBanner.png",
    alt: "An Arigo attendant helping an older passenger out of the vehicle",
  },
  sections: [
    {
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "Arigo values your privacy. We collect and use the information you share with us to arrange and operate our two services: non-emergency medical transportation (NEMT) and the delivery of medication and medical supplies.",
        "This Privacy Policy explains what information we collect for rides and for deliveries, how we use it, when we share it, and the choices you have. It applies to our website, our mobile app, our customer support team, and all related services.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information we collect",
      paragraphs: ["We collect information in three ways: you give it to us, it is created when a ride or delivery is carried out, and it comes from the pharmacies, clinics, and facilities that arrange our services on your behalf."],
      bullets: [
        {
          label: "Information you give us for a ride.",
          text: "Rider name, phone number, email address, pickup and drop-off addresses, appointment time, mobility needs such as ambulatory, wheelchair or stretcher, and any special care notes you add to the booking.",
        },
        {
          label: "Information you give us for a delivery.",
          text: "Recipient name, delivery address, contact number, pharmacy or provider name, order or prescription reference, and delivery instructions such as where to leave an item or who may receive it.",
        },
        {
          label: "Information created by a trip or delivery.",
          text: "Ride history, pickup and arrival times, route and vehicle details, driver notes, delivery attempts, handover time, the name of the person who received an item, signatures, proof-of-delivery photos, and recordings from in-vehicle safety cameras where they are used.",
        },
        {
          label: "Information from partners.",
          text: "When a hospital, clinic, care facility, pharmacy, case manager, or insurer books a ride or sends a delivery, they share the details and the rider or recipient information we need to complete it.",
        },
        {
          label: "Technical information.",
          text: "Device type, browser, IP address, and how you move through our website or app, collected through cookies and similar technologies.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "How we use information",
      bullets: [
        { label: "To provide rides.", text: "Scheduling trips, assigning drivers and the right vehicle, confirming details, and getting riders to appointments and home again." },
        { label: "To provide deliveries.", text: "Routing couriers, confirming the recipient, completing handover, and recording proof that an item was delivered." },
        { label: "To communicate.", text: "Sending booking confirmations, pickup and delivery updates, failed-attempt notices, and replies from our support team." },
        { label: "For safety and accountability.", text: "Verifying drivers, investigating incidents, complaints, and missing or disputed deliveries, and protecting riders, recipients, drivers, and the public." },
        { label: "For billing.", text: "Invoicing riders, recipients, pharmacies, facilities, and insurers, and keeping the records those payers require." },
        { label: "To improve our services.", text: "Understanding demand, routing, wait times, and delivery success rates so we can run both services better." },
        { label: "To meet legal obligations.", text: "Complying with transportation, healthcare, pharmacy, insurance, and tax requirements." },
      ],
    },
    {
      id: "how-we-share-information",
      heading: "How we share information",
      paragraphs: ["We do not sell your personal information. We share it only where it is needed to complete a ride or a delivery, or where the law requires it."],
      bullets: [
        { label: "With drivers and couriers.", text: "For a ride: rider name, pickup and drop-off locations, appointment time, and the assistance needed. For a delivery: recipient name, address, contact number, delivery instructions, and any identity or signature requirement. Drivers do not receive clinical details they do not need." },
        { label: "With the party arranging the service.", text: "The hospital, clinic, care facility, pharmacy, case manager, insurer, or family member who booked the ride or sent the delivery." },
        { label: "With service providers.", text: "Vendors who host our systems, process payments, send messages, or provide mapping and support tools, under contracts that limit how they may use the data." },
        { label: "For legal and safety reasons.", text: "When required by law, a court order, or a government request, or to investigate an incident or protect someone's safety." },
        { label: "In a business transfer.", text: "If Arigo is involved in a merger, acquisition, or sale of assets, information may transfer as part of that transaction." },
      ],
    },
    {
      id: "rider-and-prescription-information",
      heading: "Rider, recipient and prescription information",
      paragraphs: [
        "Both of our services sometimes involve information about a person's health. For a ride, that can be the type of appointment, mobility needs, oxygen use, or whether an attendant travels along. For a delivery, it can be the pharmacy, the order reference, and the fact that a medication is being delivered to a particular address.",
        "Arigo does not dispense medication and does not provide clinical advice. We transport sealed items prepared by a pharmacy or provider, and we do not open or inspect their contents.",
        "We treat this information as confidential. We use it only to plan and complete the ride or delivery safely, we share it only with the people who need it for that job, and we limit access inside Arigo to staff whose role requires it.",
        "When we work on behalf of a healthcare provider, pharmacy, health plan, or facility, we handle that information according to our agreement with them and the applicable healthcare privacy rules.",
      ],
    },
    {
      id: "privacy-choices",
      heading: "Your privacy choices",
      bullets: [
        { label: "Access and correction.", text: "You can ask what information we hold about you and ask us to correct anything that is wrong." },
        { label: "Deletion.", text: "You can ask us to delete your information, subject to the ride, delivery, and billing records we are required to keep." },
        { label: "Messages.", text: "You can opt out of marketing emails at any time. Ride confirmations, pickup updates, and delivery notifications are part of the service and continue while you have a booking or an order in progress." },
        { label: "Delivery instructions.", text: "You can change where an item may be left, or require a signature, by telling us or the pharmacy before the courier sets out." },
        { label: "Location and camera permissions.", text: "You control these in your device settings, though turning them off may limit parts of the app." },
      ],
      paragraphs: [`To make a request, contact us at ${footerContact.email.label}. We may need to verify your identity before we act on it.`],
    },
    {
      id: "location-and-device-data",
      heading: "Location, camera and device data",
      paragraphs: [
        "Our driver app collects vehicle location during a shift so we can dispatch rides and deliveries, give accurate arrival times, and review a route if there is a question about a job.",
        "The rider app collects location only when you use it to set a pickup point, set a delivery address, or follow a ride or delivery in progress.",
        "Couriers may take a proof-of-delivery photo at the door. These photos show the item and where it was left, are linked to the order, and are used only to confirm delivery or resolve a dispute.",
        "Some vehicles carry safety cameras. Where they are used, recordings are kept for a limited period and are reviewed only after an incident, a complaint, or a lawful request.",
      ],
    },
    {
      id: "cookies-and-tracking",
      heading: "Cookies and tracking",
      paragraphs: [
        "Our website uses cookies to keep the site working, remember your preferences, and understand which pages people find useful.",
        "You can block or delete cookies in your browser settings. Essential cookies cannot be turned off without affecting how the site works.",
      ],
    },
    {
      id: "how-long-we-keep-data",
      heading: "How long we keep data",
      paragraphs: [
        "We keep information for as long as we need it for the purpose it was collected, and then for the period that transportation, healthcare, pharmacy, insurance, and tax rules require.",
        "Trip records, delivery records, and billing records are generally kept longer than marketing or website data, because payers and pharmacy partners rely on them. When a retention period ends, we delete the information or remove the details that identify you.",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "Children's privacy",
      paragraphs: [
        "Arigo transports minors, and delivers to households with children, when a parent, guardian, school, or care facility arranges it. We collect only what is needed to carry out that ride or delivery safely.",
        "We do not knowingly collect information directly from children through our website or app. If you believe a child has given us information without a parent or guardian, contact us and we will remove it.",
      ],
    },
    {
      id: "security",
      heading: "Security",
      paragraphs: [
        "We protect information with encryption in transit, access controls that limit who inside Arigo can see what, background checks for staff, drivers, and couriers, and regular reviews of our systems.",
        "No system is perfectly secure. If a breach affects your information, we will notify you and the relevant authorities as the law requires.",
      ],
    },
    {
      id: "contact-us",
      heading: "Contact us",
      paragraphs: [
        `If you have a question about this policy or about how we handle your information, email us at ${footerContact.email.label} or call ${footerContact.phone.label}.`,
        "If we update this policy, we will post the new version on this page. Significant changes will be communicated directly where we are able to.",
      ],
    },
  ],
  cta: {
    title: "Question about your privacy?",
    description: "Contact our privacy team and we will reply in 1 business day.",
    label: "Contact us",
    href: "/contact-us",
  },
};
