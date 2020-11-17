export default {
  head: {
    titleTemplate: '%s · Cuestión Pública',
  },
  router: {
    base: '/ya-no-estoy-aqui/',
    prefetchLinks: false,
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  generate: {
    dir: 'docs',
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
