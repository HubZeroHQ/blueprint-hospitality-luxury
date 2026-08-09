import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Supporting editorial plates are first-party SVGs authored for this
     * repository, so the optimiser is allowed to serve them. The accompanying
     * policy sandboxes SVGs, refuses scripts, and serves direct requests as
     * attachments.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
