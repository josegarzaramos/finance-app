import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pistachio: '#dfe4db',
        forest: '#4c624c',
        evergreen: '#1a291a',
        mint: '#f0f8f3',
      },
      gridTemplateColumns: {
        desktop: '300px 1fr',
      },
      fontSize: {
        '32': [
          '2rem',
          {
            lineHeight: '120%',
            letterSpacing: '0',
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
