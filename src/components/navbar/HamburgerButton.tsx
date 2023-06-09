import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerButton: React.FC<{ open: boolean; onToggleOpen: () => void }> = ({
  open,
  onToggleOpen,
}) => {
  return (
    <>
      {/* The z-index ensures the button is not hidden by the mobile menus. */}
      <div className="cursor-pointer sm:hidden z-10 dark:hover:text-pinkred" onClick={onToggleOpen}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </>
  );
};
HamburgerButton.displayName = "HamburgerButton";
export default HamburgerButton;
