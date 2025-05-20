/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        gray:'#d8e5e9',
        accent:"#27499d",
        black:'#2a2c2e',
        darkGray:'#7c7f87',
      }
    },
  },
  plugins: [],
}

