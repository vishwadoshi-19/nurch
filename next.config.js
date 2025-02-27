/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  output: "standalone", // Remove this line if using default deployment
};

module.exports = nextConfig;
