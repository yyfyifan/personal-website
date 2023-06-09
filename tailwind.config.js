/** @type {import('tailwindcss').Config} */

const colors = {
  pinkred: "#f9004d",
};

const tailwindConfig = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        josefin: ["var(--font-josefin-sans)", "sans-serif"],
        greatevibes: ["var(--font-greatevibes)", "cursive"],
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

export default tailwindConfig;
