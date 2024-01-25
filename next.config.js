/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'it-incubator.storage.yandexcloud.net',
        pathname: '**',
        protocol: 'https',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: false,
}

module.exports = {
  ...nextConfig,
}
