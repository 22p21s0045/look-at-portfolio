/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['crypto-icon-api.herokuapp.com'],
  },
}

module.exports = nextConfig
