import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        
      },
      colors: {
        r: "#EA3650",
        r1: "#EA3650",
        y: "#EA8F23",
        y1: "#EA8F23",
        b: "#2075BC",
        b1: "#2075BC",
        g: "#09ABB1",
        g1: "#09ABB1",
        black: "#3F3F40",
        "dh-blue": "#2A2D94",
        "ruby-red": "#B41831",
      },
      boxShadow: {
        "logo-round": "0 4px 250px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
