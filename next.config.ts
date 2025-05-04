import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./styles"],
    prependData: `@import "./styles/main.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dyp8gtllq/**",
      },
    ],
  },
};

export default nextConfig;
