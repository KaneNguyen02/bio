/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  
  // darkMode: 'selector',
  darkMode: ["selector", '[data-mode="light"]'],

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'desktop': '1920px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
