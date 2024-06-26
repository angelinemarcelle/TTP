/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundColor :{
        'dark-blue' : '#000957',
        'dark-blue-hover' : '#03139e',
        'light-blue' : '#1D77FF',
        'light-grey' : '#FFFFFF',
      },
      backgroundOpacity: {
        '75' : '0.75',
        '40' : '0.4',
      },
      colors: {
        red: {
          '600': '#C53017',  // Custom red 600
        },
        black: '#000000', 
        white: '#FFFFFF', 
        grey: '#F1F1F1'   
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
  }