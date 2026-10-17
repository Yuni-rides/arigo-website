export interface WelcomeBlock {
  id: string;
  title: string;
  /** `{brand}` is replaced with a bold "Arigo". */
  body: string;
  image: { src: string; alt: string };
  /** Which side the photo sits on at desktop widths. */
  imageSide: "left" | "right";
  /** The second block's heading is noticeably larger in the design. */
  titleSize: "md" | "lg";
}

export const welcomeContent = {
  blocks: [
    {
      id: "welcome",
      title: "Welcome To Arigo",
      body: "At Arigo, we are committed to providing dependable non-emergency medical transportation and medication delivery, designed around the needs of patients. With a focus on safety, care and professionalism, we take pride in offering a service that families and healthcare partners can trust. Our dedicated team ensures every journey is secure, comfortable and on time, making us a growing name in medical transportation California and Washington. Whether it's a dialysis visit, a therapy session, a post-surgery follow-up or a prescription delivery, Arigo is here to serve with integrity and compassion.",
      image: {
        src: "/images/arigo-welcome-and-care-section.png",
        alt: "An Arigo driver and a care coordinator greeting a patient in a wheelchair",
      },
      imageSide: "left",
      titleSize: "md",
    },
    {
      id: "pride",
      title: "We take pride in being a helping hand with love and care",
      body: "At {brand}, we take great pride in being a helping hand to our communities, offering medical transportation and delivery services with the love and care every patient deserves. Our mission goes beyond getting people from one place to another. We are committed to making each journey a safe, comfortable and compassionate one.",
      image: {
        src: "/images/arigo-patient-care-features.png",
        alt: "An Arigo attendant helping a passenger settle into the vehicle",
      },
      imageSide: "right",
      titleSize: "lg",
    },
  ] satisfies WelcomeBlock[],
};
