import { AreasSection } from "./areas-section";
import { AudiencesSection } from "./audiences-section";
import { CoreValuesSection } from "./core-values-section";
import { DownloadAppSection } from "./download-app-section";
import { HeroSection } from "./hero-section";
import { StoriesSection } from "./stories-section";
import { TrustedSection } from "./trusted-section";
import { WhyChoosingSection } from "./why-choosing-section";

export function HomeView() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <CoreValuesSection />
      <AreasSection />
      <WhyChoosingSection />
      <AudiencesSection />
      <StoriesSection />
      <DownloadAppSection />
    </>
  );
}
