"use client";

import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useDarkMode } from "@/contexts/dark-mode";

const DarkModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div className="fixed bottom-4 right-4">
      {isDarkMode ? (
        <BsSun
          onClick={() => setIsDarkMode(false)}
          className="text-white cursor-pointer text-2xl"
        />
      ) : (
        <BsFillMoonStarsFill
          onClick={() => setIsDarkMode(true)}
          className="cursor-pointer text-2xl"
        />
      )}
    </div>
  );
};
DarkModeSwitcher.displayName = "DarkModeSwitcher";
export default DarkModeSwitcher;
