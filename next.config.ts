// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Allow .mdx as pages/routes alongside .ts/.tsx
  pageExtensions: ["tsx", "ts", "mdx"],

  // Ensure MDX works cleanly in dev with Turbopack
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["@mdx-js/loader"],
      },
    },
  },

  /* keep any other config options you add later here */
};

export default withMDX(nextConfig);
