import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import classNames from "classnames";

const socialIconProperties = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: "https://www.linkedin.com/in/yifanyang-swe/",
    backgroundColor: "bg-[#0a66c2]",
  },
  {
    name: "Github",
    icon: <FaGithub size={30} />,
    href: "https://github.com/yyfyifan",
    backgroundColor: "bg-[#24292f]",
  },
  {
    name: "Goodreads",
    icon: <FaGoodreads size={30} />,
    href: "https://www.goodreads.com/yifanyang/",
    backgroundColor: "bg-orange-400",
  },
  {
    name: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    href: "https://bit.ly/yifan-yang-resume",
    backgroundColor: "bg-red-500",
  },
  // {
  //   name: "Email",
  //   icon: <HiOutlineMail size={30} />,
  //   href: "mailto:yifan.yang.swe@gmail.com",
  //   backgroundColor: "bg-red-500",
  // },
];

const SocialIcons = () => {
  return (
    // Only display in large screen
    <ul className="fixed hidden lg:flex flex-col left-0 top-[40%] text-xl text-gray-200">
      {socialIconProperties.map((props) => (
        <li
          key={props.name}
          className={classNames(
            "w-[180px] h-[60px] flex items-center ml-[-120px] hover:ml-0 duration-300",
            props.backgroundColor
          )}>
          <a
            href={props.href}
            target="_blank"
            className="w-full p-4 flex justify-between items-center">
            {props.name}
            <span className="">{props.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
SocialIcons.displayName = "SocialIcons";
export default SocialIcons;
