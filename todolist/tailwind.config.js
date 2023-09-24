/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Nexa' : ['Nexa'],
      'Haepa': ['Haepa'],
    },
    extend: {
      dropShadow: {
        '3xl': '0px 2px 5px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'modal-bg': '#243c5a',
        'button-bg': '#E6E6FA',
        'first': '#CCE1FF',
        'second': '#90AFFF'
      },
      margin: {
        '90': '50rem',
      }
    },
    screens: {
      sm: { min: "0px", max: "425px" },
      md: { min: "425px", max: "768px" },
      lg: { min: "768px" },
    },
  },
  plugins: [],
}

