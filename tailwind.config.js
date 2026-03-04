/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#FCFAF8",
        brown: {
          DEFAULT: "#3D1E00",
          light: "#5C3A1E",
        },
        orange: {
          DEFAULT: "#FF8552",
          dark: "#E86F3A",
        },
        salmon: {
          DEFAULT: "#F4B9A7",
          light: "#FAE0D8",
        },
        cream: "#F5EDE8",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

