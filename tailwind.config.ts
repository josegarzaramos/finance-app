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
      },
      gridTemplateColumns: {
        desktop: '300px 1fr',
      },
    },
  },
  plugins: [],
} satisfies Config;
