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
      colors: {
        Zinc: {
          100: '#efefef',
          300: '#d4d4d8',
        },
        Blue: {
          300: '#90bdff',
          400: '#78a8ee',
          500: '#408dfe',
        },
        Neutral: {
          300: '#d9d9d9',
          350: '#d1d1d1',
          400: '#9f9f9f',
          450: '#b3b3b3',
          500: '#646363',
          550: '#838383',
          600: '#626262',
          800: '#323131',
          850: '#262626',
        },
        Gray: {
          100: '#eeeff4',
          150: '#f5f6fa',
          200: '#edeef3',
        },
        White: '#ffffff',
        Emerald: {
          400: '#03d89f',
        },
        Violet: {
          50: '#f2f0fa',
        },
      },
    },
  },
  plugins: [],
}