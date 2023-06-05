import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerButton: React.FC<{ open: boolean; onToggleOpen: () => void }> = ({
  open,
  onToggleOpen,
}) => {
  return (
    <>
      {/* The z-index ensures the button is not hidden by the mobile menus. */}
      <div className="md:hidden z-10" onClick={onToggleOpen}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </>
  );
};
HamburgerButton.displayName = "HamburgerButton";
export default HamburgerButton;
