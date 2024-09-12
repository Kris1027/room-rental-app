import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: 'bg-blue-100',
            secondary: 'bg-yellow-100',
            danger: 'bg-red-100',
            positive: 'bg-green-100',
            primaryHover: 'hover:bg-blue-200',
            secondaryHover: 'hover:bg-yellow-200',
            dangerHover: 'hover:bg-red-200',
            positiveHover: 'hover:bg-green-200',
         },
      },
   },
   plugins: [],
};
export default config;
