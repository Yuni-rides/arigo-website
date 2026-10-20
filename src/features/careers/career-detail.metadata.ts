import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import type { CareerJob } from "./types";

export function buildCareerDetailMetadata(job: CareerJob): Metadata {
  const title = `Driver Position in ${job.state}`;
  const description = job.description;
  const url = new URL(`/careers/${job.slug}`, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}