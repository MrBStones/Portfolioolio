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
        'background': '#246eb9', 'dark': '#4cb944', 'light': '#fdfffc', 'hero' : '#f5ee9e', 'dark-hero': '#f06543',
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
