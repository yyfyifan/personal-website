/** @type {import('tailwindcss').Config} */

const colors = {
  pinkred: "#f9004d",
};

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
        greatevibe: "'Great Vibes', cursive",
      },
      colors: {
        pinkred: colors.pinkred,
      },
      borderColor: {
        pinkred: colors.pinkred,
      },
    },
  },
  plugins: [],
};
