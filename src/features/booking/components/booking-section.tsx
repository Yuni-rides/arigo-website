import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { bookingContent } from "../content/booking.content";
import { BookingForm } from "./booking-form";

export function BookingSection() {
  const { title, description, photo, headerArt } = bookingContent;

  return (
    <section id="request" className="scroll-mt-24 bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[16px] bg-white shadow-[0_20px_50px_-24px_rgb(21_29_50/0.45)]">
          <div className="relative flex items-center bg-[#DB6650] px-7 py-7 sm:px-10">
            <div className="relative z-10 max-w-md">
              <h2 className="text-2xl font-bold text-white sm:text-[28px]">{title}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/90">{description}</p>
            </div>
            <Image
              src={headerArt.src}
              alt={headerArt.alt}
              width={headerArt.width}
              height={headerArt.height}
              className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-auto select-none sm:block"
            />
          </div>

          <div className="grid lg:grid-cols-[minmax(0,36%)_minmax(0,1fr)]">
            <div className="relative hidden min-h-[520px] lg:block">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="px-6 py-8 sm:px-7 sm:py-9">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
