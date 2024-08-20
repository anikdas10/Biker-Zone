/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        'bike-primary':"#E76F51",
        'bg-primary':"#f5c5b9",
        'text-secondary':"#E76F51",
        'name-color':"#23A6F0",

      }
    },
    container: {
      center: true,
       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

