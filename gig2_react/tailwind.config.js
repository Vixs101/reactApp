/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Custom Font', 'Poppins']
      },
      width: {
        '244': '244px',
        '300': '300px',
        '34':'34.5rem',
        '30': '26rem',
        '68':'69rem'
      },
      height: {
        '325': '325px',
        '55' : '55px',
        '90' : '48rem',
        '100': '1395px',
        '786': '786px'
      }
    },
  },
  plugins: [],
}

