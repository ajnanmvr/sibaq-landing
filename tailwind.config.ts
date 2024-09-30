import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      colors: {
        r: "#EA3650",
        y: "#EA8F23",
        b: "#2075BC",
        g: "#09ABB1",
      },
    },
  },
  plugins: [],
};
export default config;
