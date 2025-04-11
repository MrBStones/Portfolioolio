import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
          'background': '#131316', 'dark': '#1A1A1A', 'light': '#DFA05D', 'hero' : '#AC5045', 'dark-hero': '#658761',     
      },
      spacing: {
        '18': '4.5rem',
        '24': '6rem',
        'bs-item-w': '25rem',
        'bs-item-h': '6.25rem',
        '128': '32rem',
      },
      fontSize: {
        'bs-item-num': 
          ['4 rem', '5.333 rem']
        
      },
    },
  },
  plugins: [],
} satisfies Config;
