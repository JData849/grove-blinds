import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ enable strict type safety for routes (you already had this)
  typedRoutes: true,

  // ✅ fix image domain access
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ✅ strongly recommended for builds on Netlify & Vercel
  eslint: {
    ignoreDuringBuilds: true, // prevents type-lint blocking Netlify builds
  },
  typescript: {
    ignoreBuildErrors: false, // keep type safety
  },
};

export default nextConfig;

