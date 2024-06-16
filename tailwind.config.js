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
                    300: "#FF6419",
                    400: "#B4FA64",
                },
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                shadow: ["Shadows-Into-Light", "cursive"],
            },
        },
    },
    plugins: [],
};
