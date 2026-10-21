import type { ContactSupportContent } from "../types";

export const contactSupportContent: ContactSupportContent = {
  title: "Contact Support",
  description:
    "Tell us about the ride or delivery you need. Our team will contact you to confirm the details.",
  headerArt: {
    src: "/images/arigo-book-ride-header.png",
    alt: "Illustration of an Arigo wheelchair-accessible van parked outside a hospital",
    width: 520,
    height: 140,
  },
  office: {
    city: "San Francisco",
    suffix: "office contact details",
    notice: "Arigo provides non-emergency transportation only. In an emergency, please call 911.",
    art: {
      src: "/images/arigo-san-francisco-contact-section.png",
      width: 400,
      height: 200,
      alt: "Golden Gate Bridge illustration",
    },
  },
  fields: [
    { name: "firstName", label: "First Name", placeholder: "John Doe", type: "text", required: true },
    { name: "lastName", label: "Last Name", placeholder: "Doe", type: "text", required: true },
    { name: "phone", label: "Contact Number", placeholder: "Number", type: "tel", required: true },
    { name: "email", label: "Email", placeholder: "example@mail.com", type: "email", required: true },
    {
      name: "notes",
      label: "Special Care Requirements",
      placeholder: "Details (e.g. oxygen, walker, assistance at the door)",
      type: "textarea",
      width: "full",
    },
  ],
  submitLabel: "Submit request",
};