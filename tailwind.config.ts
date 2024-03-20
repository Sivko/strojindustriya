import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center: true,
    },
    spacing: {
      extra: "clamp(96px, 9vw, 192px)",
      ...defaultTheme.spacing,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      title: ["clamp(56px, 8vw, 120px)","clamp(64px, 9vw, 120px)"],
      subtitle: ["clamp(20px, 9vw, 24px)","clamp(24px, 9vw, 40px)"],
      base: ["clamp(14px, 9vw, 15px)","20px"],
      small: ["clamp(11px, 2vw, 14px)","clamp(16px, 2vw, 24px)"]
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    colors: {
      text: "#101112",
      addText: "#6F7175",
      outline: "#E3E4E6",
      main: "#2B74B7",
      addButton: "#93969B",
      ...defaultTheme.colors
    },
  },
  plugins: [],
};
export default config;
