import React from "react";

interface MenuButton {
  linkTo: string;
  children: React.ReactNode;
}
const MenuButton: React.FC<MenuButton> = ({ linkTo, children }) => {
  return (
    <a
      href={`#${linkTo}`}
      className="
    cursor-pointer block text-xl
    transition duration-150 dark:hover:text-pinkred">
      {children}
    </a>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden sm:flex justify-between gap-8">
      <li>
        <MenuButton linkTo="hero">Home</MenuButton>
      </li>
      <li>
        <MenuButton linkTo="about">About</MenuButton>
      </li>
      <li>
        <MenuButton linkTo="experience">Experience</MenuButton>
      </li>
    </ul>
  );
};
DesktopMenu.displayName = "DesktopMenu";
export default DesktopMenu;
