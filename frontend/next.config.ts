import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sentinel/shared"],
  reactStrictMode: true,
};

export default nextConfig;
