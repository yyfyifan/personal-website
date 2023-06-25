import TerminalWindow from "./TerminalWindow";
import TypedGreetings from "./TypedGreetings";
import Avatar from "./Avatar";

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen text-center snap-start">
      {/* Container */}
      <div
        className="max-w-5xl mx-auto px-8 h-full
                flex flex-col justify-center">
        <div className="mb-20">
          <Avatar />
          <p className="text-xl text-teal-600 dark:text-red-300 font-light">👋 Hi, my name is</p>
          <h1 className="text-3xl sm:text-5xl text-teal-600 font-bold py-5">
            <span className="dark:text-white">Yifan</span>
            &nbsp;
            <span className="dark:text-pinkred">Yang</span>
          </h1>
          <h2
            className="text-xl sm:text-2xl text-teal-600 dark:text-white 
            tracking-widest font-light mb-10">
            I&apos;m a Software Engineer.
          </h2>
        </div>
        <TerminalWindow>
          <TypedGreetings />
        </TerminalWindow>
      </div>
    </section>
  );
};
Hero.displayName = "Hero";
export default Hero;
