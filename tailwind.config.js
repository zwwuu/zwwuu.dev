const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    fontSize: false,
  },
  theme: {
    extend: {
      animation: {
        blink: "blink 1s ease infinite",
      },
      colors: {
        primary: "#ED8A63",
        black: "#040404",
        white: "#fffefa",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        blink: {
          "0%,100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-fluid-type")],
};
