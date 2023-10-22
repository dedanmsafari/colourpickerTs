import React, { useState, useContext, createContext, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>(
  null as unknown as ThemeContextProps
);

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
