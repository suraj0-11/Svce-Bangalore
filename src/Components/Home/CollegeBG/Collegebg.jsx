import { useEffect, useRef } from "react";
import "./Collegebg.css";

function Collegebg() {
  const mountainLeftRef = useRef(null);
  const mountainRightRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const textRef = useRef(null);
  const manRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      mountainLeftRef.current.style.left = `-${value / 0.7}px`;
      cloud2Ref.current.style.left = `-${value * 2}px`;
      mountainRightRef.current.style.left = `${value / 0.7}px`;
      cloud1Ref.current.style.left = `${value * 2}px`;
      textRef.current.style.bottom = `-${value}px`;
      manRef.current.style.height = `${window.innerHeight - value}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="top">
        <img
          src="https://svcengg.edu.in/wp-content/uploads/2022/11/vlcsnap-2020-08-10-00h20m48s262.jpg"
          id="bg"
          alt="Background"
        />
        <h2 id="text" ref={textRef}></h2>
        <img
          src="src\Components\Home\CollegeBG\transparent.png"
          id="man"
          ref={manRef}
          alt=""
        />
        <img
          src="src\Components\Home\CollegeBG\transparent.png"
          id="clouds_1"
          ref={cloud1Ref}
          alt=""
        />
        <img
          src="src\Components\Home\CollegeBG\transparent.png"
          id="clouds_2"
          ref={cloud2Ref}
          alt=""
        />
        <img
          className="object-scale-down"
          src="src\Components\Home\CollegeBG\transparent.png"
          id="mountain_left"
          ref={mountainLeftRef}
          alt=""
        />
        <img
          src="src\Components\Home\CollegeBG\transparent.png"
          id=""
          ref={mountainRightRef}
          alt=""
        />
      </section>
    </>
  );
}

export default Collegebg;
