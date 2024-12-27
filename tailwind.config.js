/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion"; // Usando import

export default {
  content: ["./app/src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [tailwindcssMotion], // Usando a variável do import
};
