module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
          '5xl': '2.5rem',
          'big': '3rem',
          '13px': '13px',
          '15px': '15px',
      },
      spacing: {
        '1/8' : '12.5%',
        '9%': '9.5%',
        'burg-w': '27px',
        'burg-h': '18px',
        '50px': '50px',
        '3px': '3px',
        '35px': '35px',
      },
      colors: {
        sectionGrey: '#d5d5d5',
        footerGrey:'#efefef',
        darkGrey: '#bababa',
        seafoam: '#1F9889',
        darkBlueText: '#122B72',
        grayText: '$4e4e4e',
        lineBlue: '#11369D'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
