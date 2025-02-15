import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        "custom-md": "calc(93vw - 220px)",
      },
      width: {
        "custom-md": "calc(93vw - 220px)",
      },
      maxHeight: {
        "custom-max": "calc(100vh - 220px)",
      }
    },
  },
  plugins: [],
};
export default config;
