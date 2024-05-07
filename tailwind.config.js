/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-accent": "#d88e00",
        "bg-color": "#161b23",
      },
      fontFamily: {
        SupremeRegular: ["SupremeRegular", "ui-sans-serif"],
        ClashGrotesk: ["ClashGrotesk", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
