/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mild-blue':'#96c1e5'
      },
      fontFamily:{
        'ed':["Playwrite ES Deco", 'cursive'],
        'pop':["Pop", 'sans-serif']
      }
    },
  },
  plugins: [],
}

