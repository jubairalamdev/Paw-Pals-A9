/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lilita: ["var(--font-lilita)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};