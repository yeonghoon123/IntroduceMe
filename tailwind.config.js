/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                128: "30rem",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
