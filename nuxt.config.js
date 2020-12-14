import { getData } from './api';

export default {
  head: {
    titleTemplate: '%s · Cuestión Pública',
    link: [
      {
        rel: 'shortcut icon',
        href: 'favicon.ico',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        href: 'favicon.ico',
        type: 'image/x-icon',
      },
    ],
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        property: 'og:type',
        content: 'website',
        hid: 'og:type',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
        hid: 'twitter:card',
      },
    ],
  },
  router: {
    base: '/ya-no-estoy-aqui/',
    prefetchLinks: false,
  },
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'],
  generate: {
    dir: 'docs/ya-no-estoy-aqui',
    async routes() {
      const { victims } = await getData();
      return victims.map((v) => `/${v.slug}`);
    },
  },
  target: 'static',
  ssr: true,
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleAnalytics: {
    id: 'UA-115081321-1',
  },
};
