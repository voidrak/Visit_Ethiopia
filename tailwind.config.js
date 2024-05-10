/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-accent": "#ffbe40",
        "bg-color": "#161b23",
      },
      fontFamily: {
        SupremeRegular: ["SupremeRegular", "ui-sans-serif"],
        ClashGrotesk: ["ClashGrotesk", "ui-sans-serif"],
      },
      transitionTimingFunction: {
        easeInSine: "cubic-bezier(0.12, 0, 0.39, 0);",
      },
      fontSize: {
        "clamp-small": "clamp(56px, 12vw, 96px)",
        "clamp-large": "clamp(75px, 20vw, 384px)",
      },
    },
  },
  plugins: [],
};
