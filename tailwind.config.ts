import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-green": "#2DDB92",
      "danger-red": "#FF4242",
      "dark-green": "#176242",
      "light-gray": "#F5F5F5",
      "dark-gray": "#999999",
      yellow: "#FFCA7C",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "480px",
      md: "1023px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      // TODO: Check container width and maybe set it like that
      screens: {
        sm: "100%",
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    // @ts-ignore
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
export default config;
