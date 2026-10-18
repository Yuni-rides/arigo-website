export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
}

export const driversTestimonialsContent: Testimonial[] = [
  {
    id: "1",
    quote:
      "Partnering with Arigo changed how our clinic schedules patient rides. Their team gave us visibility we never had before, and our patients finally have the reliable support they deserve.",
    author: "Linda Ortiz",
    role: "Transportation Director, Riverside Unified",
    image: {
      src: "/images/arigo-client-testimonial-1.png",
      alt: "Linda Ortiz",
    },
  },
  {
    id: "2",
    quote:
      "The platform has significantly streamlined our daily driver operations and improved our overall dispatch efficiency.",
    author: "Michael Chang",
    role: "Operations Head, Logistics Co.",
    image: {
      src: "/images/arigo-client-testimonial-2.png",
      alt: "Michael Chang",
    },
  },
  {
    id: "3",
    quote:
      "Arigo's dedicated care and responsive support team made a huge impact on our customer satisfaction rates.",
    author: "Sarah Jenkins",
    role: "Fleet Manager, Care Trans",
    image: {
      src: "/images/arigo-client-testimonial-3.png",
      alt: "Sarah Jenkins",
    },
  },
];
