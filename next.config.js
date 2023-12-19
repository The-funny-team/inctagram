/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: '/not-found',
        source: '/:path*',
      },
    ]
  },
}

module.exports = {
  ...nextConfig,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  output: 'standalone',
}
