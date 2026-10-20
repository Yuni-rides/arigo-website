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
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { StoreBadge } from "@/components/ui";
import {
  appLinks,
  footerBottom,
  footerColumns,
  footerContact,
  footerDescription,
  footerNewsletter,
  socialLinks,
} from "@/config/footer";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/logo";

const GRID = "grid gap-12 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1.25fr_1fr_2.3fr] lg:gap-x-8 lg:gap-y-0";

const iconBox = "grid place-items-center rounded-md bg-[#5F6B88] text-white";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      {/* Main area */}
      <div>
        <div className="px-6 lg:px-12">
          <div className={`${GRID} relative z-10 pt-14 pb-12 lg:pb-0`}>
            {/* Brand */}
            <div>
              <Logo className="[&_img]:h-16" />

              <p className="mt-6 max-w-[270px] text-sm leading-[22px] text-white">{footerDescription}</p>

              <h3 className="mt-4 text-[17px] font-semibold text-white">Contact Us:</h3>
              <ul className="mt-5 flex flex-wrap gap-x-14 gap-y-3">
                {[
                  { icon: Phone, ...footerContact.phone },
                  { icon: Mail, ...footerContact.email },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="flex items-center gap-4 text-[13px] text-white hover:text-brand-primary"
                    >
                      <span className={`${iconBox} size-10`}>
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
              <div key={column.heading} className="lg:pt-6">
                <h3 className="text-[17px] font-semibold text-white">{column.heading}</h3>
                <span aria-hidden className="mt-2 block h-px w-16 bg-brand-primary" />
                <ul className="mt-7 space-y-2">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block text-sm leading-5 text-white transition-colors hover:text-brand-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Stay connected */}
            <div className="relative lg:pt-6 lg:pl-8">
              <span aria-hidden className="absolute top-6 left-0 hidden h-60 w-px bg-white/40 lg:block" />

              <h3 className="text-[17px] font-semibold text-white">{footerNewsletter.heading}</h3>
              <span aria-hidden className="mt-2 block h-px w-16 bg-brand-primary" />
              <p className="mt-6 max-w-[270px] text-sm leading-[22px] text-white">
                {footerNewsletter.description}
              </p>
              <div className="mt-5 max-w-[260px]">
                <NewsletterForm />
              </div>

              <ul className="mt-5 flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.id];
                  return (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`${iconBox} size-10 transition-colors hover:bg-brand-primary`}
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <StoreBadge href={appLinks.googlePlay} small="GET IT ON" name="Google Play">
                  <GooglePlayIcon className="size-6" />
                </StoreBadge>
                <StoreBadge href={appLinks.appStore} small="Download on the" name="App Store">
                  <AppleIcon className="size-6" />
                </StoreBadge>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration: flush right, bottom border se chipki hui */}
        <div className="pointer-events-none relative ml-auto hidden aspect-[1086/240] w-[75%] max-w-[1086px] select-none lg:-mt-9 lg:block">
          <Image
            src="/images/footerAvatar.png"
            alt=""
            fill
            sizes="75vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Bottom bar: tagline Resources column ke start se align hoti hai */}
      <div className="border-t border-white/30">
        <div className={`${GRID} px-6 py-6 text-sm text-white lg:gap-y-0 lg:px-12`}>
          <p className="lg:col-span-3">{footerBottom.copyright(new Date().getFullYear())}</p>
          <p className="lg:col-span-2 xl:whitespace-nowrap">{footerBottom.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
