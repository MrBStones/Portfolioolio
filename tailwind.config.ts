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
        background: '#000000',
        dark: '#141414',
        light: '#dcd6d1',
        hero: '#FF715B',
        'dark-hero': '#EBE684',
        // Light mode overrides
        'light-background': '#f7f4f2',
        'light-dark': '#DCD6D1',
        'light-light': '#141414',
        'light-hero': '#EBE684',
        'light-dark-hero': '#FF715B',
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