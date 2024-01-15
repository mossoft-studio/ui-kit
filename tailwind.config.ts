import type { Config } from "tailwindcss";

type ThemeConfig = {
  [key in string]: string
}
export const useTheme = (theme:ThemeConfig) => {
  const config: Config = {
    ...theme,
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


