import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  return (
    // Only display in large screen
    <ul className="fixed hidden lg:flex flex-col left-0 top-[40%] text-xl text-gray-200">
      <li
        className="w-[160px] h-[60px] flex items-center bg-[#0a66c2]
            ml-[-100px] hover:ml-0 duration-300 ">
        <a
          href="https://www.linkedin.com/in/yifanyang-swe/"
          target="_blank"
          className="w-full p-4 flex justify-between items-center">
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li
        className="w-[160px] h-[60px] flex items-center bg-[#24292f]
            ml-[-100px] hover:ml-0 duration-300 ">
        <a
          href="https://github.com/yyfyifan"
          target="_blank"
          className="w-full p-4 flex justify-between items-center">
          Github <FaGithub size={30} />
        </a>
      </li>
      <li
        className="w-[160px] h-[60px] flex items-center bg-red-500
            ml-[-100px] hover:ml-0 duration-300 ">
        <a
          href="mailto:yifan.yang.swe@gmail.com"
          className="w-full p-4 flex justify-between items-center">
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <li
        className="w-[160px] h-[60px] flex items-center bg-orange-400
            ml-[-100px] hover:ml-0 duration-300 ">
        <a
          href="https://bit.ly/yifan-yang-resume"
          target="_blank"
          className="w-full p-4 flex justify-between items-center">
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  );
};
SocialIcons.displayName = "SocialIcons";
export default SocialIcons;
