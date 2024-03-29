/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./public/banner.png')",
      },
    },
    container: {
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
