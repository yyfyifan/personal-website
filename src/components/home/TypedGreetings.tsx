import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedGreetings = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'System.out.println("Hello");',
        'std::cout &lt;&lt; "Hello" &lt;&lt; std::endl;',
        'console.log("Hello");',
        'Console.WriteLine("Hello");',
        'print("Hello")',
        'echo "Hello";',
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};
TypedGreetings.displayName = "TypedGreetings";
export default TypedGreetings;
