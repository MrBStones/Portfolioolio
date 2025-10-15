import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Default (dark mode)
        'background': '#000004', 
        'dark': '#163c25', 
        'light': '#f7f4f2', 
        'hero': '#81c14b', 
        'dark-hero': '#36ab45',
        // Light mode overrides
        'light-background': '#fbfef9',
        'light-dark': '#A9D585',
        'light-light': '#141414',
        'light-hero': '#81c14b',
        'light-dark-hero': '#2e933c',
      },
      spacing: {
        '18': '4.5rem',
        '24': '6rem',
        'bs-item-w': '25rem',
        'bs-item-h': '6.25rem',
        'bv-image-h': '13.25rem',
        '128': '32rem',
      },
      fontSize: {
        'bs-item-num': ['4 rem', '5.333 rem'],
      },
    },
  },
  plugins: [],
} satisfies Config;