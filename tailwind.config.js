/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,js,ts,ts,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#232D32",
        secondary: {
          100: "#F091FF",
          200: "#FEFDF4",
        },
      },
    },
  },
  plugins: [],
};
