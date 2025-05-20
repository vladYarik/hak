/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#d8e5e9",
        accent: "#27499d",
        black: "#2a2c2e",
        darkGray: "#7c7f87",
      },
      boxShadow: {
        'top': '0 -6px 12px -2px rgba(0, 0, 0, 0.25), 0 -3px 6px -2px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        sm: { max: "620px" },
        lg: { max: "1020px" },
      },
    },
  },
  plugins: [],
};

