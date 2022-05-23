module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Exo 2"', "sans-serif"],
    },
    extend: {
      colors: {
        text: "#333",
        main: "#368C79",
        textLight: "#888888",
        textLighter: "#BBBBBB",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
