"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/ui";

import {
  careerJobs,
  careerJobsContent,
} from "../content/career-jobs.content";

const inputClass =
  "h-11 w-full min-w-0 rounded-md bg-background px-4 text-sm text-brand-secondary placeholder:text-brand-tertiary";

export function CareersJobList() {
  const [draft, setDraft] = useState({
    query: "",
    city: "",
    state: "",
  });
  const [filters, setFilters] = useState(draft);
  const [page, setPage] = useState(1);

  const cities = [...new Set(careerJobs.map((job) => job.city))].sort();
  const states = [...new Set(careerJobs.map((job) => job.state))].sort();

  const filteredJobs = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return careerJobs.filter((job) => {
      const searchable =
        `${job.title} ${job.city} ${job.state} ${job.department}`.toLowerCase();

      return (
        (!query || searchable.includes(query)) &&
        (!filters.city || job.city === filters.city) &&
        (!filters.state || job.state === filters.state)
      );
    });
  }, [filters]);

  const pageCount = Math.ceil(
    filteredJobs.length / careerJobsContent.pageSize,
  );

  const visibleJobs = filteredJobs.slice(
    (page - 1) * careerJobsContent.pageSize,
    page * careerJobsContent.pageSize,
  );

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters({ ...draft });
    setPage(1);
  }

  return (
    <section
      id="open-positions"
      className="scroll-mt-24 bg-[#FFC6BC] pb-20"
    >
      <Container>
        <div className="relative mx-auto max-w-[1120px]">
          <form
            onSubmit={search}
            aria-label="Search open positions"
            className="relative -top-6 grid gap-3 rounded-[14px] bg-brand-primary p-4 shadow-lg sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_150px]"
          >
            <label className="min-w-0">
              <span className="sr-only">Search jobs</span>
              <input
                type="search"
                placeholder="Search job"
                value={draft.query}
                onChange={(event) =>
                  setDraft((previous) => ({
                    ...previous,
                    query: event.target.value,
                  }))
                }
                className={inputClass}
              />
            </label>

            <label className="min-w-0">
              <span className="sr-only">City</span>
              <select
                value={draft.city}
                onChange={(event) =>
                  setDraft((previous) => ({
                    ...previous,
                    city: event.target.value,
                  }))
                }
                className={inputClass}
              >
                <option value="">All cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            <label className="min-w-0">
              <span className="sr-only">State</span>
              <select
                value={draft.state}
                onChange={(event) =>
                  setDraft((previous) => ({
                    ...previous,
                    state: event.target.value,
                  }))
                }
                className={inputClass}
              >
                <option value="">All states</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="h-11 rounded-md bg-brand-secondary px-6 text-sm text-white transition-colors hover:bg-brand-secondary-hover"
            >
              Search
            </button>
          </form>

          <p role="status" className="sr-only">
            {filteredJobs.length} positions found
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleJobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex min-h-[230px] flex-col rounded-[16px] bg-background p-5 shadow-[0_5px_8px_rgb(0_0_0/0.18)] transition-colors duration-300 hover:bg-brand-primary focus-visible:bg-brand-primary"
              >
                <h3 className="text-[19px] leading-[1.3] font-normal tracking-normal text-brand-primary transition-colors group-hover:text-white group-focus-visible:text-white">
                  {job.title}
                </h3>

                <p className="mt-2 text-xs font-light text-brand-secondary/80 group-hover:text-white/90 group-focus-visible:text-white/90">
                  {job.employmentType} · {job.workMode}
                </p>

                <div className="mt-auto flex items-end justify-between gap-3 pt-10">
                  <p className="flex items-center gap-2 text-xs text-brand-secondary group-hover:text-white group-focus-visible:text-white">
                    <MapPin
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-primary group-hover:text-white group-focus-visible:text-white"
                    />
                    {job.city}, {job.state}
                  </p>

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-brand-primary text-white group-hover:bg-brand-secondary group-focus-visible:bg-brand-secondary">
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <p className="py-16 text-center text-brand-secondary">
              No positions match your search. Try another city or state.
            </p>
          )}

          {pageCount > 1 && (
            <nav
              aria-label="Job listing pagination"
              className="mt-14 flex flex-wrap items-center justify-center gap-2"
            >
              <button
                type="button"
                aria-label="Previous page"
                disabled={page === 1}
                onClick={() => setPage((previous) => previous - 1)}
                className="flex size-10 items-center justify-center rounded-full border border-brand-primary/40 text-brand-primary disabled:opacity-30"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>

              {Array.from({ length: pageCount }, (_, index) => {
                const number = index + 1;

                return (
                  <button
                    key={number}
                    type="button"
                    aria-label={`Page ${number}`}
                    aria-current={page === number ? "page" : undefined}
                    onClick={() => setPage(number)}
                    className={`size-10 rounded-full border border-brand-primary/40 text-sm ${
                      page === number
                        ? "bg-brand-primary text-white"
                        : "text-brand-primary"
                    }`}
                  >
                    {number}
                  </button>
                );
              })}

              <button
                type="button"
                aria-label="Next page"
                disabled={page === pageCount}
                onClick={() => setPage((previous) => previous + 1)}
                className="flex size-10 items-center justify-center rounded-full border border-brand-primary/40 text-brand-primary disabled:opacity-30"
              >
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
}