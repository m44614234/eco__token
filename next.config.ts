import type { NextConfig } from "next";



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eco-token-indol.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*", 
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://eco-token-indol.vercel.app", // یا * برای همه دامنه‌ها
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig as NextConfig;


