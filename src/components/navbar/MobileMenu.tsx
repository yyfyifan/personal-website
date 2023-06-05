import { motion } from "framer-motion";
import { Link } from "react-scroll";
/**
 * The menu is hidden when the viewport is smaller than "md"
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
        "fixed top-0 left-0 bottom-0 right-0 text-3xl bg-white flex flex-col justify-center items-center gap-16"
      }>
      <li>
        <Link onClick={handleToggleVisibility} to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link onClick={handleToggleVisibility} to="experience" smooth={true} duration={500}>
          Experience
        </Link>
      </li>

      <li>
        <Link onClick={handleToggleVisibility} to="education" smooth={true} duration={500}>
          Education
        </Link>
      </li>
    </motion.ul>
  );
};
MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
