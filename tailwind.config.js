module.exports = {
  content: [
    './static/**/*.html',
    './static/**/*.js',
    './layouts/**/*.html',
    './layouts/**/**/*.html',
    './layouts/*.html'
  ],
  theme: {
    extend: {
      screens: {
        xs: '528px'
      },
      backgroundImage: {
        'site-background': "url('/images/dark_wood.png')",
      },
      margin: {
        '1/2' : '50%'
      }
    },
  },
  plugins: [],
}
