import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-gray-200 text-center py-10 flex flex-col items-center justify-center gap-10">
      <section
        id="contacts"
        className="flex justify-center gap-16 py-3 
        text-gray-600 dark:text-gray-200 text-4xl">
        <a href="https://github.com/yyfyifan" target="_blank">
          <AiFillGithub />
        </a>

        <a href="https://www.linkedin.com/in/yifanyang-swe/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="mailto:yifan.yang.swe@gmail.com" target="_blank">
          <AiTwotoneMail />
        </a>
      </section>
      <div className="flex flex-col items-center justify-center gap-1">
        <span>Copyright © 2023</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
export default Footer;
