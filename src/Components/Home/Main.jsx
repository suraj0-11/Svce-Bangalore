import React, { useState, useEffect } from "react";
import video from "../Home/video.mp4";
import Cards from "./Cards/Cards";
import Courses from "./Courses/Courses";
import "./styles.css";

const Main = () => {
  return (
    <div>
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
            <div className="absolute top-0 left-0 md:left-20 w-full h-full flex flex-col justify-center text-white z-10 opacity-100">
              <p className="text-6xl font-bold">
                WE <br /> DON'T JUST <br /> DREAM IT, <br /> WE ENGINEER IT.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Main;
