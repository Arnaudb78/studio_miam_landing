/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,js,ts,ts,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1B",
        secondary: {
          100: "#E30972",
          200: "#EEEDED",
        },
      },
    },
  },
  plugins: [],
};
