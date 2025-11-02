import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@reactwave/ui-web", "@reactwave/configs"],
  experimental: { externalDir: true }
};

export default nextConfig;
