/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,js,ts,ts,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "couple": "url('assets/images/bg.png')",
      },
      colors: {
        primary: "#232D32",
        secondary: {
          100: "#F091FF",
          200: "#FEFDF4",
          300: "#FF6419",
        },
      },
      fontFamily: {
        satoshi:["Satoshi", "sans-serif"]
      },
    },
  },
  plugins: [],
};
