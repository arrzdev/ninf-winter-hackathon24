/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', //allow most of the images to be uploaded
    },
  }
});

module.exports = nextConfig;
