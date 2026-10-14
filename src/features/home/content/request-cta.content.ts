import type { RequestCtaContent } from "../types";

export const requestCtaContent: RequestCtaContent = {
  title: "Request a Non-Emergency Medical Transportation Service Online",
  cta: { label: "Request Transportation", href: "/#request" },
  photo: {
    src: "/images/arigo-request-medical-transportation-banner.png",
    alt: "An Arigo dispatcher taking a booking call",
    width: 539,
    height: 538,
    // The asset ships with a soft glow around it; this is the photo inside.
    content: { x: 28, y: 10, width: 483, height: 482 },
  },
};
