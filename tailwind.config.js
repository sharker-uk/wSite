/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1e293b', // Deep slate
          accent: '#3b82f6',  // Modern blue
        }
      }
    },
  },
  plugins: [],
}