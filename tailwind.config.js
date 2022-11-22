/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#012146",
        lightBlue: "#205694",
        mainBg: "#EFF7FC",
        lightDark: "#A9AAAE",
        mainYellow: "#F8B405",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
