import type { PatientPromiseContent } from "../types";

/**
 * Each asset ships with a white frame baked in; `content` is the measured box of
 * the real photograph inside it, so the component can crop the frame away.
 */
export const patientPromiseContent: PatientPromiseContent = {
  title: "We get every patient where they need to go.",
  cta: { label: "Plan a Ride", href: "/#request" },
  photos: [
    {
      src: "/images/arigo-patient-transportation-services.png",
      alt: "An Arigo driver walking a passenger away from the van",
      width: 450,
      height: 483,
      content: { x: 48, y: 59, width: 354, height: 387 },
    },
    {
      src: "/images/arigo-patient-mobility-solutions.png",
      alt: "Two Arigo attendants loading a patient on a stretcher into a van",
      width: 470,
      height: 505,
      content: { x: 58, y: 69, width: 354, height: 389 },
    },
    {
      src: "/images/arigo-medical-transport-and-delivery.png",
      alt: "An Arigo attendant pushing a passenger in a wheelchair up the vehicle ramp",
      width: 440,
      height: 504,
      content: { x: 58, y: 69, width: 354, height: 388 },
    },
    {
      src: "/images/arigo-reliable-patient-transport.png",
      alt: "An Arigo courier handing a medication package to a customer at his door",
      width: 440,
      height: 504,
      content: { x: 58, y: 69, width: 354, height: 388 },
    },
  ],
};
