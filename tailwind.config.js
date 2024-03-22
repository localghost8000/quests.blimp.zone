/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#0000FF",
        blue: "#1E9AFF",
        yellow: "#F2C830",
        red: "#E73143",
        pink: "#FC5D9E",
        lightPink: "#FF97B6",
      },
    },
    fontFamily: {
      sans: [["Supply Sans", "sans-serif"]],
      serif: [["Editorial New", "Times New Roman", "serif"]],
      display: [["Good Girl", "Times New Roman", "serif"]],
    },
  },
  plugins: [],
};
