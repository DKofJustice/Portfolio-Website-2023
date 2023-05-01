/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': {
          100: "#272727"
        },
        'red': '#EA0931'
      }
    },
  },
  plugins: [],
}

