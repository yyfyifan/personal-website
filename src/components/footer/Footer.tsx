import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import ContactIcon from "./ContactIcon";

const Footer = () => {
  return (
    <footer className="text-gray-200 text-center py-10 flex flex-col items-center justify-center gap-10">
      <section id="contacts" className="flex justify-center gap-16 py-3 text-4xl">
        <ContactIcon href="https://github.com/yyfyifan" icon={<AiFillGithub />} />
        <ContactIcon href="https://www.linkedin.com/in/yifanyang-swe/" icon={<AiFillLinkedin />} />
        <ContactIcon href="mailto:yifan.yang.swe@gmail.com" icon={<AiTwotoneMail />} />
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
