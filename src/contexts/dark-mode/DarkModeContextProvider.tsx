import { darkModeContext } from "./useDarkMode";
import React, { useState } from "react";
import classNames from "classnames";

const DarkModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {/* 
        When it's in dark mode, apply the class name "dark" to a top-level HTML 
        element so all descendant elements with dark: Tailwind CSS will take effect
      */}
      <div className={classNames({ dark: isDarkMode })}>{children}</div>
    </darkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
