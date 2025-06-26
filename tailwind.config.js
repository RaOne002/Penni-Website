/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Trap',  'sans-serif', '-apple-system', 'Roboto', 'Helvetica'],
        poppins: ['Poppins', 'sans-serif'],
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}