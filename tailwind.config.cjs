const { getColors } = require('./utils/theme-colors.cjs');

// It works ಠ_ಠ
// console.log(getColors('#AA0000'))

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      /* Base Colors */
      transparent: 'transparent',
      white: '#FFFFFF',
      current: 'currentColor',
      black: '#000000',
      gray: getColors('#A5ACAf'),
      red: getColors('#AA0000'),
      orange: getColors('#FF7900'),
      yellow: getColors('#FDB927'),
      green: getColors('#046A38'),
      teal: getColors('#008E97'),
      blue: getColors('#003594'),
      indigo: getColors('#4B6CE2'),
      purple: getColors('#552583'),
      pink: getColors('#FD5C63'),

      /* UI Colors */
      primary: getColors('#AA0000'),
      secondary: getColors('#B3995D'),
      light: getColors('#FFFFFF'),
      dark: getColors('#121212')
    },
    fontFamily: {
      heading: 'Asap',
      body: 'Poppins'
    },
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1500px'
    }
  },
  darkMode: 'class'
};
