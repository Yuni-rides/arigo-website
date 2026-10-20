import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";

import { driverApplicationContent } from "../content/driver-application.content";
import { DriverApplicationForm } from "./driver-application-form";

export function DriverApplicationSection() {
  const { title, description, photo, headerArt } =
    driverApplicationContent;

  return (
    <section
      id="driver-application"
      className="scroll-mt-24 bg-[#FFC6BC] py-14 sm:py-20"
    >
      <Container>
        <Reveal className="mx-auto max-w-[1120px] overflow-hidden rounded-[16px]">
          {/* Header */}
          <div className="relative flex min-h-[150px] items-center overflow-hidden bg-[#F2694D] px-6 py-6 sm:px-10">
            <div className="relative z-10 sm:max-w-[62%]">
              <h2 className="text-[30px] leading-tight font-semibold tracking-[-0.025em] text-white lg:text-[44px]">
                {title}
              </h2>

              <p className="mt-2 max-w-[550px] text-[13px] leading-relaxed font-light text-white lg:text-[15px]">
                {description}
              </p>
            </div>

            <Image
              src={headerArt.src}
              alt=""
              aria-hidden="true"
              width={headerArt.width}
              height={headerArt.height}
              className="pointer-events-none absolute right-4 bottom-3 hidden h-[115px] w-auto max-w-[35%] object-contain select-none sm:block"
            />
          </div>

          {/* Photo and form */}
          <div className="relative grid bg-background lg:grid-cols-[minmax(0,35%)_minmax(0,1fr)]">
            <div className="relative hidden min-h-[720px] lg:block">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1280px) 392px, 35vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative rounded-[16px] bg-background px-6 py-8 sm:px-10 sm:py-10 lg:-ml-3">
              <DriverApplicationForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}