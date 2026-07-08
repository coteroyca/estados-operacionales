/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite'
      }
    }
  },
  plugins: []
}
