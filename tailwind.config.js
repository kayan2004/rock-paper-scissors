/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyishBlue: "rgba(59, 66, 98, 1)",
        blue: "rgba(42, 69, 194, 1)",
        lightblue: "rgba(70, 100, 244, 1)",
        grey: "rgba(86, 84, 104, 1)",
        red: "rgba(157, 22, 52, 1)",
        orange: "rgba(199, 108, 27, 1)",
        pinkred: "rgba(219, 46, 77, 1)",
        orangeyellow: "rgba(235, 159, 14, 1)",
        smallDivBorder: "rgba(186, 191, 212, 1)",
      },
      backgroundImage: {
        "triangle-pattern": "url('/src/assets/images/bg-triangle.svg')",
        "pentagon-pattern": "url('/src/assets/images/bg-pentagon.svg')",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
