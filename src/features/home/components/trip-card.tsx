import Image from "next/image";

import type { Trip } from "../types";

/** Square photo crop - inline so a missing utility class can never collapse it. */
const PHOTO_CROP = { aspectRatio: "1 / 1" };

/** Square photo with a navy caption plate floating near its bottom edge. */
export function TripCard({ label, image }: Trip) {
  return (
    <article
      className="relative w-full overflow-hidden rounded-[16px] shadow-[0_14px_30px_-16px_rgb(21_29_50/0.45)]"
      style={PHOTO_CROP}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 30vw, 90vw"
        className="object-cover"
      />

      {/* Caption floats inside the photo: inset from the left, right and bottom edges */}
      <div className="absolute inset-x-3 bottom-3 rounded-[12px] bg-brand-secondary px-8 py-6">
        <h3 className="text-[22px] leading-snug font-normal text-white">{label}</h3>
      </div>
    </article>
  );
}
