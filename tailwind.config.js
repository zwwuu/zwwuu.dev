const config = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s ease infinite",
        "tilt-in-br": "tilt-in-br 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "tilt-in-tl": "tilt-in-tl 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-blurred-top": "slide-in-blurred-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000)",
      },
      colors: {
        primary: "#DFF8EB",
        secondary: "#73AEE6",
        tertiary: "#36434E",
        accent: "#ED8A63",
        gunmetal: "#192836",
        black: "#040404",
        green: "#29E26D",
        white: "#ffffee",
        red: {
          DEFAULT: "#E14A4F",
          50: "#FCEDEE",
          100: "#F9DCDD",
          200: "#F3B5B7",
          300: "#ED9295",
          400: "#E76F73",
          500: "#E14A4F",
          600: "#CE2228",
          700: "#99191E",
          800: "#651113",
          900: "#35090A",
        },
        silver: {
          DEFAULT: "#BEBEBE",
          50: "#F7F7F7",
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#CCCCCC",
          500: "#BEBEBE",
          600: "#999999",
          700: "#737373",
          800: "#4D4D4D",
          900: "#262626",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...config.fontFamily.sans],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      backgroundImage: {
        shiny: "url('/assets/background/shiny.svg')",
      },
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        blink: {
          "0%,100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
        "tilt-in-br": {
          "0%": {
            transform: "rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            opacity: "1",
          },
        },
        "tilt-in-tl": {
          "0%": {
            transform: "rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            opacity: "1",
          },
        },
        "slide-in-blurred-top": {
          "0%": {
            transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
            "transform-origin": "50% 0%",
            filter: "blur(40px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
