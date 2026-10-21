import { footerContact } from "@/config/footer";

import type { LegalContent } from "../types";

/**
 * Placeholder terms written for the Arigo site, covering both services:
 * non-emergency medical transportation and medication delivery. They are not
 * legal advice and should be reviewed by counsel before launch.
 */
export const termsContent: LegalContent = {
  title: "Terms of Service",
  description: "The terms that apply when you book a ride or a delivery with Arigo.",
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
        "These Terms of Service govern your use of Arigo's website, mobile app, and services: non-emergency medical transportation (NEMT) and the delivery of medication and medical supplies. By requesting a ride or a delivery, booking on someone's behalf, or using our website, you agree to them.",
        "If you are booking for another person, you confirm that you are allowed to share their information with us and that they agree to these terms.",
      ],
    },
    {
      id: "services",
      heading: "What Arigo provides",
      paragraphs: ["Arigo runs two services. Both are arranged in advance and both are carried out by screened, trained drivers."],
      bullets: [
        { label: "Appointment rides.", text: "Scheduled transportation to and from dialysis, chemotherapy, physical therapy, doctor, and dental appointments." },
        { label: "Discharge rides.", text: "Planned pickups when a rider is released from a hospital or facility." },
        { label: "Mobility support.", text: "Ambulatory, wheelchair, and stretcher transportation, based on the needs given at booking." },
        { label: "Medication and supply delivery.", text: "Collection of sealed prescriptions and medical supplies from a pharmacy or provider and delivery to the recipient's address, where the service is available." },
      ],
    },
    {
      id: "not-for-emergencies",
      heading: "Not for emergencies",
      paragraphs: [
        "Arigo is not an ambulance service and does not provide emergency medical transportation or treatment. Our drivers are not medical personnel and cannot administer medication or clinical care.",
        "Our delivery service is not a substitute for urgent access to medication. If a rider or recipient needs urgent or emergency medical assistance, call 911. Do not book an Arigo ride or delivery and wait.",
      ],
    },
    {
      id: "who-can-use-arigo",
      heading: "Who can use Arigo",
      paragraphs: [
        "You must be 18 or older to book a ride or a delivery. Minors may travel when a parent, guardian, school, or care facility arranges the trip and any required escort is present, and deliveries intended for a minor must be received by an adult.",
        "Accounts are for the person who created them. Keep your login details private, and tell us promptly if you believe someone else is using your account.",
      ],
    },
    {
      id: "booking",
      heading: "Booking a ride or a delivery",
      paragraphs: [
        "For a ride, give us the pickup location, destination, appointment time, and how the rider gets around. For a delivery, give us the pharmacy or provider, the order reference, the delivery address, and who may receive the item.",
        "Accurate details are what let us assign the right vehicle, the right assistance, and the right handover method. A request is not confirmed until our team confirms it with you. Availability depends on the service area, the vehicle type needed, and how far ahead you book.",
      ],
    },
    {
      id: "changes-and-cancellations",
      heading: "Changes and cancellations",
      paragraphs: [
        "Tell us as early as you can if a ride or delivery needs to move or will not be needed. Late changes may mean we cannot provide a vehicle or a courier in time.",
        "Drivers wait a reasonable time at a pickup point. If the rider is not available and we cannot reach anyone, the trip may be recorded as a no-show, and a fee may apply where one has been agreed with the payer.",
        "If a delivery cannot be completed because nobody is available to receive it, or the required identification or signature cannot be given, the courier follows the instructions on the order. Depending on what the pharmacy allows, that means a further attempt, a return to the pharmacy, or a safe handover to another adult at the address.",
      ],
    },
    {
      id: "rider-responsibilities",
      heading: "Rider and recipient responsibilities",
      bullets: [
        { label: "Be ready.", text: "Be at the pickup point at the agreed time with any equipment, documents, or escort the trip requires, and be available at the delivery address during the agreed window." },
        { label: "Travel safely.", text: "Wear seat belts, stay secured in wheelchair restraints, and follow the driver's safety instructions." },
        { label: "Be able to receive the item.", text: "Show identification or sign for the delivery where the pharmacy requires it." },
        { label: "Treat the team with respect.", text: "We do not tolerate threats, harassment, or discrimination toward drivers, couriers, or staff." },
        { label: "No unsafe conduct.", text: "Smoking, alcohol, illegal drugs, and weapons are not allowed in our vehicles." },
      ],
      paragraphs: ["We may refuse or end a trip, or decline to hand over a delivery, when a person's condition or conduct makes it unsafe, and we may decline future bookings after a serious incident."],
    },
    {
      id: "medication-delivery",
      heading: "Medication delivery terms",
      paragraphs: [
        "Arigo is a transport provider, not a pharmacy. We do not fill, dispense, substitute, repackage, or advise on medication, and we do not open the sealed items we carry. Questions about a prescription belong with the pharmacy or prescriber who issued it.",
        "We deliver only what the pharmacy or provider releases to us. Some items cannot be delivered at all, and some require identification, an adult signature, or delivery to the named recipient in person. The pharmacy sets those conditions and we follow them.",
      ],
      bullets: [
        { label: "Controlled substances.", text: "Where these may be delivered at all, they are released only to the named recipient against identification, and they are never left unattended." },
        { label: "Temperature-sensitive items.", text: "We follow the handling instructions given by the pharmacy. Tell us before dispatch if the delivery window needs to change so an item is not left waiting." },
        { label: "Check on arrival.", text: "Check the item when you receive it and report any damage or discrepancy to the pharmacy and to us the same day." },
        { label: "Unattended delivery.", text: "If you ask us to leave an item without a handover, you accept the risk of loss or damage after it is left, except where we have been negligent." },
      ],
    },
    {
      id: "drivers-and-vehicles",
      heading: "Drivers and vehicles",
      paragraphs: [
        "Drivers are screened, licensed, insured, and trained before they carry riders or deliveries, and vehicles are inspected and maintained on a regular schedule.",
        "We assign the vehicle that fits the mobility needs given at booking. If those needs change, tell us before the trip so we can send the right vehicle.",
      ],
    },
    {
      id: "pricing-and-payment",
      heading: "Pricing and payment",
      paragraphs: [
        "Ride pricing depends on distance, vehicle type, assistance required, and timing. Delivery pricing depends on distance, handling requirements, and how quickly the item is needed. We confirm the price, or the payer covering it, before the job.",
        "Where a health plan, pharmacy, facility, or program pays, we bill them directly under our agreement with them. Where you pay, payment is due as stated on your confirmation or invoice.",
        "Additional charges may apply for waiting time beyond the agreed window, extra stops, repeat delivery attempts, or no-shows, and are disclosed before they are applied.",
      ],
    },
    {
      id: "third-party-services",
      heading: "Third-party services",
      paragraphs: [
        "Our website and app use third-party tools for mapping, messaging, payments, and analytics. Those providers have their own terms and privacy policies.",
        "Pharmacies, clinics, and facilities we work with are independent of Arigo. Their own terms govern the care they provide and the medication they dispense.",
      ],
    },
    {
      id: "disclaimers",
      heading: "Disclaimers",
      paragraphs: [
        "We work hard to run on time, but traffic, weather, road closures, vehicle problems, pharmacy delays, and events outside our control can delay a ride or a delivery. Arigo does not guarantee arrival or delivery by a specific time.",
        "Our services are provided on an as-is basis. To the extent the law allows, we make no warranties beyond those stated in these terms.",
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, Arigo is not liable for indirect or consequential losses, including missed appointments, delayed doses, lost income, or lost opportunity, arising from the use of our services.",
        "Nothing in these terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence.",
      ],
    },
    {
      id: "changes-to-terms",
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms as our services change or as the law requires. The current version is always on this page.",
        "Continuing to use Arigo after an update means you accept the updated terms.",
      ],
    },
    {
      id: "contact-us",
      heading: "Contact us",
      paragraphs: [
        `If you have a question about these terms, email ${footerContact.email.label} or call ${footerContact.phone.label}.`,
      ],
    },
  ],
  cta: {
    title: "Question about these terms?",
    description: "Contact our team and we will reply in 1 business day.",
    label: "Contact us",
    href: "/contact-us",
  },
};
