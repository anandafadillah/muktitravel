/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container :{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#c2410c',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

