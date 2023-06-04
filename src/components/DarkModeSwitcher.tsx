import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import useDarkMode from "../contexts/dark-mode/useDarkMode";

const DarkModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div>
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
