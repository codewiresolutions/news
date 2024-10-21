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
        'custom-gray': '#F8F8F8',
      },
      screens: {
        '2xl': '1440px', // Custom 2xl breakpoint
      },
      fontFamily: {
        domine: ['"Domine"', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
}
