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
        p2p: "Press Start 2P",
        robotoslab: "Roboto Slab",
        robotomono: "Roboto Mono",
        open: "Open Sans",
      },
    },
  },
  plugins: [],
};
export default config;
