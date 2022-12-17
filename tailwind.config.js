/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '104': '29rem',
                '112': '30rem',
                '120': '31rem',
                '128': '32rem',
                '160': '40rem'
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '11rem',
                '12xl': '12rem',
            }
        },
        fontFamily: {
            "sniglet": ["'Sniglet'", 'cursive']
        },

    },
    plugins: [],
}