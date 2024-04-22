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
          src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg"
          id="bg"
          alt="Background"
        />
        <h2 id="text" ref={textRef}>
          SVCE
        </h2>
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/man.png"
          id="man"
          ref={manRef}
          alt="Man"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png"
          id="clouds_1"
          ref={cloud1Ref}
          alt="Clouds 1"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png"
          id="clouds_2"
          ref={cloud2Ref}
          alt="Clouds 2"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png"
          id="mountain_left"
          ref={mountainLeftRef}
          alt="Mountain Left"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png"
          id="mountain_right"
          ref={mountainRightRef}
          alt="Mountain Right"
        />
      </section>
    </>
  );
}

export default Collegebg;
