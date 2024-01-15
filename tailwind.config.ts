import type { Config } from "tailwindcss";

type ThemeConfig = {
  [key in string]: string
}
export const useTheme = (theme:ThemeConfig) => {
  const config: Config = {
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
  
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [
       ({ addVariant }: any ) => {
        addVariant("child", "& > *");
        addVariant("child-hover", "& > *:hover");
      },

       ({ addUtilities }: any)  => {
        addUtilities({
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        });
      },
    ],
  };

  return config
}


