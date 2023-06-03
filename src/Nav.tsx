import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      {/* <h1 className="font-roboto text-xxl">Yifan</h1> */}
      <ul className="flex items-center">
        {/* Dark Mode */}
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        {/* Resume */}
        {/* <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500
            block
            text-sm text-white px-4 py-2 border-none rounded-md ml-8">
            Resume
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
Nav.displayName = "Nav";
export default Nav;
