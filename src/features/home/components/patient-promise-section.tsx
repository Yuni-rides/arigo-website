import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Button, Container } from "@/components/ui";
import { scaleIn } from "@/lib/motion/variants";

import { patientPromiseContent } from "../content/patient-promise.content";
import { CollagePhoto } from "./collage-photo";

export function PatientPromiseSection() {
  const { title, cta, photos } = patientPromiseContent;
  const columns = [photos.slice(0, 2), photos.slice(2, 4)];

  return (
    <section id="patient-promise" className="scroll-mt-24 overflow-hidden bg-background py-24">
      <Container>
        <div className="relative">
          <Reveal className="relative z-0 overflow-hidden rounded-[32px] bg-[linear-gradient(130deg,#D85A44_0%,#A74836_32%,#2B2E48_68%,#151D32_100%)] px-8 py-12 sm:px-12 lg:absolute lg:top-[11%] lg:bottom-[7%] lg:left-0 lg:flex lg:w-[100%] lg:flex-col lg:justify-center lg:py-0 lg:pl-[10%]">
            <h2 className="max-w-[390px] text-3xl leading-[1.25] font-medium [text-wrap:wrap] text-white sm:text-4xl lg:text-[56px]">
              {title}
            </h2>
            <Button href={cta.href} className="mt-10 h-[50px] self-start rounded-lg px-12 text-sm lg:mt-14">
              {cta.label}
            </Button>
          </Reveal>

          {/* Photo collage */}
          <Stagger
            // The right-hand column bleeds a little past the container, as in the design.
            className="relative z-10 mt-10 grid grid-cols-[1.09fr_1fr] gap-x-[0.9%] lg:mt-0 lg:-mr-[6%] lg:ml-auto lg:w-[58%]"
            stagger={0.08}
          >
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={columnIndex === 1 ? "flex flex-col gap-4 lg:mt-[31%]" : "flex flex-col gap-4"}
              >
                {column.map((photo) => (
                  <RevealItem key={photo.src} variants={scaleIn}>
                    <CollagePhoto {...photo} />
                  </RevealItem>
                ))}
              </div>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
