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
      relative cursor-pointer block text-xl px-2
      transition duration-150 dark:hover:text-pinkred
      after:absolute after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:bg-pinkred
      after:hover:w-full after:transition-[width] after:duration-150
    ">
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
