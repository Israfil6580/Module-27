/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Poppins"],
      }
    },
  },
  plugins: [require("daisyui")],
}

