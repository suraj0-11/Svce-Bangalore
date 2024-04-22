import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import video from "../Home/video.mp4";
import Collegebg from "./CollegeBG/Collegebg";
import Cards from "./Cards/Cards";
import "./styles.css";

const Main = () => {
  const [showCollegebg, setShowCollegebg] = useState(false);

  // Scroll event listener to trigger the transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const videoHeight = document.querySelector(".background").offsetHeight;

      if (scrollPosition >= videoHeight) {
        setShowCollegebg(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="parallax-wrapper">
        <div className="background">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover fixed z-0"
          />
          <div className="absolute top-0 left-0 md:left-20 w-full h-full flex flex-col justify-center text-white z-10">
            <p className="text-6xl font-bold">
              WE <br /> DON'T JUST <br /> DREAM IT, <br /> WE ENGINEER IT.
            </p>
          </div>
        </div>
        <div
          className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
            showCollegebg ? "opacity-100" : "opacity-0"
          }`}
        >
          <Collegebg />
        </div>
      </div>
      <Navbar />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Main;
