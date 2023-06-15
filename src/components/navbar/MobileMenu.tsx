import { motion } from "framer-motion";

interface MenuButton {
  linkTo: string;
  onClick: () => void;
  children: React.ReactNode;
}
const MenuButton: React.FC<MenuButton> = ({ linkTo, onClick: handleClick, children }) => {
  return (
    <a
      href={`#${linkTo}`}
      onClick={handleClick}
      className="
      cursor-pointer block 
      transition duration-150 dark:hover:text-pinkred 
       ">
      {children}
    </a>
  );
};

/**
 * The menu is hidden when the viewport is smaller than "sm"
 */
const MobileMenu: React.FC<{ visible: boolean; onToggleVisibility: () => void }> = ({
  visible,
  onToggleVisibility: handleToggleVisibility,
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.5, x: "-100%" },
  };

  return (
    <motion.ul
      animate={visible ? "open" : "closed"}
      variants={variants}
      transition={{ type: "tween" }}
      className={
        "fixed sm:hidden top-0 left-0 bottom-0 right-0 text-3xl flex flex-col bg-white dark:bg-gray-900 justify-center items-center gap-16"
      }>
      <li>
        <MenuButton onClick={handleToggleVisibility} linkTo="home">
          Home
        </MenuButton>
      </li>
      <li>
        <MenuButton onClick={handleToggleVisibility} linkTo="experience">
          Experience
        </MenuButton>
      </li>

      <li>
        <MenuButton onClick={handleToggleVisibility} linkTo="education">
          Education
        </MenuButton>
      </li>
    </motion.ul>
  );
};
MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
