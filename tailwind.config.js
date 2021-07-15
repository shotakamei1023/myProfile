module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
      },
      Width: {
        '78vw': '78vw'
      },
      maxWidth: {
        '72': '72px',
        '78vw': '78vw',
      },
      fontFamily: { 'Lato': 'Lato' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
