module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
          '5xl': '2.5rem',
          'big': '3rem'
      },
      spacing: {
        '1/8' : '12.5%',
        '9%': "9.5%",
      },
      colors: {
        sectionGrey: '#d5d5d5',
        footerGrey:'#efefef',
        darkGrey: '#bababa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
