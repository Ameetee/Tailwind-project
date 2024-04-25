/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Color-primary": "#01051e",
        "Color-primary-light": "#020726",
        "Color-primary-dark": "#010417",
        "Color-secondary": "#ff7d3b",
        "Color-gray": "#333",
        "Color-white": "#fff",
        "Color-blog": "A427DF",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20PX',
        md: "50px"
      }
    }
  },
  plugins: [],
}

