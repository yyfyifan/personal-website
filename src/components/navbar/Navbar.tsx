import { useState } from "react";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

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
      {/* Desktop menu */}
      <ul className="hidden md:flex justify-between gap-8 [&>li]:cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Education</li>
      </ul>
      {/* Hamburger */}
      {/* The z-index ensures the button is not hidden by the mobile menus. */}
      <div className="md:hidden z-10" onClick={handleToggleHamburgerButton}>
        {showHamburgerButton ? <FaTimes /> : <FaBars />}
      </div>

      <MobileMenu show={showHamburgerButton} />
      {/* Social icons */}
      <div className="hidden"></div>
      {/* Dark Mode */}
      {/* <DarkModeSwitcher /> */}
      {/* Resume */}
      {/*
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500
            block
            text-sm text-white px-4 py-2 border-none rounded-md ml-8">
            Resume
          </a>
        */}
    </nav>
  );
};
Navbar.displayName = "Nav";
export default Navbar;
