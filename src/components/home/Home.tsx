import { Element } from "react-scroll";
import TerminalWindow from "./TerminalWindow";
import TypedGreetings from "./TypedGreetings";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <Element as="section" name="home">
      <Avatar />
      <h2 className="text-5xl py-2 text-teal-600 font-medium">👋 I'm</h2>
      <h2 className="text-5xl py-2 text-teal-600 font-medium pb-6">Yifan Yang</h2>
      <TerminalWindow>
        <TypedGreetings />
      </TerminalWindow>
      <p className="text-md py-5 text-gray-500 dark:text-gray-300 leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugiat provident voluptate
        optio perferendis fugit animi nobis quos asperiores quis aut ducimus dicta, temporibus
        voluptas nihil unde dolores, maxime saepe!
      </p>
    </Element>
  );
};
Home.displayName = "Home";
export default Home;
