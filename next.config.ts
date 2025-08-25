import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pokemontcg.io",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "images.pokemontcg.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "product-images.tcgplayer.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "product-images.tcgplayer.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.tcgplayer-cdn.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "static.tcgplayer-cdn.com",
        pathname: "/**",
      },
      // Add more hosts here if your API returns from others
    ],
  },
};

export default nextConfig;
