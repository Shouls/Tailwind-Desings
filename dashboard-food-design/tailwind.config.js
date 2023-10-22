/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1F1D2B',
        'secondary': '#272837',
        'tertiary': '#EC7C6A',
        'quartitary': '#2F303D'
      }
    },
  },
  plugins: [],
}