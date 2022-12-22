/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'Inter',
      },
      colors: {
        primary: '#a1fe6b',
        secondary: '#0f1010',
        tertiary: '#fff',
        info: '#09090a'
      }
    }
  },
  plugins: []
};