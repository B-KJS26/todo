/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.html'
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "425px" },
      md: { min: "425px", max: "768px" },
      lg: { min: "768px" },
    },
  },
  plugins: [ require("tailwind-scrollbar-hide") ],
}

