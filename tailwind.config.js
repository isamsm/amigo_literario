/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'orangePrimary': '#E19965',
        'orangeSecundary': '#FFDCC3',
        'orangeThird': '#FFF9F5',
        'orangeFourth': '#DDAB84',
        'orangeFifth': '#FFF2E8',
        'newBlack': '#1C1C1C',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

