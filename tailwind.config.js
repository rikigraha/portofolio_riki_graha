/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here based on the Figma design
        'primary-bg': '#D84A67', // Background merah muda
        'secondary-bg': '#E02A47', // Background button "Available for Hire"
        'text-white': '#FFFFFF',
        'text-orange': '#FF9F43', // Warna teks "FRONTEND DEVELOPER"
        'text-gray': '#CCCCCC', // Untuk text kecil seperti "Years Experience"
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
}