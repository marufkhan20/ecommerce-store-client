/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3474d4",
        secondary: "#444444",
        heading: "#555555",
        body: "#777777",
        surface: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
