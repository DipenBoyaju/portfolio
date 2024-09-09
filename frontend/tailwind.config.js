/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'custom-shadow': '2px 2px 5px rgba(0, 0, 0, 0.5)',
      },

    },
  },
  plugins: [],
  darkMode: 'class',
}

