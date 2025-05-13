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
          'background': '#000000', 'dark': '#191014', 'light': '#dcd6d1', 'hero' : '#3ddc97', 'dark-hero': '#69b578',
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
        'bs-item-num': 
          ['4 rem', '5.333 rem']
        
      },
    },
  },
  plugins: [],
} satisfies Config;
