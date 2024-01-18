/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    domains: ['it-incubator.storage.yandexcloud.net'],
  },
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
}
