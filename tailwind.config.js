/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'main': '#014452',
        'highlight': '#1e7268',
        'background': '#c6e8ee',
        'muted': '#6c757d'
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          '"Helvetica Neue"', 'Arial', 'sans-serif', 
          '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'
        ],
        title: ['"Arima"'],
      }
    },
  },
  plugins: [],
}

