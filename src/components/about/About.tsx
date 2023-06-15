const About = () => {
  return (
    <section
      id="about"
      className="h-screen text-teal-600 dark:text-gray-200 flex flex-col justify-center items-center snap-start">
      <h2 className="text-5xl text-center mb-16 border-b-4 border-pinkred">About Me</h2>
      <div className="max-w-4xl grid sm:grid-cols-2 gap-8">
        <div className="sm:text-right text-2xl font-bold">
          <p>Hey there!</p>
          <p>
            I'm an experienced Software Engineer who's all about diving into the exciting world of
            technology.
          </p>
        </div>
        <div>
          <p className="mb-4">
            I am driven by a passion for problem-solving and a desire to create innovative solutions
            that make a positive impact. With a strong foundation in programming languages and
            software development principles, I am constantly honing my skills and staying abreast of
            the latest industry trends.
          </p>
          <p>
            In an industry that is constantly evolving, I embrace change and view it as an
            opportunity for growth. I am comfortable with exploring new technologies, frameworks,
            and methodologies, adapting quickly to the evolving landscape of software engineering.
            This mindset allows me to stay ahead of the curve and deliver cutting-edge solutions
            that leverage the latest advancements.
          </p>
        </div>
      </div>
    </section>
  );
};
About.displayName = "About";
export default About;
