import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
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
        stone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)",
        },
        brown: {
          800: "hsl(14, 45%, 36%)",
        },
        rose: {
          50: "hsl(330, 100%, 98%)",
          800: "hsl(332, 51%, 32%)",
        },
        green: {
          default: "hsl(75, 94%, 57%)",
        },
        grey: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
        yellow: {
          default: "hsl(47, 88%, 63%)",
        },
        gray: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
      boxShadow: {
        card: "0px 25px 25px 0px rgba(0, 0, 0, 0.05)",
        blog: "10px 10px 5px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
