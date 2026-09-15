import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  /** Site-relative path, e.g. "/about". Used for canonical + OG url. */
  path?: string;
  /** Site-relative or absolute image URL. Defaults to the generated OG image. */
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Builds a complete, consistent Metadata object for a route.
 * Root layout supplies `metadataBase`, so relative paths resolve correctly.
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  keywords,
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {
  const resolvedTitle = title ?? siteConfig.title;

  return {
    // Omit the key entirely when unset so the root layout `title.default` is inherited.
    ...(title ? { title } : {}),
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: resolvedTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: resolvedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: resolvedTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
  };
}
