import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AppleIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/brand-icons";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Container, StoreBadge } from "@/components/ui";
import {
  appLinks,
  footerBottom,
  footerColumns,
  footerContact,
  footerDescription,
  footerNewsletter,
  socialLinks,
} from "@/config/footer";

const headingClass =
  "text-[15px] font-semibold text-white underline decoration-brand-primary decoration-1 underline-offset-[10px]";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-secondary text-white">
      <Image
        src="/images/footerAvatar.png"
        alt=""
        width={1086}
        height={399}
        sizes="(min-width: 1280px) 60vw, 100vw"
        className="pointer-events-none absolute right-0 bottom-12 hidden w-[62%] max-w-[900px] select-none lg:block"
      />

      <Container className="relative">
        <div className="grid gap-12 pt-14 pb-10 lg:grid-cols-[1.25fr_0.8fr_0.9fr_0.9fr_1.15fr] lg:gap-8">
          <div>
            <Logo className="[&_img]:h-16" />
            <p className="mt-6 max-w-[290px] text-sm leading-relaxed text-white/80">{footerDescription}</p>

            <h3 className="mt-10 text-sm font-semibold text-white">Contact Us:</h3>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Phone, ...footerContact.phone },
                { icon: Mail, ...footerContact.email },
              ].map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-sm text-white/90 hover:text-brand-primary"
                  >
                    <span className="grid size-9 place-items-center rounded-md bg-white/15 text-white">
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className={headingClass}>{column.heading}</h3>
              <ul className="mt-5 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-white/80 transition-colors hover:text-brand-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:border-l lg:border-white/25 lg:pl-8">
            <h3 className={headingClass}>{footerNewsletter.heading}</h3>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/80">
              {footerNewsletter.description}
            </p>
            <div className="mt-4 max-w-xs">
              <NewsletterForm />
            </div>

            <ul className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-9 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-brand-primary"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge href={appLinks.googlePlay} small="GET IT ON" name="Google Play">
                <GooglePlayIcon className="size-6" />
              </StoreBadge>
              <StoreBadge href={appLinks.appStore} small="Download on the" name="App Store">
                <AppleIcon className="size-6" />
              </StoreBadge>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/25">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerBottom.copyright(new Date().getFullYear())}</p>
          <p>{footerBottom.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
