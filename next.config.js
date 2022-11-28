// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const config = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  publicRuntimeConfig: {},

  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'tailwindui.com',
      'i.ytimg.com',
      'images.unsplash.com',
      'i.pravatar.cc',
    ],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [64, 96, 128, 256, 384],
  },

  swcMinify: true,
}

module.exports = config

console.log('next.config.js', JSON.stringify(config, null, 2))
