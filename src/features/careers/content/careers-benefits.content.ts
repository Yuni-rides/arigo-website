export interface CareerBenefit {
  id: string;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}

export const careersBenefitsContent = {
  title: "Why Drive for",
  highlight: "Arigo",
  description:
    "Join Arigo and turn your time on the road into meaningful work that helps patients and families every day.",
  cta: {
    label: "See Details",
    href: "#driver-application",
  },
  benefits: [
    {
      id: "schedule",
      title: "Select Your Own Schedule",
      description:
        "Explore driving opportunities and discuss the availability that works for you.",
      icon: {
        src: "/images/schedule-calendar-icon.png",
        alt: "",
      },
      featured: true,
    },
    {
      id: "earnings",
      title: "Earn on Your Terms",
      description:
        "Learn about ride opportunities, compensation and the payment schedule before getting started.",
      icon: {
        src: "/images/earnings-money-icon.png",
        alt: "",
      },
    },
    {
      id: "difference",
      title: "Make a Real Difference",
      description:
        "Help patients reach their appointments and give families one less thing to worry about.",
      icon: {
        src: "/images/make-difference-heart-icon.png",
        alt: "",
      },
    },
    {
      id: "support",
      title: "Support Whenever You Need It",
      description:
        "Connect with our team for guidance on onboarding, trip questions and support arrangements.",
      icon: {
        src: "/images/driver-support-247-icon.png",
        alt: "",
      },
    },
  ] satisfies CareerBenefit[],
};