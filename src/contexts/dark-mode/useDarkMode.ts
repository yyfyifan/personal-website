import { createContext, useContext } from "react";

interface DarkModeProviderProps {
  isDarkMode: boolean;
  setIsDarkMode: (darkMode: boolean) => void;
}

export const darkModeContext = createContext<DarkModeProviderProps | null>(null);

const useDarkMode = () => {
  const contextData = useContext(darkModeContext);
  if (!contextData) {
    throw new Error("This hook must be called inside the DarkModeContextProvider!");
  }

  return contextData;
};

export default useDarkMode;
