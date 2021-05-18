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
          '23px': '23px',
      },
      spacing: {
        '1/8' : '12.5%',
        '9%': '9.5%',
        'burg-w': '27px',
        'burg-h': '18px',
        '50px': '50px',
        '3px': '3px',
        '35px': '35px',
        'max-w-screen-3xl': '1920px',
        '16.5': '4.5rem',
        '490px': '490px',
        '230px': '230px',

      },
      colors: {
        sectionGrey: '#d5d5d5',
        footerGrey:'#efefef',
        darkGrey: '#bababa',
        seafoam: '#1F9889',
        darkBlueText: '#122B72',
        grayText: '$4e4e4e',
        lineBlue: '#11369D',
        grayText2: '#919191',
        overlayGray: 'rgba(34, 34, 34, 0.75)',
        overlayBlack: 'rgba(0, 0, 0, 0.75)',
        bgBlue: '#CFD9E4',
        footerBlue: '#93C5FD',
        
      },
      minHeight: {
        '320px': '320px',
        '1320px': '1320px',
      },
      maxWidth: {
        '320px': '320px',
        '1320px': '1320px',
        '750px': '750px',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: theme => ({
        'passengerHero': "url('../images/hero-airplane-1920.jpg')",
        'crewHero': "url('../images/CrewHero@2x.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
