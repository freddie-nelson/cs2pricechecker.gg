/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#E75B8E",
                secondary: "#BC245B",
                bg: "#0C141F",
                mediumbg: "#151B2A",
                lightbg: "#1B2337",
                lighterbg: "#313e5e",
                text: "#FFFFFF",
            },
            keyframes: {
                grow: {
                    "0%": { transform: "scale(0.95)" },
                    "100%": { transform: "scale(1.1)" },
                },
            },
            animation: {
                grow: "grow 3s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
};
