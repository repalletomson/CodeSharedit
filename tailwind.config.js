/** @type {import('tailwindcss').Config} */
module.exports = {

    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"]
      }
    }
  ,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#131417",
          2:"#248C46",
          3:"#444857",
          4:"#C7C9C7",
          5:"#2C303A",
          6:"#18191E",
          7:"#1E1F26",
          8:"#252830",
          9:'#30333b',
          10:'#1a1c21'
        },
    },
  },
  plugins: [],
}
}