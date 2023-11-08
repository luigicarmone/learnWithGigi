// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "myTheme": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            github: '#3f3d3d',
            linkedin: '#2d64bc',
            discord: '#5865F2',
          },
        },
      },
    }),
  ],
};