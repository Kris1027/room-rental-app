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
            primary: '#DBEAFE',
            secondary: '#FEF3C7',
            danger: '#FEE2E2',
            positive: '#D1FAE5',
            purple: '#F3E8FF',
            primaryHover: '#BFDBFE',
            secondaryHover: '#FDE68A',
            dangerHover: '#FECACA',
            positiveHover: '#A7F3D0',
            purpleHover: '#E9D5FF',
         },
      },
   },
   plugins: [],
};
export default config;
