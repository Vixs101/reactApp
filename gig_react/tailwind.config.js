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
      },
      height: {
        '325': '325px',
        '55' : '55px'
      }
    },
  },
  plugins: [],
}

