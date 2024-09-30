/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  env: {
  },
};

module.exports = nextConfig;
