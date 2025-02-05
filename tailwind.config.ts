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
        xs: "480px",
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
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          "orangey-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        gradients: {
          "light-slate-blue": "hsl(252, 100%, 67%)",
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
        },
        neutral: {
          "pale-blue": "hsl(221, 100%, 96%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        }
      },
      boxShadow: {
        card: "0px 25px 25px 0px rgba(0, 0, 0, 0.05)",
        blog: "10px 10px 5px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
