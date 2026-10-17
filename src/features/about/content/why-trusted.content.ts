import { footerContact } from "@/config/footer";

export const whyTrustedContent = {
  title: "Why",
  highlight: "Arigo",
  titleEnd: "is the Trusted Choice",
  description:
    "Choosing Arigo means partnering with a medical transportation service built on safety, trust and genuine care. We understand how important it is to reach an appointment on time and with dignity. Every driver is carefully vetted, professionally trained, and dedicated to the highest standard of service, so patients and families can have complete peace of mind knowing their loved one is in safe, capable hands.",
  cta: { label: "Contact us", href: "/contact-us" },
  phone: footerContact.phone,
  photos: {
    // Both assets ship with a thin white frame, cropped away in the component.
    back: {
      src: "/images/arigo-trusted-driver-and-patient.png",
      alt: "An Arigo driver welcoming an older couple at the van door",
      aspectRatio: "160 / 140",
    },
    front: {
      src: "/images/arigo-professional-driver.png",
      alt: "An Arigo driver standing beside the van",
      aspectRatio: "165 / 205",
    },
  },
};
