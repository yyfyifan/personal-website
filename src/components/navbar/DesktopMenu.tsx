import React from "react";
import { Link } from "react-scroll";

interface MenuButton {
  linkTo: string;
  children: React.ReactNode;
}
const MenuButton: React.FC<MenuButton> = ({ linkTo, children }) => {
  return (
    <Link
      to={linkTo}
      smooth={true}
      duration={500}
      className="
      cursor-pointer block">
      {children}
    </Link>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden sm:flex justify-between gap-8">
      <li>
        <MenuButton linkTo="home">Home</MenuButton>
      </li>
      <li>
        <MenuButton linkTo="experience">Experience</MenuButton>
      </li>
      <li>
        <MenuButton linkTo="education">Education</MenuButton>
      </li>
    </ul>
  );
};
DesktopMenu.displayName = "DesktopMenu";
export default DesktopMenu;
