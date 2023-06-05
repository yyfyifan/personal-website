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
    <nav
      className="fixed w-full h-[80px] flex justify-between items-center
        px-4">
      <div>
        <h1 className="font-roboto text-xxl">YifanYang</h1>
      </div>

      <DesktopMenu />

      <HamburgerButton open={showHamburgerButton} onToggleOpen={handleToggleHamburgerButton} />

      <MobileMenu visible={showHamburgerButton} onToggleVisibility={handleToggleHamburgerButton} />
    </nav>
  );
};
Navbar.displayName = "Navbar";
export default Navbar;
