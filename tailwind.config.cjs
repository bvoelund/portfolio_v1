/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        128: "512px",
      },
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
        lightBlue: "#6bd6f0",
        dark: "#050F1D",
        darker: "#050D18",
        yellow: "#FFC857",
        purple: "#6E07F3",
        "3dShirtColor": "#4B8DC7",
      },
      animation: {
        "floating-slow": "float 7s linear infinite",
        "floating-medium": "float 5.5s linear infinite",
        "floating-normal": "float 4s linear infinite",
        "floating-fast": "float 2s linear infinite",
      },
      screens: {
        "2xl": "1536px",
      },
      backgroundImage: {
        "layer-1": "url('/src/assets/dividers/darkToWhite.svg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
