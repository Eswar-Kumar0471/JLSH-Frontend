/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
