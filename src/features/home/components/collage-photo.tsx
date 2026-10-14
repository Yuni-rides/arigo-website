import Image from "next/image";

import type { CollagePhoto as CollagePhotoType } from "../types";

/**
 * Renders only the photograph inside an asset that ships with a white frame.
 * The wrapper takes the content box's aspect ratio; the image is scaled up and
 * offset so the frame falls outside the wrapper and gets clipped.
 *
 * Percentages are all relative to the wrapper's WIDTH (margins resolve that way),
 * so the crop holds at every breakpoint without magic numbers.
 */
export function CollagePhoto({ src, alt, width, height, content }: CollagePhotoType) {
  return (
    <div
      className="relative overflow-hidden rounded-[10px]"
      style={{ aspectRatio: `${content.width} / ${content.height}` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 30vw, 50vw"
        style={{
          width: `${(width / content.width) * 100}%`,
          maxWidth: "none",
          height: "auto",
          marginLeft: `${(-content.x / content.width) * 100}%`,
          marginTop: `${(-content.y / content.width) * 100}%`,
        }}
      />
    </div>
  );
}
