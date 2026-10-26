import { footerContact } from "@/config/footer";

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
      question: "Which states does Arigo serve?",
      answer:
        "Arigo is preparing to open in Washington and California. When you request a ride, tell us where the trip is taking place and we'll confirm current availability.",
    },
    {
      id: "what-is-arigo",
      question: "What is Arigo?",
      answer:
        "Arigo is a non-emergency medical transportation (NEMT) service providing scheduled rides to and from medical appointments for people who may need more support than a traditional taxi or rideshare can provide.",
    },
    {
      id: "emergencies",
      question: "Is Arigo for emergencies?",
      answer:
        "No. Arigo provides non-emergency transportation. If someone needs urgent or emergency medical assistance, call 911.",
    },
    {
      id: "ride-type",
      question: "What type of transportation do I need?",
      answer:
        "Tell us how the rider gets around. For example, they may walk independently, need some assistance, use a wheelchair, or require stretcher transportation. We'll use that information to determine what type of transportation may be appropriate for the trip.",
    },
    {
      id: "become-driver",
      question: "Who can become an Arigo driver?",
      answer:
        "If you're interested in driving with Arigo, visit our Drive with Purpose page to learn more about the opportunity and application process.",
    },
    {
      id: "request-ride",
      question: "How do I request a ride?",
      // Phone lives in the footer config so the site only ever states one number.
      answer: `You can request a ride using the form on our website or call ${footerContact.phone.label} to discuss your transportation needs.`,
    },
  ] satisfies Faq[],
};
