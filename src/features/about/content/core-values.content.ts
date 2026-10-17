export interface CoreValue {
  id: string;
  /** Label in the left-hand list. */
  label: string;
  title: string;
  description: string;
  href: string;
}

export const coreValuesContent = {
  title: "Our Core Values",
  /** The part of the title that carries the underline. */
  titleUnderlined: "Values",
  readMoreLabel: "Read More",
  values: [
    {
      id: "safety-first",
      label: "Safety First",
      title: "Every mile begins with your safety.",
      description:
        "We know every patient is unique. Our drivers are trained to provide safe, comfortable and respectful rides, and to handle every vehicle, ramp and tie-down with care.",
      href: "/services",
    },
    {
      id: "trust",
      label: "Trust",
      title: "Families rely on us, and we earn it daily.",
      description:
        "Every driver is vetted, background checked and trained before a single ride. Clear updates and honest timing mean you always know where your loved one is.",
      href: "/services",
    },
    {
      id: "care-compassion",
      label: "Care & Compassion",
      title: "We treat every passenger like family.",
      description:
        "A ride is rarely just a ride. Our team takes the time to listen, to help at the door, and to make a difficult day a little easier.",
      href: "/services",
    },
    {
      id: "reliability",
      label: "Reliability",
      title: "On time, every time you need us.",
      description:
        "Appointments do not wait, so neither do we. Careful routing and real-time tracking keep pickups punctual and schedules predictable.",
      href: "/services",
    },
    {
      id: "integrity",
      label: "Integrity",
      title: "Clear pricing and honest answers.",
      description:
        "No surprises and no hidden fees. We say what we will do, we do it, and we tell you straight away if anything changes.",
      href: "/services",
    },
    {
      id: "professionalism",
      label: "Professionalism",
      title: "Trained, certified and always prepared.",
      description:
        "From defensive driving to patient handling, our team keeps its training current so every journey meets the highest standard of service.",
      href: "/services",
    },
  ] satisfies CoreValue[],
};
