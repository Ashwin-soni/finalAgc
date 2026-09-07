/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1456E8",
          darkblue: "#0B2A6B",
          green: "#0FA968",
          yellow: "#FFC400",
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
