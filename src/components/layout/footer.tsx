import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-secondary text-brand-secondary-foreground">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-white/60">{siteConfig.description}</p>
        </div>

        {footerNav.map((group) => (
          <div key={group.heading}>
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-white/90 uppercase">
              {group.heading}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.links.email}`} className="hover:text-brand-primary">
            {siteConfig.links.email}
          </a>
        </Container>
      </div>
    </footer>
  );
}
