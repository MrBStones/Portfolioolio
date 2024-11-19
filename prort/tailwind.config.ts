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
        'onyx': '#454545',
        'wenge': '#6D5959',
        'cambridge-blue': '#9DCBBA',
        'celadon' : '#ABEBD2',
        'spring-green': '#04F06A'
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
