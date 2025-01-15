/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'main': '#014452',
        'highlight': '#1e7268',
        'background': '#c6e8ee',
        'card-bg': '#c6e8ee',
        'primary': 'hwb(220 30% 20%)',
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

