/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FC6A9C', // Custom color
        customGray: '#F6F6F6',
      },
      screens: {
        '2xl': '1440px', // Custom 2xl breakpoint
      },
      fontFamily: {
        domine: ['Domine', 'sans-serif'], // Adding custom font
      },
      margin: {
        17: '4.25rem', // This creates the class mr-17
      },
    },
  },
  plugins: [],
}
