import { footerContact } from "@/config/footer";

export const whyTrustedContent = {
  title: "",
  highlight: "Arigo",
  titleEnd: "Why We’re Here ",
  description:
    "Getting to a medical appointment should be part of the plan, but transportation can easily become the part that gets overlooked. The appointment is scheduled. The doctor is booked. The treatment is arranged. Then the person who was supposed to drive can’t make it, public transportation doesn’t work for the trip, or there simply isn’t enough room for a wheelchair. That’s where Arigo comes in. We provide scheduled transportation for dialysis, therapy, doctor visits, and other medical appointments, as well as rides home from the hospital. Our goal is simple: make the journey to and from care easier, more comfortable, and less stressful.",
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
