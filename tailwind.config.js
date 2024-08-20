/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b57f6",
        secondary: "#121215",
        dark: "#1e1e23",
      },
    },
  },
  plugins: [],
};
