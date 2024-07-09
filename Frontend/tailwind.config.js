/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem', // Add your custom value here (4.5rem equals 72px)
      },
    },
  },
  plugins: [],
}

