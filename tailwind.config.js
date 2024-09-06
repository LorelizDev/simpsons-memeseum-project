/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        
        '120': '26rem', // Otro tamaño intermedio
      },
      fontFamily: {
        'simpson-title': ['Simpsonfont', 'sans-serif'],
        'simpson-p': ['Homer Simpson Revised', 'sans-serif'],
      },
      colors: {
        'yellow-simp': '#f8db27',
        'blue-simp': '#2f64d6',
        'brown-simp':'#9c5b01',
        'pink-simp': '#ff81c1',
      },
      dropShadow: {
        'simpson-title-ds': [
          '0 6px black',
          '1px 1px black',
          '-1px -1px black',
          '1px -1px black',
          '-1px 1px black',
        ],
        'simpson-outline': [
          '0.5px 0.5px black',
          '-0.5px -0.5px black',
          '0.5px -0.5px black',
          '-0.5px 0.5px black',
        ]
      },
    },
  },
  plugins: [],
}

