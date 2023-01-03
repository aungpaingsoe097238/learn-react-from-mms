/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : "Poppins"
      },
      colors : {
        "primary" : '#fffffe',
        "secondary" : '#5f6c7b',
        "danger" : '#ef4565',
        "header" : '#094067',
        "info" : '#3da9fc'
      }
    },
  },
  plugins: [],
}
