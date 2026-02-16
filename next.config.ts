import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // This creates the 'out' folder during build
  images: {
    unoptimized: true, // Necessary for static export unless using a custom loader
  },
};

export default nextConfig;
