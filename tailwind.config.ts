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
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          300: "#D5E1EF",
          500: "#68778D",
          900: "#1F314F",
        },
        white: "#FFFFFF",
        blue: {
          600: "#2C7DFA",
        },
      },
      boxShadow: {
        card: "0px 25px 25px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
