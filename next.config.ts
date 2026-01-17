import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles optimizations automatically
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Improve performance with modular imports
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
};

export default nextConfig;
