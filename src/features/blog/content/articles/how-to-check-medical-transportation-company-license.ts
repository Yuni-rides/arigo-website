import type { BlogArticle } from "../../types";

export const howToCheckMedicalTransportationCompanyLicense: BlogArticle = {
  slug: "how-to-check-medical-transportation-company-license",
  title: "How to check that a medical transportation company is licensed",
  category: "Safety & Trust",
  date: "Oct 20, 2026",
  author: "Arigo",
  metaTitle: "How to Check a Medical Transportation Company's License",
  metaDescription:
    "Not sure a medical transportation company is legit? Here's how to check its license, insurance and registration before you book a ride.",
  keywords: [
    "NEMT license requirements",
    "verify NEMT provider",
    "state NEMT registration",
    "medical transport insurance",
  ],
  banner: {
    src: "/images/how-to-check-medical-transportation-company-license.png",
    alt: "A family checking a transportation company's paperwork before booking a ride",
  },
  intro:
    "Anyone can buy a van and write “medical transport” on the side. The sign tells you nothing about whether the company is registered, insured, or has checked who is driving your mother.",
  introParagraphs: [
    "Checking takes about twenty minutes. Do it before the first ride, not after something goes wrong.",
  ],
  sections: [
    {
      id: "no-single-national-license",
      heading: "There's no single national license",
      paragraphs: [
        "This is where people get stuck. Non-emergency medical transportation is regulated state by state, and sometimes city by city. One state has providers enroll with its Medicaid agency. Another leaves it to a transportation or public utilities regulator. Others lean on health department or EMS rules, depending on the vehicle. Local business licenses and vehicle inspections come on top of that.",
      ],
    },
    {
      id: "step-1-ask-for-the-paperwork",
      heading: "Step 1: Ask for the paperwork",
      lead: "Call or email and ask:",
      bullets: [
        { text: "Which license or registration do you hold in this state, and what's the number?" },
        { text: "Which agency issued it?" },
        { text: "Can I see a certificate of insurance?" },
      ],
      outro: [
        "A legitimate company expects these questions. The answers should take a minute. If all you get is “we're fully licensed,” ask again. If you still get nothing, you have your answer.",
      ],
    },
    {
      id: "step-2-confirm-with-the-agency",
      heading: "Step 2: Confirm it with the agency",
      paragraphs: [
        "A number on a flyer isn't proof. Contact the issuing agency or check its website. Many states have a public lookup for registered carriers or enrolled Medicaid providers. If the agency can't find the company, ask the company why.",
        "If you're on Medicaid, your health plan or its transportation broker can tell you whether a provider is in its network. That doesn't replace your own check, but it's a quick first filter.",
        "If a broker assigned the provider, you still have a say. Brokers contract with companies to cover trips, and they act on complaints. If you're sent a provider you can't verify, or one that has let you down before, tell the broker and ask for someone else.",
      ],
    },
    {
      id: "step-3-read-the-insurance-certificate",
      heading: "Step 3: Read the insurance certificate",
      paragraphs: [
        "It should show the insurer's name, the type of coverage, the policy number and the dates. Look at the dates. A policy that ended in March doesn't cover a ride in October.",
        "For extra peace of mind, call the insurer or the agent listed and ask whether the policy is active. Five minutes, tops.",
      ],
    },
    {
      id: "step-4-ask-about-the-drivers",
      heading: "Step 4: Ask about the drivers",
      paragraphs: [
        "A company license doesn't tell you how individual drivers are screened. Ask about background checks and driving record checks. Ask what training drivers get for helping riders in and out and for securing wheelchairs.",
      ],
    },
    {
      id: "step-5-look-at-the-vehicle",
      heading: "Step 5: Look at the vehicle when it arrives",
      paragraphs: [
        "Don't skip this one. The van should match what you booked. If you asked for a wheelchair lift, there should be one, and it should work. Tie-downs should be there. The driver should wear ID and be able to say which company they work for.",
        "An unmarked van, a broken ramp, or a driver who can't explain how your chair gets secured is a good reason to say no and call the company.",
      ],
    },
    {
      id: "a-license-is-the-floor",
      heading: "A license is the floor",
      paragraphs: [
        "Here's the honest take. A license tells you a company met the minimum to operate. It doesn't tell you whether the driver is patient with your father, or whether the van shows up on time. Check the paperwork, then judge the service by the first few rides. If the ride doesn't match what you were promised, say so early.",
      ],
    },
    {
      id: "asking-arigo",
      heading: "Asking Arigo",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. Licensing rules differ in each state, and you should ask any company, including us.",
      ],
      cta: { label: "Request a ride", href: "/#request" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently asked questions",
      faqs: [
        {
          question: "Is there a national license for medical transportation companies?",
          answer:
            "No. Non-emergency medical transportation is regulated state by state, and sometimes locally too. That's why you ask the company which agencies license it, then check with each one.",
        },
        {
          question: "How do I find out which agency licenses a company in my state?",
          answer:
            "Ask the company first. Then call your state Medicaid agency or your state's transportation regulator and ask where to look. They can point you to the right lookup or office.",
        },
        {
          question: "What should an insurance certificate show?",
          answer:
            "The insurer's name, the type of coverage, the policy number and the start and end dates. Check the dates. You can also ask for the certificate to be sent by the insurer or agent, not only by the company.",
        },
        {
          question: "Do medical transportation drivers have to pass background checks?",
          answer:
            "It depends on the state and the program. Don't assume. Ask the company directly what checks drivers go through and how often they're repeated.",
        },
        {
          question: "If my Medicaid plan sent the provider, can I skip checking?",
          answer:
            "Better not to. A broker's network is a useful first filter, but it isn't a guarantee. Do the same quick checks, and tell the broker if something doesn't add up.",
        },
      ],
    },
  ],
};
