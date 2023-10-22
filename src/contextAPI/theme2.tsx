import { useState, PropsWithChildren } from "react";

import { createContext } from "../utilities/context";

type ThemeProps = {
  theme: string;
  toggleTheme: () => void;
};

const [useContext, Provider] = createContext<ThemeProps>();
export const useTheme = useContext;

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default ThemeProvider;
