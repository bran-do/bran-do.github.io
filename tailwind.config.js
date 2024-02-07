/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(-1deg)' },
          '75%': { transform: 'rotate(1deg)' },
        }
      },

      animation: {
        wiggle: 'wiggle 2s ease-in-out 1',
      }
    },
  },
  plugins: [],
}

