"use client";

import { ThemeProvider } from "@/components/theme-provider";

// export const ThemeContext = createContext({});

export default function ThemesProvider({ children }: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
