/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#e78313',
        'gold-transparent': 'rgba(194,180,107,0.5)',
        error: '#ff4122',
        'light-gold': '#fefe90',
        'dark-gold': '#de7912'
      },
      boxShadow: {
        'custom': '10px 10px 28px 0px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}