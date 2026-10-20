import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CareerDetailView, buildCareerDetailMetadata, getJobBySlug, getJobSlugs } from "@/features/careers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  return job ? buildCareerDetailMetadata(job) : { title: "Position not found" };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return <CareerDetailView job={job} />;
}
