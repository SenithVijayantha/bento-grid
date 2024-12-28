/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple-100': 'hsl(254, 88%, 90%)',
        'custom-purple-500': 'hsl(256, 67%, 59%)',
        'custom-yellow-100': 'hsl(31, 66%, 93%)',
        'custom-yellow-500': 'hsl(39, 100%, 71%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-black': 'hsl(0, 0%, 7%)'
      },
      fontFamily: {
        sans: ['DM Sans', 'serif']
      }
    },
  },
  plugins: [],
}