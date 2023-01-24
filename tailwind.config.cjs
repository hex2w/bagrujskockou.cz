/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": [ "Rubik", ...defaultTheme.fontFamily.sans ],
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
    ],
}
