/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '.5rem',
          sm: '.5rem',
          lg: '.5rem',
          xl: '.5rem',
          '2xl': '.5rem',
        },
      },
      colors: {
        "primary": "#08D565"
      }
    }
  },
  plugins: []
}
