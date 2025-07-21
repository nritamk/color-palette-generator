/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: 'var(--color-primaryBG)',
        secondaryBG:'var(--color-secondaryBG)',
        primary:'var(--color-primary)',
        secondary:'var(--color-secondary)',
        primaryText:'var(--color-primaryText)'
      },
    },
  },
  plugins: [],
}

