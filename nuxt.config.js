import { getData } from './api';

export default {
  head: {
    titleTemplate: '%s · Cuestión Pública',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
        hid: 'viewport',
      },
    ],
  },
  router: {
    base: '/ya-no-estoy-aqui/',
    prefetchLinks: false,
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  generate: {
    dir: 'docs',
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
};
