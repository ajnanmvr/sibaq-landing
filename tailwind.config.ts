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
        "spin-slow": "spin 3s linear infinite",
        reveal: "reveal linear forwards",
        scroll: "scroll 6s linear infinite",
      },
      keyframes: {
        reveal: {
          to: { backgroundSize: "100% 100%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50px * 7))" },
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      backgroundImage: {
        "four-color":
          "linear-gradient(90deg, rgba(234,143,35,1) 0%, rgba(234,54,80,1) 33%, rgba(32,117,188,1) 66%, rgba(9,171,177,1) 100%)",
      },
      colors: {
        red: "#EA3650",
        yellow: "#EA8F23",
        blue: "#2075BC",
        purple: "#C43EF3",
        green: "#09ABB1",
        parrot: "#89D123",
        black: "#3F3F40",
        "dh-blue": "#2A2D94",
        "ruby-red": "#B41831",
      },
      scale: {
        "85": "85%",
      },
      boxShadow: {
        "logo-round": "0 4px 250px rgba(0, 0, 0, 0.1)",
        "subscribe-section": "0 4px 190px rgba(0, 0, 0, 0.05)",
        "menu-active": "0 4px 33.7px rgba(0, 0, 0, 1)",
        "menu-icon": "0 4px 85.9px rgba(66, 65, 67, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
