import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          '50': '#fcf8f0',
          '100': '#f7ead5',
          '200': '#f1d9b7',
          '300': '#e7be8a',
          '400': '#dc9b5b',
          '500': '#d5813a',
          '600': '#c66a30',
          '700': '#a55329',
          '800': '#844328',
          '900': '#6b3823',
          '950': '#391b11',
        },

        foreground: "var(--foreground)",

      },
    },
  },
  plugins: [],
} satisfies Config;
