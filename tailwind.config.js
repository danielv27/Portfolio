/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'lighter-dark-blue': '#3a3f51',
            'dark-blue': '#1F2833',
            'gray': '#C5C6C7',
            'light-blue': '#66FCF1',
            'white': '#FFFFFF',
            'green': '#45A29E',
        },
        fontFamily: {
            varela: ['Varela'],
            mono: ['Source Code Pro', 'monospace'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    plugins: [],
}