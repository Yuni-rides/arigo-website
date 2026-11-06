import type { PatientPromiseContent } from "../types";

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
      alt: "An Arigo driver helping a schoolboy with his backpack into the van outside his home",
      width: 388,
      height: 388,
      // This photo ships without the white frame, so it is only centre-cropped
      // to the collage's portrait ratio.
      content: { x: 17, y: 0, width: 354, height: 388 },
    },
    {
      src: "/images/arigo-medical-transport-and-delivery.png",
      alt: "An Arigo driver kneeling to greet a schoolgirl and her mother beside the vehicle",
      width: 354,
      height: 388,
      // Unframed photo - the whole file is the content box.
      content: { x: 0, y: 0, width: 354, height: 388 },
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
