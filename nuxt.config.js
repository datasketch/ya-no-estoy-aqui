import { getData } from './api';

export default {
  head: {
    titleTemplate: '%s · Cuestión Pública',
    link: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
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
        name: 'description',
        content:
          'Espacio en el que construimos In Memoriams  de las 237 mujeres víctimas de violencia feminicida, dentro del periodo en el que la cuarentena por COVID-19 fue más estricto en el país. Nos basamos en la metodología y casos presentados por el Observatorio de Feminicidios Colombia, al tiempo que buscamos a sus familiares y amigos para reconstruir los perfiles de ellas: las que ya no están.',
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
