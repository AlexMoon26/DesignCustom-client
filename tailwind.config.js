/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-500": "#737070",
      },
      fontFamily: {
        base: ['"Gluten"', "cursive"],
      },
    },
  },
  plugins: [],
};
