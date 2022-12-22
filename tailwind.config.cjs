/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-20px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      colors: {
        lightOrange: "#F19E6B",
        darkOrange: "#DE6B48",
        lightBlue: "#43cea2",
        darkBlue: "#185a9d",
        dark: "#111827",
      },
      animation: {
        floating: "float 4s linear infinite",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
