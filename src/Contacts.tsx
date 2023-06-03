import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
const Contacts = () => {
  return (
    <section id="contacts" className="flex justify-center gap-16 py-3 text-gray-600">
      <AiFillGithub />
      <AiFillLinkedin />
      <AiTwotoneMail />
    </section>
  );
};
Contacts.displayName = "Contacts";
export default Contacts;
