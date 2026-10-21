import type { BookingContent } from "../types";

/**
 * One field list drives both services; `services` narrows a field to one of them.
 * Fields with no `services` key appear for every service.
 */
export const bookingContent: BookingContent = {
  title: "Book Your Ride",
  description:
    "Tell us about the ride or delivery you need. Our team will contact you to confirm the details.",
  submitLabel: "Submit request",
  serviceField: {
    name: "service",
    label: "Services Needed",
    placeholder: "Medical Ride / Medication Delivery",
    options: [
      { id: "medical-ride", label: "Medical Ride" },
      { id: "medication-delivery", label: "Medication Delivery" },
    ],
  },
  fields: [
    { name: "fullName", label: "Full Name", placeholder: "John Doe", type: "text", required: true },
    { name: "email", label: "Email", placeholder: "Joe@gmail.com", type: "email", required: true },
    { name: "phone", label: "Contact Number", placeholder: "Number", type: "tel", required: true },
    { name: "city", label: "City", placeholder: "City name", type: "text", required: true },

    {
      name: "patientName",
      label: "Patient Name",
      placeholder: "Jessica",
      type: "text",
      width: "full",
      services: ["medical-ride"],
    },
    {
      name: "recipientName",
      label: "Recipient Name",
      placeholder: "Jessica",
      type: "text",
      width: "full",
      services: ["medication-delivery"],
    },

    { name: "pickup", label: "Pickup Location", placeholder: "Address", type: "text", required: true },
    { name: "dropoff", label: "Drop-off Location", placeholder: "Address", type: "text", required: true },

    { name: "when", label: "Select Date & Time", placeholder: "Select Date & Time", type: "datetime-local" },
    {
      name: "mobility",
      label: "Mobility Needs",
      placeholder: "Ambulatory / Wheelchair / Stretcher",
      type: "select",
      options: ["Ambulatory", "Wheelchair", "Stretcher"],
      services: ["medical-ride"],
    },
    {
      name: "prescription",
      label: "Prescription Details",
      placeholder: "Pharmacy name / order number",
      type: "text",
      services: ["medication-delivery"],
    },

    {
      name: "returnTrip",
      label: "Return trip needed?",
      type: "radio",
      width: "full",
      options: ["Yes", "No"],
      services: ["medical-ride"],
    },

    {
      name: "notes",
      label: "Special Care Requirements",
      placeholder: "Details (e.g. oxygen, walker, assistance at the door)",
      type: "text",
      width: "full",
    },
  ],
  photo: {
    src: "/images/arigo-booking-side-banner.png",
    alt: "An Arigo attendant smiling with a passenger in a wheelchair beside the van",
    width: 474,
    height: 1130,
  },
  headerArt: {
    src: "/images/arigo-book-ride-header.png",
    alt: "Illustration of an Arigo wheelchair-accessible van parked outside a hospital",
    width: 442,
    height: 147,
  },
};
