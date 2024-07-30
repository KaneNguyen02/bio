/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  darkMode: ['selector', '[data-mode="light"]'],

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

