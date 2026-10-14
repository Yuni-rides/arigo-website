import { BookingSection } from "@/features/booking";
import { AreasSection } from "./areas-section";
import { AudiencesSection } from "./audiences-section";
import { CareSolutionsSection } from "./care-solutions-section";
import { DownloadAppSection } from "./download-app-section";
import { HeroSection } from "./hero-section";
import { PatientPromiseSection } from "./patient-promise-section";
import { RequestCtaSection } from "./request-cta-section";
import { StoriesSection } from "./stories-section";
import { TestimonialsSection } from "./testimonials-section";
import { TripsSection } from "./trips-section";
import { TrustedSection } from "./trusted-section";
import { WhyChoosingSection } from "./why-choosing-section";

export function HomeView() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <TripsSection />
      <RequestCtaSection />
      <AreasSection />
      <BookingSection />
      <WhyChoosingSection />
      <CareSolutionsSection />
      <PatientPromiseSection />
      <StoriesSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </>
  );
}
