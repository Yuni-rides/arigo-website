export interface CareService {
  id: string;
  title: string;
  /** Icon PNGs ship in navy; the component recolours them with a CSS mask. */
  features: { icon: string; label: string }[];
  image: { src: string; alt: string };
}

const icons = {
  driver: "/images/driver-badge-icon.png",
  wheelchair: "/images/wheelchair-ride-icon.png",
  route: "/images/route-planning-icon.png",
  compassion: "/images/compassionate-care-icon.png",
};

export const careServicesContent = {
  title: "Our care",
  highlight: "Services",
  description:
    "From appointment rides to medication delivery, we help patients get to care and get what they need.",
  cta: { label: "Book a Ride", href: "/#request" },
  /** Seconds each slide stays before the carousel advances. */
  slideDuration: 6,
  services: [
    {
      id: "nemt",
      title: "Non-Emergency Medical Transportation",
      features: [
        { icon: icons.driver, label: "Trained, vetted drivers" },
        { icon: icons.wheelchair, label: "Ambulatory, wheelchair & stretcher rides" },
        { icon: icons.route, label: "Thoughtful ride planning" },
        { icon: icons.compassion, label: "Compassionate, hands-on assistance" },
      ],
      image: {
        src: "/images/arigo-nemt-driver-service.png",
        alt: "An Arigo driver standing beside a wheelchair-accessible van",
      },
    },
    {
      id: "treatment",
      title: "Dialysis & Treatment Transport",
      features: [
        { icon: icons.route, label: "Standing weekly appointments" },
        { icon: icons.driver, label: "Same driver whenever possible" },
        { icon: icons.wheelchair, label: "Door-through-door support" },
        { icon: icons.compassion, label: "Patient, unhurried pickups" },
      ],
      image: {
        src: "/images/arigo-dialysis-center-ride.png",
        alt: "An Arigo attendant helping a patient into the vehicle at a treatment centre",
      },
    },
    {
      id: "discharge",
      title: "Hospital Discharge & Recovery Rides",
      features: [
        { icon: icons.driver, label: "Coordinated with your care team" },
        { icon: icons.wheelchair, label: "Stretcher and wheelchair ready" },
        { icon: icons.route, label: "Flexible, same-day scheduling" },
        { icon: icons.compassion, label: "Settled safely at the front door" },
      ],
      image: {
        src: "/images/arigo-hospital-discharge-ride.png",
        alt: "An Arigo attendant bringing a patient home after a hospital stay",
      },
    },
  ] satisfies CareService[],
};
