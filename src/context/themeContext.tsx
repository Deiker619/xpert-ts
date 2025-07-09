import { Moon, Sun } from "lucide-react";
import { createContext, JSX, useEffect, useState } from "react";

interface themeContextProps {
  theme: ThemeState;
  changeTheme: () => void;
}
interface ThemeState {
  theme: "light" | "dark";
  icon: JSX.Element;
}

// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext<themeContextProps | null>(null);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): ThemeState => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      return { theme: "dark", icon: <Moon /> };
    }
    // default light
    return { theme: "light", icon: <Sun color="white" /> };
  };
  const [theme, setTheme] = useState<ThemeState>(getInitialTheme);
  // Cada vez que cambia el tema, actualizar localStorage y <html> class
  useEffect(() => {
    localStorage.setItem("theme", theme.theme);

    const html = document.documentElement;
    // Reemplazar o agregar clase según el tema actual
    if (theme.theme === "dark") {
      html.classList.replace("light", "dark");
      if (!html.classList.contains("dark")) html.classList.add("dark");
    } else {
      html.classList.replace("dark", "light");
      if (!html.classList.contains("light")) html.classList.add("light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) =>
      prev.theme === "light"
        ? { theme: "dark", icon: <Moon /> }
        : { theme: "light", icon: <Sun color="white" /> }
    );
  };

  return (
    <themeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};
// useThemeContext has been moved to a separate file for Fast Refresh compatibility.
