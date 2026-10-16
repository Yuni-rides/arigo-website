import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "../types";

const IMAGE_WASH = {
  backgroundImage:
    "radial-gradient(ellipse 90% 120% at 0% 20%, rgba(216, 90, 68, 0.75) 0%, rgba(216, 90, 68, 0.15) 70%, rgba(0, 0, 0, 0) 100%)",
};

const IMAGE_CROP = { aspectRatio: "293 / 187" };

export function BlogCard({ title, category, date, href, image }: BlogPost) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_10px_25px_-5px_rgba(21,29,50,0.08)] transition-all duration-300 hover:bg-[#D85A44] hover:shadow-[0_15px_30px_-5px_rgba(216,90,68,0.35)]"
    >
      <div className="relative w-full overflow-hidden" style={IMAGE_CROP}>
        <Image
          src={image.src}
          alt={title}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <span aria-hidden className="absolute inset-0" style={IMAGE_WASH} />

        <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-md bg-[#151D32] px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
          <CalendarDays className="size-3.5" aria-hidden />
          <span>{date}</span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4.5 pt-3.5 transition-colors duration-300 group-hover:bg-[#D85A44]">
        <div>
          <p className="text-[12px] font-medium text-gray-500 transition-colors duration-300 group-hover:text-white/90">
            {category}
          </p>

          <h3 className="mt-1 line-clamp-2 text-[15px] leading-snug font-medium text-[#151D32] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
