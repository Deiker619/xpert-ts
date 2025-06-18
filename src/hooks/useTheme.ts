import { themeContext } from "@/context/themeContext";
import { useContext } from "react";

export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useThemeContext debe usarse dentro de <ThemeProvider>");
  }
  return context;
};