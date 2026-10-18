export interface DriversCareCtaContent {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  images: {
    front: { src: string; alt: string };
    back: { src: string; alt: string };
  };
}

export const driversCareCtaContent: DriversCareCtaContent = {
  title: "Ready to drive with care? Your next ride starts here",
  description:
    "Whether you’re looking to join the Arigo team or a healthcare organization ready to partner with us, we’d love to hear from you.",
  cta: {
    label: "Get Started",
    href: "/contact-us",
  },
  images: {
    front: {
      src: "/images/arigo-drive-with-care-cta.png",
      alt: "Arigo driver high-fiving a young passenger",
    },
    back: {
      src: "/images/arigo-faq-support-banner.png",
      alt: "Arigo driver beside a vehicle at sunset",
    },
  },
};