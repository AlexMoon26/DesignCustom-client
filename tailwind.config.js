/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // eslint-disable-next-line no-undef
      ...require('tailwindcss/colors'),
      "gray-500": "#737070"
    }
  },
  plugins: [],
}
