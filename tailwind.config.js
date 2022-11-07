/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkColor: "#262728",
        greenColor: "#00C48C",
        greyColor: "#BBC2D0",
        blueColor: "#3D639D",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
