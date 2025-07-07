import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "600px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px",
      },
      colors: {
        textGray: "#3D3D3DFF",
        textGrayLight: "#474747FF",
        borderGray: "#545454FF",
        inputGray: "#2B2B2BFF",
        iconBlue: "#1D9BF0FF",
        icongreen: "#00BA7CFF",
        iconPink: "#E0245EFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
