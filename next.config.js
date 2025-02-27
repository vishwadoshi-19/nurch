/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  output: "standalone", // Remove this line if using default deployment
};

module.exports = nextConfig;
