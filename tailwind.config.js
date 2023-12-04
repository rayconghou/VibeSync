/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'bg-purple': 'f8f0fb',
        'txt-purple': '543361',
        'button-purple': 'dcd3df',
      }
    },
    
  },
  plugins: [],
}

