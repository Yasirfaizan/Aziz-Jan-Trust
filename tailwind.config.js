/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0092DF",
        accent: "#c8a84b",
        sky: {
          50: "#f2f8ff",
          100: "#e6f2ff",
          200: "#c6e0ff",
          300: "#9dc7ff",
          400: "#6ca6f4",
          500: "#3f86e6",
          600: "#2a6fd0",
          700: "#1f56a3",
          800: "#1a467f",
          900: "#15365e",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(21, 54, 94, 0.12)",
      },
      backgroundImage: {
        "hero-sheen":
          "radial-gradient(circle at 20% 10%, rgba(230, 242, 255, 0.95), rgba(255, 255, 255, 0.2) 55%, rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
};
