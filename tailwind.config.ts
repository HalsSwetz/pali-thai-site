import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        thai: {
          red: '#D32F2F',
          blue: '#2D2A7F',
          gold: '#F9A825',
          orange: '#FF6F00',
        },
        colorado: {
          green: '#2E5C3E',
          sage: '#A8C69F',
          bookcliff: '#C17A5B',
          peach: '#E8A87C',
        },
        cream: '#FFF8E1',
        charcoal: '#212121',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        'noto-thai': ['var(--font-noto-thai)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;