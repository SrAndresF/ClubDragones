/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "principal" : "#AE1D00",
        "secondary" : "#E4A603",
        "ball" : "#F54F03",
        "logo-black" : "#151517",
        "logo-white" : "#EDE6E3",
        "link": "#2200CC"
      },
      spacing: {
        '128': '32rem',
        'full-2': '50rem',
        'integracion-lg': '40rem',
        '21': '81px',
        'banner': '38rem',

      }
    },
  },
  plugins: [],
}
