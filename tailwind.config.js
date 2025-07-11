/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        "inter": ['"inter"', 'serif'],
        "montserrat": ['"Montserrat"', 'serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      "dark",
    ]
  }
}

