"use client";

import { useState } from "react";

import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/brand-icons";

type BlogShareProps = {
  /** Absolute URL of the post. */
  url: string;
  title: string;
};

const ICON_CLASS = "size-7 transition-colors";

/**
 * Share buttons for the post.
 *
 * Facebook, LinkedIn and X take a share URL. Instagram has no web share
 * endpoint, so that one uses the Web Share API where the browser supports it
 * (phones, mostly) and falls back to copying the link.
 */
export function BlogShare({ url, title }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const targets = [
    {
      id: "facebook",
      label: "Share on Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      id: "linkedin",
      label: "Share on LinkedIn",
      Icon: LinkedinIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      id: "x",
      label: "Share on X",
      Icon: XIcon,
      href: `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
  ] as const;

  async function shareToInstagram() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // The person dismissed the sheet - fall through to copying.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open("https://instagram.com", "_blank", "noopener,noreferrer");
    }
  }

  return (
    <ul className="mt-3 flex items-center gap-3.5">
      <li>
        <button
          type="button"
          onClick={shareToInstagram}
          aria-label={copied ? "Link copied" : "Share on Instagram"}
          title={copied ? "Link copied" : "Share on Instagram"}
          className="block cursor-pointer text-white hover:text-brand-primary"
        >
          <InstagramIcon className={ICON_CLASS} />
        </button>
      </li>

      {targets.map(({ id, label, Icon, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="block text-white hover:text-brand-primary"
          >
            <Icon className={ICON_CLASS} />
          </a>
        </li>
      ))}
    </ul>
  );
}
