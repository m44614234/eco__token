const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eco-token-omega.vercel.app",
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
            value: "https://eco-token-omega.vercel.app", // یا * برای همه دامنه‌ها
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

module.exports = withNextIntl(nextConfig);


