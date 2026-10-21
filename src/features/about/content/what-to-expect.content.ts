export interface ExpectationItem {
  /** Bold lead-in: the label before a bullet's detail, or the step's own line. */
  lead?: string;
  text: string;
}

export interface Expectation {
  id: string;
  /** Label in the left-hand tab list, and the heading inside the panel. */
  label: string;
  /** How the items read: dotted list, numbered steps, or plain paragraphs. */
  marker: "bullet" | "number" | "none";
  items: ExpectationItem[];
  cta: { label: string; href: string };
}

export const whatToExpectContent = {
  title: "What You Can Expect From Arigo",
  /** The part of the title that carries the underline. */
  titleUnderlined: "Arigo",
  expectations: [
    {
      id: "what-we-do",
      label: "What We Do",
      marker: "bullet",
      items: [
        {
          lead: "Rides to medical appointments",
          text: "Scheduled transportation to and from dialysis, chemotherapy, physical therapy, doctor, and dental appointments.",
        },
        {
          lead: "Rides home from the hospital",
          text: "Transportation for planned discharge-day pickups, coordinated around the details provided by your care team.",
        },
        {
          lead: "Transportation that fits your needs",
          text: "Options for ambulatory riders, wheelchair users, and riders who require stretcher transportation.",
        },
        {
          lead: "Longer trips when care takes you farther",
          text: "Transportation to specialist centers and facilities outside your immediate area.",
        },
      ],
      cta: { label: "Read More", href: "/services" },
    },
    {
      id: "how-a-ride-works",
      label: "How a Ride Works",
      marker: "number",
      items: [
        {
          lead: "Tell us what you need.",
          text: "Share your pickup location, destination, appointment time, and how the rider gets around.",
        },
        {
          lead: "We confirm the details.",
          text: "A member of our team reviews the trip information and confirms the details with you, including the pickup time.",
        },
        {
          lead: "We get you there—and back.",
          text: "Your driver takes you to your appointment and, when arranged, brings you home afterward.",
        },
      ],
      cta: { label: "Request a Ride", href: "/#request" },
    },
    {
      id: "who-we-work-with",
      label: "Who We Work With",
      marker: "none",
      items: [
        {
          text: "Arigo works with families and caregivers who need dependable transportation for someone they care about.",
        },
        {
          text: "We also work with hospitals, dialysis centers, and care facilities that need transportation support for recurring appointments, discharges, and facility-to-facility trips.",
        },
        {
          text: "For case managers and care teams, we provide a transportation option when a rider needs help getting to scheduled care.",
        },
      ],
      cta: { label: "Contact Us", href: "/contact-us" },
    },
  ] satisfies Expectation[],
};
