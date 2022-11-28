/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        accent: colors.amber,
      },
      textColors: {
        primary: colors.sky,
        accent: colors.amber,
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      keyframes: {
        'slide-ud': {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'slide-lr': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'slide-ud': 'slide-ud 3s ease-in-out infinite',
        'slide-lr': 'slide-lr 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
