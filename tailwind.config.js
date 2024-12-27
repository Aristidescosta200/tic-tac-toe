/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

