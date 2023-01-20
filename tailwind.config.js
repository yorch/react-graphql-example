const defaultConfig = require('tailwindcss/defaultConfig');

/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['index.html', 'src/**/*.tsx'],
  theme: {
    fontFamily: {
      lato: ['Lato', ...defaultConfig.theme.fontFamily.sans],
    },
    colors: ({ theme }) => ({
      ...theme.colors,
      primary: 'var(--color-primary)',
    }),
  },
  experimental: { optimizeUniversalDefaults: true },
};

module.exports = config;
