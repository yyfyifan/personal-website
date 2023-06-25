"use client";

import React from "react";
import classNames from "classnames";
import { useLocalStorage } from "react-use";

import { createContext, useContext } from "react";

interface DarkModeProviderProps {
  isDarkMode: boolean;
  setIsDarkMode: (darkMode: boolean) => void;
}

const darkModeContext = createContext<DarkModeProviderProps | null>(null);

export const useDarkMode = () => {
  const contextData = useContext(darkModeContext);
  if (!contextData) {
    throw new Error("This hook must be called inside the DarkModeContextProvider!");
  }

  return contextData;
};

export const DarkModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode = true, setIsDarkMode] = useLocalStorage("dark-mode", true);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {/* 
        When it's in dark mode, apply the class name "dark" to a top-level HTML 
        element so all descendant elements with dark: Tailwind CSS will take effect
      */}
      <div className={classNames({ dark: isDarkMode })}>
        <div className="bg-white dark:bg-gray-900">{children}</div>
      </div>
    </darkModeContext.Provider>
  );
};
