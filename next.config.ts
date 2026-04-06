import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/scratchpad',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
