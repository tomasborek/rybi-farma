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
        bg: "#FBFBFB",
        text: "#333",
        main: "#368C79",
        mainDark: "#093737",
        gold: "#CFA656",
        textLight: "#888888",
        textLighter: "#BBBBBB",
        proseLight: "#d1d5db",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
