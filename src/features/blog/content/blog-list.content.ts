import type { BlogCategory, BlogListContent, BlogPost } from "../types";

const categories: BlogCategory[] = [
  "Safety & Trust",
  "Patients & Families",
  "Drivers",
  "Healthcare Partners",
  "Medication Delivery",
  "Company News",
];

  const excerpt =
  "At Arigo, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, care, and professionalism, we take pride in offering a service that families and communities can trust.";

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
const posts: BlogPost[] = Array.from({ length: 40 }, (_, index) => {
  const seed = seeds[index % seeds.length];
  const slug = seed.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return {
    id: `post-${index + 1}`,
    title: seed.title,
    category: seed.category,
    date: "12/1/2026",
    href: `/blog/${slug}`,
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
  posts,
};
