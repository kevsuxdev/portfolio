/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#0C0C0C',
        light: '#F8FAFC',
      },
      textColor: {
        dark: '#0C0C0C',
        light: '#F8FAFC',
      },
      borderColor: {
        main: '#615F69',
      },
      fontFamily: {
        'bree-serif': ['Bree Serif'],
        alegreya: ['Alegreya'],
      },
    },
  },
  plugins: [],
}
