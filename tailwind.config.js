/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      euclid: ['"Euclid Circular A"', 'sans-serif'],
    },
    colors: {
      primary: '#2356CF',
      success: '#0C7E6E',
      danger: '#CD1616',
      warning: '#F2A001',
      neutral: '#191919',
    },
  },
  plugins: [],
}

