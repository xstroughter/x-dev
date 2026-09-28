import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "xdevbuilds.com" }],
        destination: "https://www.xdevbuilds.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
