import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
