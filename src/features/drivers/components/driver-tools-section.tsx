// import Image from "next/image";

// import { Reveal, RevealItem, Stagger } from "@/components/motion";
// import { Container } from "@/components/ui";

// import { driverToolsContent } from "../content/driver-tools.content";

// export function DriverToolsSection() {
//   const { title, highlight, description, tools } = driverToolsContent;

//   return (
//     <section id="driver-tools" className="scroll-mt-24 bg-brand-secondary py-20 sm:py-24">
//       <Container>
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-[28px] leading-[1.25] font-medium text-white sm:text-[34px]">
//             {title}
//             <span className="block text-brand-primary">{highlight}</span>
//           </h2>
//           <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/85">{description}</p>
//         </Reveal>

//         <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12" stagger={0.1}>
//           {tools.map((tool) => (
//             <RevealItem key={tool.id} className="h-full">
//               <article className="flex h-full flex-col items-center rounded-[18px] bg-[#FAF6F0] px-7 py-10 text-center">
//                 <span className="flex h-[72px] items-center justify-center">
//                   <Image
//                     src={tool.icon.src}
//                     alt=""
//                     aria-hidden
//                     width={tool.icon.width}
//                     height={tool.icon.height}
//                     className="h-[64px] w-auto object-contain"
//                   />
//                 </span>

//                 <h3 className="mt-8 text-lg font-medium text-brand-primary">{tool.title}</h3>
//                 <p className="mt-3 text-[13px] leading-relaxed text-brand-secondary/85">{tool.description}</p>
//               </article>
//             </RevealItem>
//           ))}
//         </Stagger>
//       </Container>
//     </section>
//   );
// }

import Image from "next/image";

import { Reveal, RevealItem, Stagger } from "@/components/motion";
import { Container } from "@/components/ui";

import { driverToolsContent } from "../content/driver-tools.content";

export function DriverToolsSection() {
  const { title, highlight, tools } = driverToolsContent;

  return (
    <section id="driver-tools" className="scroll-mt-24 bg-brand-secondary py-16 sm:py-[72px]">
      <Container>
        <Reveal className="mx-auto text-center">
          <h2 className="text-[28px] leading-[1.05] font-medium tracking-[-0.025em] text-white sm:text-[40px]">
            {title}
            <span className="block text-[#FF5638]">{highlight}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[280px] text-[14px] leading-[1.4] font-normal text-white">
            Arigo handles the admin, so drivers can focus on the road and the patients in their care.
          </p>
        </Reveal>

        <Stagger
          className="mx-auto mt-12 grid  grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10"
          stagger={0.1}
        >
          {tools.map((tool) => (
            <RevealItem key={tool.id} className="h-full">
              <article className="flex h-full min-h-[358px] flex-col items-center rounded-[20px] bg-white px-8 pt-7 pb-8 text-center shadow-[0_8px_14px_rgba(0,0,0,0.12)]">
                <div className="flex h-[160px] w-full shrink-0 items-center justify-center">
                  <Image
                    src={tool.icon.src}
                    alt={tool.icon.alt}
                    width={tool.icon.width}
                    height={tool.icon.height}
                    className={
                      tool.id === "workflows"
                        ? "h-[96px] w-auto object-contain"
                        : "h-[120px] w-[150px] object-contain"
                    }
                  />
                </div>

                <h3 className="mt-6 text-[18px] leading-[1.3] font-medium text-[#FF5638]">
                  {tool.id === "performance-feedback" ? (
                    <>
                      Get Performance
                      <br />
                      Feedback
                    </>
                  ) : (
                    tool.title
                  )}
                </h3>

                <p className="mx-auto mt-2 max-w-[230px] text-[14px] leading-[1.5] font-normal text-[#535363]">
                  {tool.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
