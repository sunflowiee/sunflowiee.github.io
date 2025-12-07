 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*",    // kalau kamu pakai file .html
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    }
  },
  plugins: [],
}