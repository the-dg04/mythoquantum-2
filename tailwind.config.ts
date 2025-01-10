import type { Config } from "tailwindcss";

export default {
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
        "color-100":"#EAD8B1",
        "color-200":"#6A9AB0",
        "color-300":"#3A6D8C",
        "color-400":"#001F3F",
      },
    },
  },
  plugins: [],
} satisfies Config;
