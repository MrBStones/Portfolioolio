import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#2e4052', 'dark': '#412234', 'light': '#ffffff', 'hero' : '#ffc857', 'dark-hero': '#bdd9bf',
      },
      spacing: {
        '18': '4.5rem',
        '24': '6rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
