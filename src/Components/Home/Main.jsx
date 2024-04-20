import React from "react";
import Navbar from "../NavBar/NavBar";
import video from "../Home/video.mp4";
import "./styles.css"; // Import the provided CSS styles

const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="parallax-wrapper">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover fixed z-0"
        />
        <div className="absolute top-0 left-0 md:left-10 w-full h-full flex flex-col justify-center text-white z-10">
          <p className="text-6xl font-bold">
            WE <br />
            DON'T JUST <br />
            DREAM IT, <br /> WE ENGINEER IT.
          </p>
        </div>
        <div className="background background--summer">
          <h2 className="title">Summer</h2>
        </div>

        <div className="background background--winter">
          <h2 className="title"></h2>
        </div>
        <section className="season-desc">
          <div className="desc-wrapper">
            <h3 className="season--title">Welcome to</h3>
            <h3 className="season--title">Sri Venkateshwara College</h3>
            <h3 className="season--title">of Engineering</h3>
            <p className="season--about">
              For over decade SVCE has provided peerless academic,
              administrative and pastoral support to students hoping to succeed
              and beyond. From academic aspirations to the simple day-to-day
              challenges of living, we understand the importance of every part
              of the student journey.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
