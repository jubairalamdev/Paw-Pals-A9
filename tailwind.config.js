/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Map 'font-lilita' to your Next.js font variable
        lilita: ["var(--font-lilita)", "sans-serif"],
        // Map 'font-open-sans' as well since you are using it
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};