import { Mail, Phone } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { footerContact } from "@/config/footer";

import { contactSupportContent } from "../content/contact-support.content";
import { ContactForm } from "./contact-form";

export function ContactSupportSection() {
  const { title, description, headerArt, office } = contactSupportContent;

  const details = [
    { icon: Phone, ...footerContact.phone },
    { icon: Mail, ...footerContact.email },
  ];

  return (
    <section id="contact-support" className="scroll-mt-24 bg-background py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[16px] shadow-[0_20px_50px_-24px_rgb(21_29_50/0.45)]">
          {/* Orange header */}
          <div className="relative flex items-center bg-[#DB6650] px-7 py-7 sm:px-10">
            <div className="relative z-10 max-w-md">
              <h2 className="text-2xl font-bold text-white sm:text-[32px]">{title}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/90">{description}</p>
            </div>
            <Image
              src={headerArt.src}
              alt=""
              aria-hidden
              width={headerArt.width}
              height={headerArt.height}
              className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-auto select-none sm:block"
            />
          </div>

          {/* Navy details panel + white form (white panel ka top-left corner navy ke upar round hota hai) */}
          <div className="grid bg-brand-secondary lg:grid-cols-[minmax(0,36%)_minmax(0,1fr)]">
            <div className="relative flex min-h-[420px] flex-col px-7 pt-8 pb-40 text-white lg:min-h-[480px] lg:pb-0">
              <h3 className="text-xl leading-snug sm:text-[22px] text-white">
                <span className="font-semibold ">{office.city}</span>
                <br />
                {office.suffix}
              </h3>

              <ul className="mt-10 space-y-5">
                {details.map(({ icon: Icon, label, href }) => (
                  <li key={href}>
                    <a href={href} className="flex items-center gap-6 text-sm hover:text-brand-primary">
                      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#DB6650] text-white">
                        <Icon className="size-4" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-[220px] text-sm leading-relaxed text-white/90">{office.notice}</p>

              <Image
                src={office.art.src}
                alt={office.art.alt}
                width={office.art.width}
                height={office.art.height}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full select-none"
              />
            </div>

            <div className="bg-white px-6 py-8 sm:px-8 sm:py-9 lg:rounded-tl-[24px]">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}