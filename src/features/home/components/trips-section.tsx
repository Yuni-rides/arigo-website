import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { tripsContent } from "../content/trips.content";
import { TripCard } from "./trip-card";

export function TripsSection() {
  const { title, trips } = tripsContent;

  return (
    <section id="trips" className="scroll-mt-24 bg-background py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-medium text-brand-secondary sm:text-[52px]">{title}</h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20" stagger={0.08}>
          {trips.map((trip) => (
            <RevealItem key={trip.id}>
              <TripCard {...trip} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
