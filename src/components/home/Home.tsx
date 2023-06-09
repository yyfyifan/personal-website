import { Element } from "react-scroll";
import TerminalWindow from "./TerminalWindow";
import TypedGreetings from "./TypedGreetings";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <Element as="section" name="home" className="w-full h-screen text-center">
      {/* Container */}
      <div
        className="max-w-5xl mx-auto px-8 h-full
                flex flex-col justify-center">
        <Avatar />
        <p className="text-xl text-teal-600 font-light">👋 Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl text-teal-600 dark:text-white font-bold pb-2">
          Yifan&nbsp;
          <span className="dark:text-pinkred">Yang</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-teal-600 pb-10">I'm a Software Engineer.</h2>
        <TerminalWindow>
          <TypedGreetings />
        </TerminalWindow>
      </div>
    </Element>
  );
};
Home.displayName = "Home";
export default Home;
