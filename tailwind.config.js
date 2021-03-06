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
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '50%',
       '8px': '8px',
       '5px': '5px'
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
        '9%': '9%',
        "30%": '30%',

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
        '800px': '800px'
      },
      maxWidth: {
        '320px': '320px',
        '1320px': '1320px',
        '750px': '750px',
        '350px': '350px',
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
        'contactHero': "url('../images/contact-hero@2x.png')",
        'careersHero': "url('../images/careers-hero@2x.png')",
        'whyusHero': "url('../images/whyus-hero@2x.png')",
        'Hilton': "url('../images/Hilton-Logo@2x.png')",
        'Hyatt': "url('../images/Hyatt-Logo@2x.png')",
        'Marriott': "url('../images/Marriott-logo@2x.png')",
        'Sheraton': "url('../images/SheratonLogo2x.png')",
        'Hartsfield': "url('../images/Hartsfield???Logo@2x.png')",
        'Armstrong': "url('../images/Armstrong-Logo@2x.png')",
        'Nashville': "url('../images/Nashville-Logo@2x.png')",
        'arrowRight': "url('../images/arrow-right@2x.png')",
        'cartImage': "url('../images/cartImage.png')",
        'orderNow': "url('../images/orderNow.png')",
        'accompanyLogo': "url('../images/AccompanyHero@2x.png')",
        'treeBg': "url('../images/treeBg@2x.png')",
        'ghanaImg': "url('../images/donateLocation.png')",
       }),
       lineHeight: {
        '15px': '15px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
