import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/images/logo.png"
        alt={`${siteConfig.name} - ${siteConfig.tagline}`}
        width={175}
        height={94}
        priority={priority}
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
