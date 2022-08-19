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
        'tilt-in-br': 'tilt-in-br 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'tilt-in-tl': 'tilt-in-tl 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-blurred-top': 'slide-in-blurred-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
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
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        blink: {
          '0%,100%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
        },
        'tilt-in-br': {
          '0%': {
            transform: 'rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: '1',
          },
        },
        'tilt-in-tl': {
          '0%': {
            transform: 'rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: '1',
          },
        },
        'slide-in-blurred-top': {
          '0%': {
            transform: 'translateY(-1000px) scaleY(2.5) scaleX(0.2)',
            'transform-origin': '50% 0%',
            filter: 'blur(40px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            'transform-origin': '50% 50%',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-fluid-type')],
};
