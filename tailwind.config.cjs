/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url("/src/assets/bg-home.jpg")'
      }
    },
  },
  plugins: [],
}
