import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: '730px',
    },
    extend: {
      colors: {
        gray900: '#1c1c1e',
        gray800: '#B30048',
        gray700: '#CC0052',
        gray600: '#E6005C',
        gray500: '#FF0266',
        gray400: '#FF4074',
        gray300: '#FF5B85',
        gray200: '#FF7597',
        thinGray900: '#aeaeae',
        thinGray800: '#b8b8b8',
        thinGray700: '#c1c1c1',
        thinGray600: '#cbcbcb',
        thinGray500: '#d5d5d5',
        thinGray400: '#dfdfdf',
        thinGray300: '#e9e9e9',
        thinGray200: '#f2f2f2',
        thinGray100: '#fcfcfc',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

