/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkColor: "#262728",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
