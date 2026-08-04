import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adicionamos as fontes aqui
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Inter como padrão (Body/Label)
        outfit: ['var(--font-outfit)', 'sans-serif'], // Outfit para Títulos (Display/Headline/Title)
      },
      colors: {
        primary: "#304ffe",
        secondary: "#00d4c5",
        tertiary: "#ff5963",
        alternate: "#e0e3e7",
        "primary-text": "#14181b",
        "secondary-text": "#57636c",
        "primary-bg": "#f1f4f8",
        "secondary-bg": "#ffffff",
        success: "#249689",
        error: "#ff5963",
        warning: "#f9cf58",
        info: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;