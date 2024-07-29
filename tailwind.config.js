/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],  
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Nunito"', ...defaultTheme.fontFamily.sans],
        'sans': ['"Quicksand"', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [],
}

