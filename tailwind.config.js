/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1.1) ", height: "100%" },
          "100%": { transform: "scale(1.2)", height: "100%" },
        },
      },
      animation: {
        zoomOut: "zoomOut 3s ease-in infinite",
      },
    },
  },
  plugins: [],
};
