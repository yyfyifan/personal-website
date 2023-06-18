import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [showHamburgerButton, setShownHamburgerButton] = useState(false);
  const handleToggleHamburgerButton = () => {
    setShownHamburgerButton((value) => !value);
  };

  return (
    <nav className="fixed w-full">
      <div
        className="max-w-5xl mx-auto h-[80px]
              flex justify-between items-center
              px-10 font-josefin
              text-black dark:text-white">
        <div>
          <a href="/">
            <h1 className="font-greatevibe text-2xl sm:text-3xl transition duration-100 dark:hover:text-pinkred">
              Yifan Yang
            </h1>
          </a>
        </div>

        <DesktopMenu />

        <HamburgerButton open={showHamburgerButton} onToggleOpen={handleToggleHamburgerButton} />

        <MobileMenu
          visible={showHamburgerButton}
          onToggleVisibility={handleToggleHamburgerButton}
        />
      </div>
    </nav>
  );
};
Navbar.displayName = "Navbar";
export default Navbar;
