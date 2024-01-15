type ThemeConfig = {
    [key in string]: string;
};
export declare const useTheme: (theme: ThemeConfig) => import("tailwindcss/types/config").Config;
export {};
