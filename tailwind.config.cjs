/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'Inter',
      },
      colors: {
        primary: '#D3F36B',
        secondary: '#24282C',
        tertiary: '#F7F6F0',
        info: '#FBFBFB'
      }
    }
  },
  plugins: []
};