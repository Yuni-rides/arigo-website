import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui";
import { DriverApplicationSection } from "@/features/drivers/components/driver-application-section";

import { careerJobsContent } from "../content/career-jobs.content";
import type { CareerJob } from "../types";

export function CareerDetailView({ job }: { job: CareerJob }) {
  const sections = [
    {
      id: "responsibilities",
      title: "Key Responsibilities",
      items: job.responsibilities,
    },
    {
      id: "qualifications",
      title: "Skills, Knowledge and Expertise",
      items: job.qualifications,
    },
    {
      id: "preferred",
      title: "Nice to have",
      items: job.preferred,
    },
    {
      id: "benefits",
      title: "Why join us",
      items: job.benefits,
    },
  ];

  const details = [
    ["Department", job.department],
    ["Employment Type", job.employmentType],
    ["Location", `${job.city}, ${job.state}`],
    ["Workplace Type", job.workMode],
  ];

  return (
    <>
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden pb-12 pt-28 sm:min-h-[380px]">
        <Image
          src={careerJobsContent.banner.src}
          alt={careerJobsContent.banner.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand-secondary/55"
        />

        <Container className="relative z-10 text-center">
          <h1 className="text-[34px] leading-[1.15] font-medium tracking-tight text-white sm:text-[48px] lg:text-[56px]">
            Driver Position
            <br />
            in <span className="text-brand-primary">{job.state}</span>
          </h1>
        </Container>
      </section>

      <section className="bg-[#FFC6BC] py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-[1120px] items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
            <aside className="rounded-[14px] bg-background p-5 shadow-md lg:sticky lg:top-28">
              <Link
                href="#driver-application"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-primary px-4 text-sm text-white transition-colors hover:bg-brand-primary-hover"
              >
                Apply now
              </Link>

              <dl className="mt-6 space-y-5">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-medium text-brand-primary">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-light text-brand-secondary">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>

            <article className="min-w-0 text-brand-secondary">
              <h2 className="text-[26px] leading-tight font-medium sm:text-[32px]">
                {job.title}
              </h2>

              <p className="mt-5 text-sm leading-[1.8] font-light">
                {job.description}
              </p>

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mt-9 scroll-mt-28"
                >
                  <h3 className="text-[21px] font-medium tracking-normal">
                    {section.title}
                  </h3>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-[1.7] font-light">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <Link
                href="/careers"
                className="mt-10 inline-block text-sm font-medium text-brand-secondary underline underline-offset-4"
              >
                View all positions
              </Link>
            </article>
          </div>
        </Container>
      </section>

      <DriverApplicationSection />
    </>
  );
}