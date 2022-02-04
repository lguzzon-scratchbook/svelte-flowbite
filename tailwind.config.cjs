const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,svelte}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: true,
  plugins: [require('flowbite/plugin')],
  theme: {
    screens: {
      sm: '480px',
      md: '708px',
      lg: '970px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        120: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
