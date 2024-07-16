/** @type {import('tailwindcss').Config} */

/*
'blue-chill': {
        '50': '#f2f9f9',
        '100': '#ddeff0',
        '200': '#bfe0e2',
        '300': '#92cace',
        '400': '#5faab1',
        '500': '#438e96',
        '600': '#3b757f',
        '700': '#356169',
        '800': '#325158',
        '900': '#2d464c',
        '950': '#1a2c32',
    },
    
*/
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "my-color-50": "#f2f9f9",
                "my-color-100": "#ddeff0",
                "my-color-200": "#bfe0e2",
                "my-color-300": "#92cace",
                "my-color-400": "#5faab1",
                "my-color-500": "#438e96",
                "my-color-600": "#3b757f",
                "my-color-700": "#356169",
                "my-color-800": "#325158",
                "my-color-900": "#2d464c",
                "my-color-950": "#1a2c32",
                "my-red": "red"
            },
            width: {
                "2/10": "20%",
                "8/10": "80%",
                "90vw": "90vw"
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        transform: "translateY(50px)",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: 1
                    }
                }
            },
            animation: {
                fadeIn: "fadeIn 0.7s ease forwards"
            }
        }
    },
    plugins: []
};
