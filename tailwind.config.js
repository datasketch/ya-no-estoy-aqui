module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sizzling-red': '#ef5d60',
        'wild-blue-yonder': '#a8aace',
        'silver-chalice': '#b2b2b2',
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
