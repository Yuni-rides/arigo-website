import { AreasSection } from "./areas-section";
import { AudiencesSection } from "./audiences-section";
import { DownloadAppSection } from "./download-app-section";
import { HeroSection } from "./hero-section";
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
      <AreasSection />
      <WhyChoosingSection />
      <AudiencesSection />
      <StoriesSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </>
  );
}
