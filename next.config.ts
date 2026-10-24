import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Service pages renamed to match the client's flyer
  redirects() {
    return [
      ["trips", "outings"],
      ["housework", "shopping"],
      ["gardening", "community"],
      ["dog-walking", "prescriptions"],
    ].map(([from, to]) => ({
      source: `/types-of-support/${from}`,
      destination: `/types-of-support/${to}`,
      permanent: false,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
