import QRCode from "qrcode";

import { cn } from "@/lib/utils";

type QrCodeProps = { value: string; className?: string; label?: string };

/** Server-rendered SVG QR code. Rendered once at build time - no client bundle cost. */
export async function QrCode({ value, className, label }: QrCodeProps) {
  const svg = await QRCode.toString(value, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#151D32", light: "#00000000" },
  });

  return (
    <div
      role="img"
      aria-label={label ?? `QR code for ${value}`}
      className={cn("[&_svg]:h-full [&_svg]:w-full", className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
