import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        robotoslab: "Roboto Slab",
        robotomono: "Roboto Mono",
        p2p: "press2p",
        open: "Open Sans",
      },
    },
  },
  plugins: [],
};
export default config;
