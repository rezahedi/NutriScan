/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [{hostname: 'images.openfoodfacts.org'}],
  },
}

module.exports = nextConfig
