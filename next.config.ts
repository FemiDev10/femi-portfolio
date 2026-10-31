import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The Bop Expo app's web export lives in public/bop-live as a single-page app;
     any /bop-live route that isn't a file serves its index.html. */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        { source: "/bop-live", destination: "/bop-live/index.html" },
        { source: "/bop-live/:path*", destination: "/bop-live/index.html" },
      ],
    };
  },
};

export default nextConfig;
