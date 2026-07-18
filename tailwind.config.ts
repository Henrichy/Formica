import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fortica-blue': '#0E2B6E',
      },
      fontFamily: {
        'clash': ['var(--font-clash-display)', 'sans-serif'],
        'sans': ['var(--font-clash-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config