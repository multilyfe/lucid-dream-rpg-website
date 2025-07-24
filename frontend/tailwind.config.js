/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};