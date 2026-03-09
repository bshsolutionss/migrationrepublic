/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Fast image loading
  },
  compress: true,
  poweredByHeader: false, // Security
};

module.exports = nextConfig;
