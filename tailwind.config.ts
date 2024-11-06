import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      backgroundImage: {
        "four-color":
          "linear-gradient(90deg, rgba(32,117,188,1) 0%, rgba(9,171,177,1) 28%, rgba(234,54,80,1) 56%, rgba(234,143,35,1) 94%)",
        singl:
          "linear-gradient(90deg, rgba(234,143,35,1) 0%, rgba(234,54,80,1) 33%, rgba(32,117,188,1) 66%, rgba(9,171,177,1) 100%)",
      },
      colors: {
        red: "#EA3650",
        "red-half": "rgba(234, 54, 80, 0.5)",
        yellow: "#EA8F23",
        "yellow-half": "rgba(234, 143, 35, 0.5)",
        blue: "#2075BC",
        "blue-half": "rgba(32, 117, 188, 0.5)",
        purple: "#C43EF3",
        "purple-half": "rgba(196, 62, 243, 0.5)",
        green: "#09ABB1",
        "green-half": "rgba(9, 171, 177, 0.5)",
        parrot: "#89D123",
        "parrot-half": "rgba(137, 209, 35, 0.5)",
        black: "#3F3F40",
        "dh-blue": "#2A2D94",
        "ruby-red": "#B41831",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
