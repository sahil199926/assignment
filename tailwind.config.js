/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        form: "clamp(360px, 41.2142vw, 577px)",
        card: "clamp(360px, 69.3333vw, 832px)",
      },
      height:{
        form: "577px",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#212121",
        alert: "#D86161",
        primary: "#1597E4",
        border: "#030303"
      },
    },
  },
  plugins: [],
};
