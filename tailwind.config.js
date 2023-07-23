/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './force-app/main/default/lwc/**/*.{html,js}',
    './postcss/**/*.css'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
  // Use below env to generate full tailwind css for prototyping
  ...(process.env.NODE_ENV == 'playground' && {
    safelist: [{ pattern: /.*/ }]
  })
};
