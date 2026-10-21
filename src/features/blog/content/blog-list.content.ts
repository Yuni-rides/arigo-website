import type { BlogCategory, BlogListContent, BlogPost } from "../types";

const categories: BlogCategory[] = [
  "Safety & Trust",
  "Patients & Families",
  "Drivers",
  "Healthcare Partners",
  "Medication Delivery",
];

const excerpt =
  "At Arigo, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, care, and professionalism, we take pride in offering a service that families and communities can trust.";

/** The detail route resolves a post by slugifying its title, so hrefs are built the same way. */
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Driver spotlights - short quotes from the people behind the wheel. They are ordinary
 * posts in the Drivers category, so they appear in the blog listing and get their own
 * detail page; the drivers page slides through them.
 */
const driverSpotlights: BlogPost[] = [
  {
    quote: "I love knowing I helped someone get to their appointment safely",
    author: "Marcus Reyes",
    date: "April 20, 2026",
    image: "/images/arigo-professional-driver.png",
  },
  {
    quote: "Small kindnesses make the biggest difference on a ride",
    author: "Sarah M.",
    date: "April 18, 2026",
    image: "/images/arigo-driver-experience-2.png",
  },
  {
    quote: "Every patient has a story and I am honored to be part of their day",
    author: "Antoine Baptiste",
    date: "April 15, 2026",
    image: "/images/arigo-driver-experience-3.png",
  },
  {
    quote: "The schedule works around my family instead of against it",
    author: "Dana Whitfield",
    date: "April 11, 2026",
    image: "/images/arigo-driver-experience-1.png",
  },
  {
    quote: "Dispatch always has my back when a pickup runs long",
    author: "Luis Ferreira",
    date: "April 8, 2026",
    image: "/images/arigo-nemt-driver-service.png",
  },
  {
    quote: "Regular riders start to feel like neighbours",
    author: "Priya Raman",
    date: "April 4, 2026",
    image: "/images/arigo-trusted-driver-and-patient.png",
  },
].map((spotlight, index) => ({
  id: `driver-spotlight-${index + 1}`,
  title: spotlight.quote,
  category: "Drivers" as const,
  date: spotlight.date,
  href: `/blog/${slugify(spotlight.quote)}`,
  excerpt,
  author: spotlight.author,
  image: { src: spotlight.image, width: 293, height: 187 },
}));

const seeds: { title: string; category: BlogCategory; image: number }[] = [
  { title: "Inside Arigo's Driver Vetting Process", category: "Safety & Trust", image: 1 },
  { title: "How We Keep Every Ride Safe and Comfortable", category: "Safety & Trust", image: 2 },
  { title: "Your Privacy Matters: How We Handle Patient Info", category: "Safety & Trust", image: 3 },
  { title: "Inside Arigo's Driver Background Checks", category: "Patients & Families", image: 4 },
  { title: "What Families Ask Us Most Before a First Ride", category: "Patients & Families", image: 2 },
  { title: "A Day in the Life of an Arigo Driver", category: "Drivers", image: 1 },
  { title: "How Clinics Schedule Recurring Patient Trips", category: "Healthcare Partners", image: 3 },
  { title: "Getting Prescriptions Delivered the Same Day", category: "Medication Delivery", image: 4 },
];

/** 40 placeholder posts so the filters and pagination have something real to work on. */
const placeholders: BlogPost[] = Array.from({ length: 40 }, (_, index) => {
  const seed = seeds[index % seeds.length];
  return {
    id: `post-${index + 1}`,
    title: seed.title,
    category: seed.category,
    date: "12/1/2026",
    href: `/blog/${slugify(seed.title)}`,
    excerpt,
    image: { src: `/images/blog${seed.image}.png`, width: 293, height: 187 },
  };
});

export const blogListContent: BlogListContent = {
  title: "Arigo",
  highlight: "Blogs",
  description: "Stories, tips and updates on medical rides and medication delivery, straight from Arigo.",
  allLabel: "All",
  categories,
  pageSize: 16,
  posts: [...driverSpotlights, ...placeholders],
};

/** The spotlights the drivers page slides through, newest first. */
export const driverSpotlightPosts: BlogPost[] = driverSpotlights;
