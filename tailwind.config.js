/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px", //mobile
      md: "768px",
      lg: "1020px",
      xl: "1440px", //desktop
    },

    extend: {
      colors: {
        veryDark: "rgb(21, 21, 21)",
        darkGray: "rgb(36, 36, 36)",
        lightGray: "rgb(217, 217, 217)",
        themeGreen: "rgb(78, 225, 160)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        headingXL: "88px",
        headingL: "48px",
        headingM: "24px",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
