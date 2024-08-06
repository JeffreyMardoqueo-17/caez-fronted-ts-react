// src/interfaces/themes.ts
export interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  gray: string;
}

export interface ThemeConfig {
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
}

export interface MenuProps {
  toggleTheme: () => void;
  theme: "dark" | "light";
}
