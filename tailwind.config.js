/** @type {import('tailwindcss').Config} */
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
        pinkred: "#f9004d",
      },
    },
  },
  plugins: [],
};
