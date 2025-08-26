/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0c5577',
        'custom-yellow': '#fea00c',
      },
    },
  },
  plugins: [],
};