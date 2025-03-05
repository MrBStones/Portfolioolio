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
        'background': '#141514', 'dark': '#1c110a', 'light': '#e4d6a7', 'hero' : '#ebbb5c', 'dark-hero': '#c98e18',
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
