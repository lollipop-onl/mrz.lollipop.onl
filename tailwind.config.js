/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["IBM Plex Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
