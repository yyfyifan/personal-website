import { motion } from "framer-motion";

/**
 * The menu is hidden when the viewport is smaller than "md"
 */
const MobileMenu: React.FC<{ show: boolean }> = ({ show }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.5, x: "-100%" },
  };

  return (
    <motion.ul
      animate={show ? "open" : "closed"}
      variants={variants}
      transition={{ type: "tween" }}
      className={
        "fixed top-0 left-0 bottom-0 right-0 text-3xl bg-white flex flex-col justify-center items-center gap-16"
      }>
      <li>Home</li>
      <li>About</li>
      <li>Experience</li>
      <li>Education</li>
    </motion.ul>
  );
};
MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
