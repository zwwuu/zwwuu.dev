const config = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    fontSize: false,
  },
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s ease infinite',
      },
      colors: {
        primary: '#DFF8EB',
        secondary: '#73AEE6',
        accent: '#ED8A63',
        black: '#040404',
        white: '#ffffee',
      },
      fontFamily: {
        sans: ['Poppins', ...config.fontFamily.sans],
      },
      keyframes: {
        blink: {
          '0%,100%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-fluid-type')],
};
