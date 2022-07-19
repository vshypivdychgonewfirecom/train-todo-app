/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('../src/resource/images/background.jpg')",
      },
      colors: {
        'newfire-blue': '#3F65BA'
      },
      screens: {
        'phone': '320px'
      }
    },
  },
  plugins: [],
}
