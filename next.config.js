/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    domains: ['it-incubator.storage.yandexcloud.net'],
  },
  output: 'standalone',
}
