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
        light: {
          colors: {
            primary: {
              50: "#eeeaea",
              DEFAULT: "#484848",
              100: '#d4d4d8',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#27272a",
              DEFAULT: '#d4d4d8',
              100: '#414144',
            },
          },
        },
        "myTheme": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            github: '#3f3d3d',
            linkedin: '#2d64bc',
            discord: '#5865F2',
            light: '#E4E4E7FF',
          },
        },
      },
    }),
  ],
};