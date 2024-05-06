/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SupremeRegular: ["SupremeRegular", "ui-sans-serif"],
        ClashGrotesk: ["ClashGrotesk", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
