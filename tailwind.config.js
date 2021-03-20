const { getColors } = require('theme-colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
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
      pink: getColors('#FD5C63')

      /* UI Colors */
      // primary: '',
      // secondary: '',
      // success: '',
      // warning: '',
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
  variants: {
    // backgroundColor: ["dark", "dark-hover", "hover"],
    // borderColor: ["dark", "dark-focus"],
    // textColor: ["dark", "dark-hover", "dark-active"],
  }
}