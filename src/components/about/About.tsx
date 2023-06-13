import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      as="section"
      name="about"
      className="h-screen text-teal-600 dark:text-gray-200 flex flex-col justify-center items-center">
      <h2 className="text-5xl text-center mb-16">About Me</h2>
    </Element>
  );
};
About.displayName = "About";
export default About;
