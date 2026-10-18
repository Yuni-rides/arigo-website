// "use client";

// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Container } from "@/components/ui";

// import { safetySectionContent } from "../content/safety-section.content";

// const SLIDE_WIDTH = 88;

// export function SafetySection() {
//   const { title, highlight, description, slideDuration, services } = safetySectionContent;
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const prev = () => setIndex((i) => (i - 1 + services.length) % services.length);
//   const next = () => setIndex((i) => (i + 1) % services.length);

//   useEffect(() => {
//     if (paused || services.length < 2) return;
//     const id = window.setTimeout(() => setIndex((i) => (i + 1) % services.length), slideDuration * 1000);
//     return () => window.clearTimeout(id);
//   }, [index, paused, services.length, slideDuration]);

//   return (
//     <section id="safety" className="scroll-mt-24 bg-background pt-16 sm:pt-20">
//       <Container>
//         <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
//           <h2 className="border-l-4 border-brand-primary pl-4 text-3xl leading-tight font-normal text-brand-secondary sm:text-[42px]">
//             {title}
//             <br />
//             {highlight}
//           </h2>
//           <p className="max-w-[16rem] text-[14px] leading-relaxed text-brand-secondary sm:text-[15px]">
//             {description}
//           </p>
//         </div>
//       </Container>

//       <div
//         className="mt-10 bg-[#FFC6BC] py-12 sm:py-16"
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//       >
//         <div className="overflow-hidden pl-5 sm:pl-10 lg:pl-[10%]">
//           <motion.div
//             className="flex"
//             animate={{ x: `-${index * SLIDE_WIDTH}%` }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           >
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="shrink-0 pr-6 sm:pr-10 lg:pr-16"
//                 style={{ flexBasis: `${SLIDE_WIDTH}%` }}
//               >
//                 <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
//                   <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px]">
//                     <Image
//                       src={service.image.src}
//                       alt={service.image.alt}
//                       fill
//                       sizes="(min-width: 1024px) 40vw, 90vw"
//                       className="object-cover"
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-medium text-brand-primary sm:text-[32px]">
//                       {service.title}
//                     </h3>
//                     <ul className="mt-6 space-y-4">
//                       {service.features.map(({ icon, label }) => (
//                         <li key={label} className="flex items-center gap-4">
//                           <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-primary">
//                             <span
//                               aria-hidden
//                               style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
//                               className="size-5 bg-white [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
//                             />
//                           </span>
//                           <span className="text-[14px] leading-snug text-brand-secondary sm:text-[15px]">
//                             {label}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start lg:pl-[10%]">
//           <button
//             type="button"
//             aria-label="Previous service"
//             onClick={prev}
//             className="grid size-10 cursor-pointer place-items-center rounded-md bg-brand-secondary text-white transition-opacity hover:opacity-90"
//           >
//             <ArrowLeft className="size-5" />
//           </button>
//           <button
//             type="button"
//             aria-label="Next service"
//             onClick={next}
//             className="grid size-10 cursor-pointer place-items-center rounded-md bg-white text-brand-secondary transition-colors hover:bg-white/80"
//           >
//             <ArrowRight className="size-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui";

import { safetySectionContent } from "../content/safety-section.content";

const SLIDE_WIDTH = 88;

export function SafetySection() {
  const { title, highlight, description, slideDuration, services } = safetySectionContent;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + services.length) % services.length);
  const next = () => setIndex((i) => (i + 1) % services.length);

  useEffect(() => {
    if (services.length < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % services.length), slideDuration * 1000);
    return () => window.clearTimeout(id);
  }, [index, services.length, slideDuration]);

  return (
    <section id="safety" className="scroll-mt-24 bg-background pt-16 sm:pt-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <h2 className="border-l-4 border-brand-primary pl-4 text-3xl leading-tight font-normal text-brand-secondary sm:text-[42px]">
            {title}
            <br />
            {highlight}
          </h2>
          <p className="max-w-[16rem] text-[14px] leading-relaxed text-brand-secondary sm:text-[15px]">
            {description}
          </p>
        </div>
      </Container>

      <div className="mt-10 bg-[#FFC6BC] py-10 sm:py-14">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * SLIDE_WIDTH}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="shrink-0 pr-[2%] pl-[6%] lg:pl-[10%]"
                style={{ flexBasis: `${SLIDE_WIDTH}%` }}
              >
                <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-brand-primary sm:text-[32px]">
                      {service.title}
                    </h3>
                    <ul className="mt-5 space-y-3.5">
                      {service.features.map(({ icon, label }) => (
                        <li key={label} className="flex items-center gap-4">
                          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-primary">
                            <span
                              aria-hidden
                              style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
                              className="size-5 bg-white [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]"
                            />
                          </span>
                          <span className="text-[14px] leading-snug text-brand-secondary sm:text-[15px]">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous service"
            onClick={prev}
            className="grid size-9 cursor-pointer place-items-center rounded-md bg-brand-secondary text-white transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next service"
            onClick={next}
            className="grid size-9 cursor-pointer place-items-center rounded-md bg-white text-brand-secondary transition-colors hover:bg-white/80"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
