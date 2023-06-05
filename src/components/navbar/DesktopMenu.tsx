import { Link } from "react-scroll";

const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex justify-between gap-8 [&>li]:cursor-pointer">
      <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
      </li>

      <li>
        <Link to="education" smooth={true} duration={500}>
          Education
        </Link>
      </li>
    </ul>
  );
};
DesktopMenu.displayName = "DesktopMenu";
export default DesktopMenu;
