/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

