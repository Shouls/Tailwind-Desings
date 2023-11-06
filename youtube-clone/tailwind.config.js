/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: '#0F0F0F',
        'dark-light': '#282828'
      },
      fontFamily:{
        roboto: ['roboto', 'sans']
      }
    },
  },
  plugins: [],
}