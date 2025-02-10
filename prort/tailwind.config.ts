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
        'background': '#2e282a', 'dark': '#cd5334', 'light': '#fad8d6', 'hero' : '#17bebb', 'dark-hero': '#edb88b',
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
