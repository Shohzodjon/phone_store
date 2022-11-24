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
      screens: {
        xss: "100px",
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
