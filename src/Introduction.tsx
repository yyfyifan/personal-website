import photo from "./assets/yifan.jpg";

const Introduction = () => {
  return (
    <section className="text-center p-10">
      <img
        src={photo}
        alt="portrait"
        className="relative 
        bg-gradient-to-b from-teal-500
        rounded-full h-40 w-40 mx-auto"
      />
      <h2 className="text-5xl py-2 text-teal-600 font-medium">Yifan Yang</h2>
      <h3 className="text-2xl py-2 dark:text-gray-100">Software Developer</h3>
      <p className="text-md py-5 text-gray-500 dark:text-gray-300 leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugiat provident voluptate
        optio perferendis fugit animi nobis quos asperiores quis aut ducimus dicta, temporibus
        voluptas nihil unde dolores, maxime saepe!
      </p>
    </section>
  );
};
Introduction.displayName = "Introduction";
export default Introduction;
