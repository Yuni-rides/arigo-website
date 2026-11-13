import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Every file in /public/images is already a sized, compressed WebP, so there is
     * nothing left for the optimizer to do. Running it anyway burned through the
     * host's image-transformation quota and served 402s for every photo on the site.
     * Re-encode the sources instead of turning this back on.
     */
    unoptimized: true,
    // Add CMS / CDN hosts here before using next/image with remote URLs.
    remotePatterns: [],
  },
  // Sensible security headers for a marketing site. Tighten CSP once third-party scripts are known.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
