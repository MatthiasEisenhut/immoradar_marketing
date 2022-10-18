/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        yanice: ['Yanice', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        keep_calm: ['Keep Calm', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
