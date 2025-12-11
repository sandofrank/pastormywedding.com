import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles optimizations automatically
  // Remove 'output: export' for Vercel deployment
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};

export default nextConfig;
