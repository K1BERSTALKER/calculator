// src/components/ThemeProvider.tsx

import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from '../app/store';
// import { setTheme, Theme } from '../features/theme/themeSlice';
import { RootState } from "@/store";
import { Theme, setTheme } from "@/store/theme/themeSlice";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  //   const dispatch = useDispatch();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
}

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const setThemeWrapper = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, setTheme: setThemeWrapper };
};
