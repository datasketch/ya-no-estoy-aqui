module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'sizzling-red': '#ef5d60',
        'wild-blue-yonder': '#a8aace',
        platinum: '#e8e9eb',
        purple: '#6c3d7e',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        charter: ['Charter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
