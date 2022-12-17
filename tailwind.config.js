/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    "index.html",
  ],
  screens: {
    'sm': {'min': '576px', 'max': '767px'},
    'md': {'min': '768px', 'max': '991px'},
    'lg': {'min': '992px', 'max': '1199px'},
    'xl': {'min': '1200px'},
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
