import type { NextConfig } from "next";

// Configure Next.js to output a fully static export so we can deploy to Firebase Hosting without Functions.
const nextConfig: NextConfig = {
  output: "export",
  // If you later use next/image, unoptimized ensures images work with static export.
  images: { unoptimized: true },
};

export default nextConfig;
