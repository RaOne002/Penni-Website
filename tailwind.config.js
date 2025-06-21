/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Trap', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}