/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cnw-red': '#D32F2F', // Assuming a red brand color based on logistics standards, customizable.
        'cnw-dark': '#1A1A1A',
        'cnw-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
