/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#d80032",
        "primary-hover": "#b2002b",
        secondary: "#6b7280",
        "bradesco-red": "#d80032",
        "bradesco-blue": "#005ca9",
        "unimed-green": "#009639", // mantendo para compatibilidade
      },
      spacing: {
        section: "2rem",
        container: "1rem",
      },
      borderRadius: {
        container: "0.5rem",
      },
    },
  },
  plugins: [],
}
