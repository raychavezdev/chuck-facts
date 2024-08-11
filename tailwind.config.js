/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        oxanium: '"Oxanium Variable", system-ui',
        bungee: '"Bungee Shade", system-ui'
      },
      fontSize: {
        clamp: 'clamp(.9rem,2vw,1.1rem)'
      }
    }
  },
  plugins: []
}
