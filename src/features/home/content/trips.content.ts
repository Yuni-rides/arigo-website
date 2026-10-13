import type { TripsContent } from "../types";

export const tripsContent: TripsContent = {
  title: "Trips we cover",
  trips: [
    {
      id: "dialysis",
      label: "Dialysis",
      image: { src: "/images/trips1.png", alt: "An Arigo driver walking an older passenger to the vehicle" },
    },
    {
      id: "radiation",
      label: "Radiation & chemotherapy",
      image: {
        src: "/images/trips2.png",
        alt: "An Arigo attendant securing a passenger in a wheelchair-accessible van",
      },
    },
    {
      id: "physical-therapy",
      label: "Physical therapy",
      image: { src: "/images/trips3.png", alt: "An Arigo driver supporting a passenger walking with a cane" },
    },
    {
      id: "doctor-dental",
      label: "Doctor and dental visits",
      image: { src: "/images/trips4.png", alt: "An Arigo driver opening the door for a passenger" },
    },
    {
      id: "hospital-discharge",
      label: "Hospital discharge",
      image: {
        src: "/images/trips5.png",
        alt: "A patient being wheeled to an Arigo vehicle after discharge",
      },
    },
    {
      id: "longer-trips",
      label: "Longer trips for care",
      image: { src: "/images/trips6.png", alt: "An Arigo van on a highway at sunrise" },
    },
  ],
};
