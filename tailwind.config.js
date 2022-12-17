/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '160': '40rem'
            }
        },
        fontFamily: {
            "sniglet": ["'Sniglet'", 'cursive']
        }
    },
    plugins: [],
}