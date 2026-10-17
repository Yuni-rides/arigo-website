export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqsContent = {
  title: "Frequently asked",
  highlight: "questions",
  cta: { label: "Ask a Question", href: "/contact-us" },
  faqs: [
    {
      id: "states",
      question: "Which states does Arigo operate in?",
      answer:
        "We currently serve Washington and California, with new areas opening regularly. Tell us where you need a ride and our team will confirm availability.",
    },
    {
      id: "what-is-arigo",
      question: "What is Arigo?",
      answer:
        "Arigo is a technology-driven, non-emergency medical transportation service. We get patients and families to appointments safely, on time and with dignity.",
    },
    {
      id: "become-driver",
      question: "Who can become a driver for Arigo?",
      answer:
        "Licensed drivers with a clean record who pass our background check and training programme. Experience with patient care is welcome but not required.",
    },
    {
      id: "ride-type",
      question: "What kind of ride do I need?",
      answer:
        "Ambulatory if the passenger can walk, wheelchair if they need a ramp or lift, and stretcher if they must travel lying down. We will help you choose when you book.",
    },
  ] satisfies Faq[],
};
