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
      },
      animation: {
        floating: "float 4s linear infinite",
      },
      screens: {
        "2xl": "1536px",
      },
      backgroundImage: {
        space: "url('/src/assets/images/spacebackground.jpg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
