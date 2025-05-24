import type { Config } from "tailwindcss";
import {tokens} from "./src/tokens"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.fontFamily,
      boxShadow: tokens.boxShadow
    },
  },
  plugins: [],
} satisfies Config;
