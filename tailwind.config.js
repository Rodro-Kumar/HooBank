/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        firstColor: "#33BBCF",
        secoundColor: "#7DE7EB",
        thirdColor: "#BEF3F5",
        discountfirst: "#272727",
        discountsecound: "#11101D",
      },
    },
  },
  plugins: [],
};
