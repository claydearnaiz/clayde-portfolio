const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'Space Grotesk', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', 'Space Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'primary': '#000000', // Black
        'secondary': '#FFFFFF', // White
        'accent-light': '#F3F4F6', // Light gray (bg-gray-100)
        'accent-medium': '#D1D5DB', // Medium gray (bg-gray-300)
        'accent-dark': '#374151',  // Dark gray (bg-gray-700)
        'accent-red': '#EF4444', // Red accent
        'accent-teal': '#36CFDC', // Teal accent for .dev part
      }
    },
  },
  plugins: [],
} 